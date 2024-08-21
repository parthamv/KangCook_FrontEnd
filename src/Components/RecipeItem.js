import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RecipeItem = ({ recipe }) => {
  return (
    <div className="col-md-4 mb-4 d-flex align-items-stretch"> {/* Ensures cards are the same height */}
      <Card className="h-100"> {/* Makes the card take up the full height of its container */}
        <Card.Img variant="top" src={recipe.image} alt={recipe.name} className='h-100' />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{recipe.name}</Card.Title>
          <Card.Text className="flex-grow-1">{recipe.description}</Card.Text>
          <Link to={`/recipe/${recipe.id}`} className="btn btn-primary mt-auto">
            View Details
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecipeItem;
