#!/usr/bin/env swift
import AppKit
import Foundation

// Usage: swift extract-icons.swift [app-path] [output-directory] [name-regex]
// Reads the installed app only. No Raycast process or account data is accessed.
let args = Array(CommandLine.arguments.dropFirst())
let appPath = args.count > 0 ? args[0] : "/Applications/Raycast.app"
let outputPath = args.count > 1 ? args[1] : "exported-icons"
let defaultPattern =
  "^(command-|window-manager-|package-|quicklinks?[-]|snippets[-]|snippets$|script-commands-export-|dictionary-extension-|emoji-extension-|calendar-extension-(20|32)$|raycast-notes[-]|raycast-ai-stars-|raycast-command-template-)"
let pattern = args.count > 2 ? args[2] : defaultPattern
let fm = FileManager.default
let output = URL(fileURLWithPath: outputPath, isDirectory: true)
let bundle = Bundle(path: appPath)!
let assetPath = appPath + "/Contents/Resources/Assets.car"
let process = Process()
process.executableURL = URL(fileURLWithPath: "/usr/bin/assetutil")
process.arguments = ["--info", assetPath]
let pipe = Pipe()
process.standardOutput = pipe
try process.run()
let infoData = pipe.fileHandleForReading.readDataToEndOfFile()
process.waitUntilExit()
guard process.terminationStatus == 0 else { fatalError("assetutil failed") }
let assets = try JSONSerialization.jsonObject(with: infoData) as! [[String: Any]]
let names = Set(
  assets.compactMap { a -> String? in
    guard let t = a["AssetType"] as? String, ["Image", "Vector"].contains(t),
      let n = a["Name"] as? String,
      n.range(of: pattern, options: .regularExpression) != nil
    else { return nil }
    return n
  }
).sorted()
try fm.createDirectory(at: output, withIntermediateDirectories: true)
for folder in ["png-512", "png-32", "pdf"] {
  try fm.createDirectory(
    at: output.appendingPathComponent(folder), withIntermediateDirectories: true)
}
try infoData.write(to: output.appendingPathComponent("asset-catalog.json"))
var manifest: [[String: Any]] = []
var failures: [String] = []
for name in names {
  try autoreleasepool {
    guard let image = bundle.image(forResource: NSImage.Name(name)) else {
      failures.append(name)
      return
    }
    // Preserve the PDF representation and its vector graphics without rasterizing.
    let vectors = image.representations.compactMap { $0 as? NSPDFImageRep }
    let pdf = vectors.first
    if let pdf {
      try pdf.pdfRepresentation.write(to: output.appendingPathComponent("pdf/\(name).pdf"))
    }
    let renderImage: NSImage
    if let pdf {
      renderImage = NSImage(size: image.size)
      renderImage.addRepresentation(pdf)
    } else {
      renderImage = image
    }
    for side in [32, 512] {
      let ratio = renderImage.size.height / renderImage.size.width
      let height = max(1, Int((Double(side) * ratio).rounded()))
      let rep = NSBitmapImageRep(
        bitmapDataPlanes: nil, pixelsWide: side, pixelsHigh: height,
        bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true, isPlanar: false,
        colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0)!
      let context = NSGraphicsContext(bitmapImageRep: rep)!
      NSGraphicsContext.saveGraphicsState()
      NSGraphicsContext.current = context
      context.imageInterpolation = .high
      renderImage.draw(
        in: NSRect(x: 0, y: 0, width: side, height: height), from: .zero, operation: .copy,
        fraction: 1)
      NSGraphicsContext.restoreGraphicsState()
      try rep.representation(using: .png, properties: [:])!.write(
        to: output.appendingPathComponent("png-\(side)/\(name).png"))
    }
    manifest.append([
      "asset": name, "hasOriginalPDF": pdf != nil, "pointWidth": image.size.width,
      "pointHeight": image.size.height, "pdfRepresentations": vectors.count,
    ])
  }
}
let data = try JSONSerialization.data(
  withJSONObject: [
    "app": appPath,
    "version": bundle.object(forInfoDictionaryKey: "CFBundleShortVersionString") ?? "unknown",
    "icons": manifest, "failed": failures,
  ], options: [.prettyPrinted, .sortedKeys])
try data.write(to: output.appendingPathComponent("manifest.json"))
print(
  "Exported \(manifest.count) assets; \(manifest.filter { $0["hasOriginalPDF"] as? Bool == true }.count) vector PDFs. Failed: \(failures)"
)
