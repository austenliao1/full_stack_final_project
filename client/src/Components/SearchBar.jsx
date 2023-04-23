import React from 'react';

function SearchBar({ onSearch }) {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search recipes..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;