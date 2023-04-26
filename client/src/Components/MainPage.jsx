import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import RecipeGrid from "./RecipeGrid";
import SavedRecipes from "./SavedRecipes";

function MainPage() {
  return (
    <div style={{ backgrondColor: "#FFFCF3" }}>
      <NavBar />
      <SearchBar />
      <SavedRecipes />
    </div>
  );
}

export default MainPage;
