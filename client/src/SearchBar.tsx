import React, { useState } from 'react';
import fetchHikingSpots from './api';

interface SearchBarProps {
  onSearch: (query: string, notFoundItems: string[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // For demonstration purposes, let's assume a list of items to search.
    const allItems = ['item1', 'item2', 'item3', 'item4'];

    // Filter items based on the search query
    const foundItems = allItems.filter(item => item.includes(searchQuery));

    // Identify items not found
    const notFoundItems = allItems.filter(item => !foundItems.includes(item));

    // Call the onSearch callback with the query and not found items
    onSearch(searchQuery, notFoundItems);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
