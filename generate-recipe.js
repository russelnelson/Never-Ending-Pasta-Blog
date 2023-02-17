const axios = require('axios');

// Define constants for GPT-3 API credentials and endpoint
const GPT3_API_KEY = 'your-api-key-here';
const GPT3_ENDPOINT = 'https://api.openai.com/v1/completions';

// Define a function to generate a recipe using GPT-3
async function generateRecipe(recipeIdea) {
  // Use GPT-3 API to generate a recipe based on the recipe idea
  const response = await axios.post(GPT3_ENDPOINT, {
    model: 'text-davinci-003',
    prompt: `Generate a recipe for ${recipeIdea}`,
    max_tokens: 1024,
    temperature: 0.9,
    n: 1,
    stop: ['\n\n']
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GPT3_API_KEY}`
    }
  });
  
  // Parse response and return recipe text
  const recipeText = response.data.choices[0].text.trim();
  return recipeText;
}

module.exports = generateRecipe;
