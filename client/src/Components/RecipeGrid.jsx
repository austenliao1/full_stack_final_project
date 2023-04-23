import React from 'react';
import RecipeCard from './RecipeCard';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './../App.css';

function RecipeGrid({ recipes }) {
  return (
    <Container fluid="md">
      <Row>
        <>
          {recipes.map((r) => (
            <Col key={r.id}>
              <RecipeCard
                sourceUrl={r.sourceUrl}
                image={r.image}
                dishType={r.dishTypes[0] && r.dishTypes[0].toUpperCase()}
                title={r.title}
                readyInMinutes={r.readyInMinutes}
                aggregateLikes={r.aggregateLikes}
              />
            </Col>
          ))}
        </>
      </Row>
    </Container>
  );
}

export default RecipeGrid;