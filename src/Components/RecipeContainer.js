import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import RecipeList from './RecipeList';
import SearchBar from './SearchBar';

const fetchRecipes = async (query) => {
  const { data } = await axios.get(`http://127.0.0.1:8000/api/recipes/?search=${query || ''}`);
  return data;
};

const RecipeContainer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: recipes, isLoading } = useQuery(['recipes', searchQuery], () => fetchRecipes(searchQuery));

  return (
    <div>
      <SearchBar onSearch={setSearchQuery} />
      <RecipeList recipes={recipes || []} loading={isLoading} />
    </div>
  );
};

export default RecipeContainer;
