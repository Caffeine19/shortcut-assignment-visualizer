#!/usr/bin/env python3
"""Compare Notion 'Shortcut Assignment' rows against local shortcut data files.

Usage:
    python3 compare.py <notion-content.json>

The <notion-content.json> is the file written by the Notion MCP
query-data-sources call ({"mode":"rows", ...}) — it has a top-level
"results" array of row objects.

Prints four diff sections:
  A. 本地有、Notion 无 (excludes builtIn)
  B. Notion 有、本地无 (flags DEPRECATED)
  C. 同组合但动作名不同 (excludes builtIn)
  D. 同名动作但组合不同
"""

import glob
import json
import os
import re
import sys

# ---------------------------------------------------------------- local ----

DIGITS = {
    'ZERO': '0', 'ONE': '1', 'TWO': '2', 'THREE': '3', 'FOUR': '4',
    'FIVE': '5', 'SIX': '6', 'SEVEN': '7', 'EIGHT': '8', 'NINE': '9',
}
SPECIAL = {
    'TILDE': 'Backtick', 'BACKSLASH': 'Back Slash',
    'LEFT_BRACKET': 'Left Bracket', 'RIGHT_BRACKET': 'Right Bracket',
    'SEMICOLON': 'Semicolon', 'QUOTE': 'Single Quote', 'SLASH': 'Slash',
    'COMMA': 'Comma', 'PERIOD': 'Period', 'BACKSPACE': 'Delete',
    'ENTER': 'Return', 'SPACE': 'Space', 'TAB': 'Tab',
    'ARROW_UP': 'Up', 'ARROW_DOWN': 'Down',
    'ARROW_LEFT': 'Left', 'ARROW_RIGHT': 'Right',
}
MOD_CANON = {
    'cmd': 'command', 'command': 'command',
    'ctrl': 'control', 'control': 'control',
    'opt': 'option', 'alt': 'option', 'option': 'option',
    'shift': 'shift',
}


def local_keyname(k):
    k = k.replace('KeyCode.', '').upper()
    return DIGITS.get(k, SPECIAL.get(k, k))


def extract_local(root):
    """Parse src/renderer/src/data/shortcut/*.ts into normalized bindings."""
    entries = []
    pattern = re.compile(
        r"\{\s*keys:\s*(\[(?:[^\[\]]|\[[^\[\]]*\])*\])(.*?)(?=\n  \}|\n    \})",
        re.S,
    )
    for path in glob.glob(os.path.join(root, 'src/renderer/src/data/shortcut/*.ts')):
        src = open(path).read()
        src_nc = re.sub(r'//.*', '', src)  # ignore commented-out bindings
        tool_const = re.search(r"const tool = '([^']*)'", src)
        tool_default = tool_const.group(1) if tool_const else None
        for m in pattern.finditer(src_nc):
            keys_block, rest = m.group(1), m.group(2)

            def field(name, _rest=rest):
                mm = re.search(name + r":\s*'([^']*)'", _rest)
                return mm.group(1) if mm else None

            action = field('actionName')
            if not action:
                continue
            bindings = []
            for b in re.finditer(r'\[([^\[\]]+)\]', keys_block):
                parts = [p.strip().strip("'\"") for p in b.group(1).split(',')]
                bindings.append(parts)
            entries.append({
                'file': os.path.basename(path),
                'action': action,
                'tool': field('tool') or tool_default,
                'keys': bindings,
                'builtIn': bool(re.search(r'\bbuiltIn\b\s*[,}]', rest)),
            })

    norm = []
    for e in entries:
        for b in e['keys']:
            first = b[0].lower()
            if first.startswith(('cmd', 'ctrl', 'opt', 'alt', 'command',
                                 'control', 'option', 'shift', 'left_', 'right_')):
                side = None
                base = first
                if base.startswith('left_') or base.startswith('right_'):
                    side, base = base.split('_', 1)
                canon = MOD_CANON[base]
                norm.append({
                    'action': e['action'], 'tool': e['tool'], 'file': e['file'],
                    'builtIn': e['builtIn'],
                    'binding': ('DOUBLE', canon, side),
                })
            else:
                key = local_keyname(b[0])
                mods = frozenset(b[1:])
                norm.append({
                    'action': e['action'], 'tool': e['tool'], 'file': e['file'],
                    'builtIn': e['builtIn'],
                    'binding': ('COMBO', key, mods),
                })
    return entries, norm


