const axios = require('axios');

// Define constants for GPT-3 API credentials and endpoint
const GPT3_API_KEY = 'your-api-key-here';
const GPT3_ENDPOINT = 'https://api.openai.com/v1/completions';

// Define a function to generate recipe ideas using GPT-3
async function generateRecipeIdeas() {
  // Use GPT-3 API to generate recipe ideas
  const response = await axios.post(GPT3_ENDPOINT, {
    model : "text-davinci-003",
    prompt: 'Generate recipe ideas',
    max_tokens: 20,
    n: 10,
    temperature: 0,
    stop: ['\n']
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GPT3_API_KEY}`
    }
  });
  
  // Parse response and return array of recipe ideas
  const recipeIdeas = response.data.choices.map(choice => choice.text.trim());
  return recipeIdeas;
}

module.exports = generateRecipeIdeas;

