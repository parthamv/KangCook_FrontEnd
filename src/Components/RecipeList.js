import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes, loading }) => {
  if (loading) return <div>Loading...</div>;

  return (
    <div className="row">
      {recipes.map(recipe => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
