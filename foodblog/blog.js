import {tagsTemplate, ratingTemplate,viewHandler} from './module.mjs';
import {recipes, tools, stores } from './module.mjs';

function randomN(num){
	return Math.floor(Math.random()*num);
}
function passArray(list){
	const listLength = list.length;
	const randomNum = randomN(listLength);
	return list[randomNum];
}
function recipeTemplate(recipe) {
      return `<img class="contentimg" src="${recipe.image}" loading="lazy">
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
	const listElement = document.querySelector('#content1');
	const recipehtml1 = recipeList.map(recipeTemplate).join('');
	return listElement.innerHTML = recipehtml1;	
}

// random content- tools
function toolTemplate(tool) {
      return `<img class="contentimg" src="${tool.image}" loading="lazy">
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

const tool = passArray(tools);
function renderTools(toolList) {
	const listElement = document.querySelector('#content2');
	const toolhtml1 = toolList.map(toolTemplate).join('');
	return listElement.innerHTML = toolhtml1;	
}

function storeTemplate(store) {
      return `<img class="contentimg" src="${store.image}" loading="lazy">
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

// search bar
function filter(query) {
  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.tags.find((tag) => tag.toLowerCase().includes(query));
  });
  const filteredTools = tools.filter((tool) => {
    return tool.tags.find((tag) => tag.toLowerCase().includes(query));
  });
  const filteredStores = stores.filter((store) => {
    return store.tags.find((tag) => tag.toLowerCase().includes(query));
  });

  // sort by name
  const sortedrecipes = filteredRecipes.sort((a, b) => a.name - b.name);
  const sortedtools = filteredTools.sort((a, b) => a.name - b.name);
  const sortedstores = filteredStores.sort((a, b) => a.name - b.name);
  const sortedcombine = { sortedrecipes, sortedtools, sortedstores };

  return sortedcombine;
}

function searchHandler(event) {
  event.preventDefault();

  const input = document.querySelector("#search").value.toLowerCase();
  const fr = filter(input);
  renderRecipes(fr.sortedrecipes);
  renderTools(fr.sortedtools);
  renderStores(fr.sortedstores);
}

document.querySelector('#searchbar').addEventListener('submit', searchHandler);

