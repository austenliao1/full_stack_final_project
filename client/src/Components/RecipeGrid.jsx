import React from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './../App.css';
import { useState } from 'react';

const apiKey = '569e690dc2684bc8872e096c069a107a';

function RecipeGrid({ recipeIds }) {
  console.log(recipeIds)
  const [recipes, setRecipes] = useState([])
  axios.get('https://api.spoonacular.com/recipes/informationBulk', {
    params: {
        apiKey: apiKey,
        ids: recipeIds
    }
  }).then(body => setRecipes(body.data))
  console.log(recipes)

  return (
    <Container fluid="md">
      <Row>
        <>
          {recipes.map((r) => {
            const ingredients = r.extendedIngredients.map((i) => i.original);

            return (
              <Col key={r.id}>
                <RecipeCard
                  sourceUrl={r.sourceUrl}
                  image={r.image}
                  dishType={r.dishTypes[0] && r.dishTypes[0].toUpperCase()}
                  title={r.title}
                  readyInMinutes={r.readyInMinutes}
                  aggregateLikes={r.aggregateLikes}
                  ingredients={ingredients}
                />
              </Col>
            );
          })}
        </>
      </Row>
    </Container>
  );
}

export default RecipeGrid;
