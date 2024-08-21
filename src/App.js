import 'bootstrap/dist/css/bootstrap.min.css';

import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const RecipeContainer = lazy(() => import('./Components/RecipeContainer'));
const RecipeDetails = lazy(() => import('./Components/RecipeDetails'));

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/" className='ms-4'>Food Recipe</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
      </Navbar>
      <Container className="mt-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<RecipeContainer />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </Suspense>
      </Container>
    </Router>
  );
}

export default App;
