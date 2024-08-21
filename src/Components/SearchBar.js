import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <Form onSubmit={handleSearch} className="mb-4">
      <Row>
        <Col xs={9}>
          <Form.Group controlId="search">
            <Form.Control
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for recipes..."
            />
          </Form.Group>
        </Col>
        <Col xs={3}>
          <Button type="submit" variant="dark" className="w-50">Search</Button>  {/* Black Button with full width */}
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBar;