# --------------------------------------------------------------- notion ----

def parse_jsonish(v):
    try:
        return json.loads(v)
    except Exception:
        return v


def extract_notion(content_path):
    data = json.load(open(content_path))['results']
    rows = []
    for r in data:
        keys = parse_jsonish(r.get('Key', '[]'))
        mods = set()
        if r.get('Control') == '__YES__':
            mods.add('control')
        if r.get('Option') == '__YES__':
            mods.add('option')
        if r.get('Shift') == '__YES__':
            mods.add('shift')
        if r.get('Command') == '__YES__':
            mods.add('command')
        for k in keys:
            rows.append({
                'action': r.get('Action Name'),
                'key': k,
                'mods': frozenset(mods),
                'deprecated': r.get('Deprecated') == '__YES__',
            })
    return data, rows


# ----------------------------------------------------------------- main ----

def main():
    global content_path
    if len(sys.argv) < 2:
        raise SystemExit('usage: compare.py <notion-content.json>')
    content_path = sys.argv[1]
    root = os.getcwd()

    entries, local_norm = extract_local(root)
    nrows, notion = extract_notion(content_path)

    print(f'local: {len(entries)} entries / {len(local_norm)} bindings | '
          f'notion: {len(nrows)} rows / {len(notion)} combos')

    local_combos = {}
    for n in local_norm:
        b = n['binding']
        if b[0] == 'COMBO':
            local_combos.setdefault((b[1], b[2]), []).append(n)
    notion_combos = {}
    for n in notion:
        notion_combos.setdefault((n['key'], n['mods']), []).append(n)
    lset, nset = set(local_combos), set(notion_combos)

    print('\n===== A. 本地有、Notion 无 (排除 builtIn) =====')
    for c in sorted(lset - nset, key=str):
        for n in local_combos[c]:
            if n['builtIn']:
                continue
            print(f"  {sorted(c[1]) or ['-']} + {c[0]}  -> "
                  f"{n['action']} ({n['tool']}, {n['file']})")

    print('\n===== B. Notion 有、本地无 =====')
    for c in sorted(nset - lset, key=str):
        for n in notion_combos[c]:
            dep = ' [DEPRECATED]' if n['deprecated'] else ''
            print(f"  {sorted(c[1]) or ['-']} + {c[0]}  -> {n['action']}{dep}")

    print('\n===== C. 同组合但动作名不同 (排除 builtIn) =====')
    for c in sorted(lset & nset, key=str):
        lns = [n for n in local_combos[c] if not n['builtIn']]
        la = {n['action'] for n in lns}
        na = {n['action'] for n in notion_combos[c]}
        if not la or la == na:
            continue
        print(f"  {sorted(c[1]) or ['-']} + {c[0]}: 本地={la} | Notion={na}")

    print('\n===== D. 同名动作但组合不同 =====')

    def norm_name(s):
        return re.sub(r'[^a-z0-9]', '', s.lower())

    lnames = {}
    for n in local_norm:
        if not n['builtIn']:
            lnames.setdefault(norm_name(n['action']), []).append(n)
    nnames = {}
    for n in notion:
        nnames.setdefault(norm_name(n['action']), []).append(n)
    for name in sorted(set(lnames) & set(nnames)):
        l = lnames[name]
        nn = nnames[name]
        lstr = {
            f"({sorted(x['binding'][2]) if x['binding'][0] == 'COMBO' else sorted(x['binding'][2:])}+{x['binding'][1]})"
            for x in l
        }
        ndesc = {f"({sorted(x['mods'])}+{x['key']})" for x in nn}
        if lstr != ndesc:
            print(f"  {l[0]['action']!r}: 本地={sorted(lstr)} | Notion={sorted(ndesc)}")

    print('\n===== E. 本地 double 绑定 (Notion 无此概念) =====')
    for n in local_norm:
        b = n['binding']
        if b[0] == 'DOUBLE':
            side = f"({b[2]})" if b[2] else ''
            print(f"  double {b[1]}{side}  -> {n['action']} ({n['tool']})")


if __name__ == '__main__':
    main()
