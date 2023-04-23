import React, { useState } from 'react';

function SearchBar({ onSearch, onVeganToggle }) {
  const [isVegan, setIsVegan] = useState(false);

  const handleSearch = (e) => {
    onSearch(e.target.value, isVegan);
  };

  const handleVeganToggle = (e) => {
    setIsVegan(e.target.checked);
    onVeganToggle(e.target.checked);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search recipes..."
        onChange={handleSearch}
      />
      <div className="search-checkbox">
        <label>
          <input
            type="checkbox"
            checked={isVegan}
            onChange={handleVeganToggle}
          />
          Vegan
        </label>
      </div>
    </div>
  );
}

export default SearchBar;
