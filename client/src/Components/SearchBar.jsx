import React, { useState } from 'react';

function SearchBar({ onSearch, onVeganToggle }) {
  const [isVegan, setIsVegan] = useState(false);
  const [searchBarInput, setSearchBarInput] = useState("")

  const handleSearch = () => {
    onSearch(searchBarInput, isVegan);
  };

  const handleVeganToggle = (e) => {
    setIsVegan(e.target.checked);
    onVeganToggle(e.target.checked);
  };

  const searchBarUpdate = (e) => {
    // console.log("poo")
    // console.log(e.target.value);
    setSearchBarInput(e.target.value)
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search recipes..."
        onChange={searchBarUpdate}
      />
      <button onClick={handleSearch}>
          Search
      </button>
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
