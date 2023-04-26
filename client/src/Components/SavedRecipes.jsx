import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./../App.css";
import axios from "axios";

const RecipeGrid = () => {
  let savedRecipes;
  const token = localStorage.getItem("token");
  axios
    .get("http://localhost:4000/user/recipes", { headers: { token: token } })
    .then((res) => {
      savedRecipes = res;
    })
    .catch((error) => console.log(error));
  if (savedRecipes) {
    return (
      <Container fluid="md">
        <h1>Saved Recipes</h1>
        <Row md="4">
          <>
            {savedRecipes.map((r) => (
              <Col>
                <RecipeCard
                  sourceUrl={r.sourceUrl}
                  image={r.image}
                  dishType={r.dishTypes[0] && r.dishTypes[0].toUpperCase()}
                  title={r.title}
                  readyInMinutes={r.readyInMinutes}
                  aggregateLikes={r.aggregateLikes}
                  analyzedInstructions={
                    r.analyzedInstructions[0] === undefined
                      ? ["No instructions given"]
                      : r.analyzedInstructions[0].steps
                  }
                  extendedIngredients={r.extendedIngredients}
                  id={r.id}
                ></RecipeCard>
              </Col>
            ))}
          </>
        </Row>
      </Container>
    );
  } else {
    console.log("NOOOO");
    return <h1>Saved Recipes</h1>;
  }
};
export default RecipeGrid;
