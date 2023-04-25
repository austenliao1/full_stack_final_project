import "./App.css";
import RecipeGrid from "./Components/RecipeGrid";
import SearchBar from "./Components/SearchBar";
import React, { useState } from "react";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import randomRecipes from "./randomRecipes.json";

import axios from "axios";
import { useEffect } from "react";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const [searchTerm, setSearchTerm] = useState('apples,+flour,+sugar');
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [includeVegan, setIncludeVegan] = useState(false);
  const [recipeIds, setRecipeIds] = useState([]);

// const res = await axios
//   .get("http://localhost:4000/spoonacular/findRecipes", {
//     ingredients: searchTerm,
//   })

  const apiKey = '569e690dc2684bc8872e096c069a107a'

  async function searchRecipes() {
    console.log("test")
    console.log(searchTerm)

    const res = axios.get('https://api.spoonacular.com/recipes/findByIngredients', {
      params: {
          apiKey: apiKey,
          ingredients: searchTerm
      }})
      .then((response) => {
        console.log("then")
        console.log(response.data)

        // get the IDs of returned recipes

        let recipeData = response.data
        let ids = recipeData.map((rec) => rec.id)
        console.log(ids)
        setRecipeIds(ids)
      }).catch((error) => {
        console.log("catch")
        console.log(error);
      });
    console.log(res)
    console.log("bruh?")
    return res
    }


  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  const handleSearch = (term, isVegan) => {
    // remove all spaces
    console.log("hasdkjfhsa")
    console.log(term);
    let formatted_term = term.replaceAll(" ", "")

    // add pluses after commas
    formatted_term = formatted_term.replaceAll(",", ",+")
    console.log(formatted_term)
    setSearchTerm(formatted_term);
    console.log(searchTerm);
    setIncludeVegan(isVegan);
  };

  useEffect(() => {
    searchRecipes();
  })

  const handleVeganToggle = (value) => {
    setIncludeVegan(value);
  };

  const toggleSearchBar = () => {
    setSearchBarVisible(!searchBarVisible);
  };

  return (
    <div className="App">
      <header className="App-header">
        {searchBarVisible && (
          <SearchBar onSearch={handleSearch} onToggle={toggleSearchBar} includeVegan={includeVegan} onVeganToggle={handleVeganToggle} />
        )}
        <button onClick={toggleSearchBar} className="search-toggle">
          Search
        </button>
        
        <RecipeGrid recipes={recipeIds} />
      </header>
      {console.log(recipeIds)}
      <RecipeGrid recipeIds={[632583, 640352, 632660, 641803, 73420, 775666, 157103, 157111, 674272, 632572]} />
      {/* {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )} */}
    </div>
  );
}

export default App;
