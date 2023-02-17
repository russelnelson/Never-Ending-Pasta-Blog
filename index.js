const express = require('express');
const generateRecipeIdeas = require('./generate-recipe-ideas');
const generateRecipe = require('./generate-recipe');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  // Generate a list of recipe ideas using GPT-3
  const recipeIdeas = await generateRecipeIdeas();
  
  // Render the homepage with the list of recipe ideas
  const recipeList = recipeIdeas.map(recipeIdea => `<li>${recipeIdea}</li>`).join('');
  const pageHtml = `
    <html>
      <body>
        <ul>${recipeList}</ul>
      </body>
    </html>
  `;
  res.send(pageHtml);
