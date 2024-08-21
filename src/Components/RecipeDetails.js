import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Card, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import './RecipeDetails.css';  // Custom CSS for unique layout

const RecipeDetails = () => {
  const { id } = useParams();  // Extract the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/recipes/${id}/`);
        setRecipe(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading recipe: {error.message}</div>;

  return (
    <Container className="recipe-details-container">
      <Row className="mb-4 align-items-center">
        <Col md={4} className="position-relative">
          <div className="image-wrapper">
            <Image src={recipe.image} fluid className="shadowed-image" />
          </div>
        </Col>
        <Col md={8}>
          <div className="text-overlay">
            <h2 className="recipe-title">{recipe.name}</h2>
            <p className="recipe-description">{recipe.description}</p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="mb-4 h-100">
            <Card.Header>Ingredients</Card.Header>
            <ListGroup variant="flush">
              {recipe.ingredients.split(', ').map((ingredient, index) => (
                <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-4 h-100">
            <Card.Header>Instructions</Card.Header>
            <Card.Body>
              <p>{recipe.instructions}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeDetails;
