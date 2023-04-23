import "./App.css";
import RecipeGrid from "./Components/RecipeGrid";
import SearchBar from "./Components/SearchBar";
import React, { useState } from "react";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import randomRecipes from "./randomRecipes.json";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBarVisible, setSearchBarVisible] = useState(false);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const toggleSearchBar = () => {
    setSearchBarVisible(!searchBarVisible);
  };

  const filteredRecipes = randomRecipes.recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        {searchBarVisible && (
          <SearchBar onSearch={handleSearch} onToggle={toggleSearchBar} />
        )}
        <button onClick={toggleSearchBar} className="search-toggle">
          Search
        </button>
        <RecipeGrid recipes={filteredRecipes} />
      </header>
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;