import { Search, X } from 'lucide-solid';
import { type Component, For, Show, createEffect, createMemo, onCleanup, onMount } from 'solid-js';

import { shortcutListData } from '@renderer/data/shortcut';
import { useSearchStore } from '@renderer/stores/search';
import { type Shortcut } from '@renderer/types/shortcut';

/**
 * Search modal component for finding shortcuts globally
 * 
 * Features:
 * - Full-text search across action names, tools, and key combinations
 * - Keyboard navigation support (Escape to close)
 * - Visual representation of shortcuts with icons
 */
const SearchModal: Component = () => {
  const searchStore = useSearchStore();
  let searchInputRef: HTMLInputElement | undefined;

  /**
   * Filter shortcuts based on search term
   * Searches through action name, tool name, and generates key combination string
   */
  const filteredShortcuts = createMemo(() => {
    const term = searchStore.searchTerm().toLowerCase().trim();
    if (!term) return shortcutListData.slice(0, 50); // Show first 50 when no search

    return shortcutListData.filter((shortcut) => {
      // Build searchable key combination string
      const modifiers = [];
      if (shortcut.command) modifiers.push('cmd', 'command');
      if (shortcut.control) modifiers.push('ctrl', 'control');
      if (shortcut.option) modifiers.push('opt', 'option', 'alt');
      if (shortcut.shift) modifiers.push('shift');
      
      const keyCombo = [...modifiers, shortcut.keyCode].join(' ').toLowerCase();
      
      return (
        shortcut.actionName.toLowerCase().includes(term) ||
        shortcut.tool.toLowerCase().includes(term) ||
        keyCombo.includes(term) ||
        (shortcut.raycastExtension && shortcut.raycastExtension.toLowerCase().includes(term))
      );
    }).slice(0, 50); // Limit results for performance
  });

  /**
   * Generate human-readable key combination string for display
   */
  const formatKeyCombo = (shortcut: Shortcut) => {
    const parts = [];
    if (shortcut.command) parts.push('⌘');
    if (shortcut.control) parts.push('⌃');
    if (shortcut.option) parts.push('⌥');
    if (shortcut.shift) parts.push('⇧');
    parts.push(shortcut.keyCode.toUpperCase());
    return parts.join(' + ');
  };

  onMount(() => {
    // Handle keyboard shortcuts globally for the modal
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      if (searchStore.isSearchOpen() && event.key === 'Escape') {
        searchStore.closeSearch();
      }
    };
    
    document.addEventListener('keydown', handleGlobalKeyDown);
    
    onCleanup(() => {
      document.removeEventListener('keydown', handleGlobalKeyDown);
    });
  });

  // Auto-focus search input when modal opens
  createEffect(() => {
    if (searchStore.isSearchOpen() && searchInputRef) {
      // Small delay to ensure modal is rendered
      setTimeout(() => {
        searchInputRef?.focus();
      }, 50);
    }
  });

  return (
    <Show when={searchStore.isSearchOpen()}>
      <div 
        class="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            searchStore.closeSearch();
          }
        }}
        style={{ '-webkit-app-region': 'no-drag' }}
      >
        <div class="mt-20 w-full max-w-2xl rounded-xl border border-zinc-700/50 bg-zinc-900/90 p-6 shadow-2xl backdrop-blur-md">
          {/* Search Header */}
          <div class="flex items-center gap-3 border-b border-zinc-700/50 pb-4">
            <Search size={20} class="text-zinc-400" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search shortcuts by action, tool, or key combination..."
              value={searchStore.searchTerm()}
              onInput={(e) => searchStore.setSearchTerm(e.currentTarget.value)}
              class="flex-1 bg-transparent text-zinc-100 placeholder-zinc-500 outline-none"
            />
            <button
              onClick={() => searchStore.closeSearch()}
              class="text-zinc-500 hover:text-zinc-300"
            >
              <X size={18} />
            </button>
          </div>

          {/* Results */}
          <div class="mt-4 max-h-96 overflow-y-auto">
            <Show 
              when={filteredShortcuts().length > 0}
              fallback={
                <div class="py-8 text-center text-zinc-500">
                  {searchStore.searchTerm() ? 'No shortcuts found' : 'Type to search...'}
                </div>
              }
            >
              <div class="space-y-2">
                <For each={filteredShortcuts()}>
                  {(shortcut) => (
                    <div class="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-800/50 p-3 hover:bg-zinc-700/50">
                      {/* Tool Icon */}
                      <img 
                        src={shortcut.raycastExtensionIcon || shortcut.toolIcon} 
                        alt={shortcut.tool}
                        class="h-6 w-6 rounded"
                      />
                      
                      {/* Shortcut Info */}
                      <div class="flex-1 min-w-0">
                        <div class="font-medium text-zinc-100 truncate">
                          {shortcut.actionName}
                        </div>
                        <div class="text-sm text-zinc-400">
                          {shortcut.raycastExtension || shortcut.tool}
                        </div>
                      </div>
                      
                      {/* Key Combination */}
                      <div class="font-mono text-sm text-zinc-300 bg-zinc-800 px-2 py-1 rounded border border-zinc-700">
                        {formatKeyCombo(shortcut)}
                      </div>
                    </div>
                  )}
                </For>
              </div>
            </Show>
          </div>

          {/* Footer */}
          <div class="mt-4 border-t border-zinc-700/50 pt-3 text-xs text-zinc-500">
            {filteredShortcuts().length} shortcuts found • Press Esc to close
          </div>
        </div>
      </div>
    </Show>
  );
};

export default SearchModal;