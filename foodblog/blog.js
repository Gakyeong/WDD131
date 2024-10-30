import {tagsTemplate, ratingTemplate} from './module.mjs';
import {viewHandler } from './module.mjs';
import {searchHandler, passArray, randomN} from './module.mjs';
import {recipes, tools, stores } from './module.mjs';

function recipeTemplate(recipe) {
      return `<img class="contentimg" src="${recipe.image}">
                <div class="block2">
                  <div class="tagitem">
                        ${tagsTemplate(recipe)}
                  </div>
                    <h3 class="name">${recipe.name}</h3>
                    <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                        ${ratingTemplate(recipe.rating)}
                    <p class = 'datePublished'>${recipe.datePublished}</p>
                    
                    <p class="description">${recipe.description}</p>
                </div>`;
}

const recipe = passArray(recipes);
function renderRecipes(recipeList) {
	// get the element we will output the recipes into
	const listElement = document.querySelector('#content1');
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
	const recipehtml1 = recipeList.map(recipeTemplate).join('');
	// Set the HTML strings as the innerHTML of our output element.
	return listElement.innerHTML = recipehtml1;	
}

// random content- tools
function toolTemplate(tool) {
      return `<img class="contentimg" src="${tool.image}">
                <div class="block2">
                  <div class="tagitem">
                        ${tagsTemplate(tool)}
                  </div>
                    <h3 class="name">${tool.name}</h3>
                    <span class="rating" role="img" aria-label="Rating: ${tool.rating} out of 5 stars">
                        ${ratingTemplate(tool.rating)}
                    
                    <p class = 'datePublished'>${tool.datePublished}</p>
                    <p class="description">${tool.description}</p>
                </div>`;
}

// console.log(ratingTemplate(recipes[1]));
const tool = passArray(tools);
function renderTools(toolList) {
	const listElement = document.querySelector('#content2');
	const toolhtml1 = toolList.map(toolTemplate).join('');
	return listElement.innerHTML = toolhtml1;	
}

function storeTemplate(store) {
      return `<img class="contentimg" src="${store.image}">
                <div class="block2">
                  <div class="tagitem">
                        ${tagsTemplate(store)}
                  </div>
                    <h3 class="name">${store.name}</h3>
                    <span class="rating" role="img" aria-label="Rating: ${store.rating} out of 5 stars">
                        ${ratingTemplate(store.rating)}
                    <p class = 'datePublished'>${store.datePublished}</p>
                    <p class="description">${store.description}</p>
                </div>`;
}
// console.log(ratingTemplate(recipes[1]));
const store = passArray(stores);
function renderStores(storeList) {
	const listElement = document.querySelector('#content3');
	const storehtml1 = storeList.map(storeTemplate).join('');
	return listElement.innerHTML = storehtml1;	
}

function init() {
      const recipe = passArray(recipes)
      renderRecipes([recipe]);

      const tool = passArray(tools)
      renderTools([tool]);

      const store = passArray(stores)
      renderStores([store]);
    }
init();

 
