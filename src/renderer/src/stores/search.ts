import { createSignal } from 'solid-js';

/**
 * Store for managing global search functionality
 * 
 * Provides reactive state for the search modal visibility and search term.
 */
const [isSearchOpen, setIsSearchOpen] = createSignal(false);
const [searchTerm, setSearchTerm] = createSignal('');

/**
 * Toggle the search modal visibility
 */
const toggleSearch = () => {
  setIsSearchOpen(!isSearchOpen());
  // Clear search term when closing
  if (!isSearchOpen()) {
    setSearchTerm('');
  }
};

/**
 * Close the search modal and clear search term
 */
const closeSearch = () => {
  setIsSearchOpen(false);
  setSearchTerm('');
};

/**
 * Open the search modal
 */
const openSearch = () => {
  setIsSearchOpen(true);
};

export const useSearchStore = () => ({
  isSearchOpen,
  searchTerm,
  setSearchTerm,
  toggleSearch,
  closeSearch,
  openSearch,
});