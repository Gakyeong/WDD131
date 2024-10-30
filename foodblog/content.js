import {tagsTemplate, ratingTemplate, filter } from "./module.mjs";
import {recipes, stores, tools } from "./module.mjs";
// import {viewHandler, searchHandler, passArray, randomN, renderRecipes, renderStores, renderTools} from "./module.mjs";

const all = [...recipes, ...tools, ...stores];

// alltemplete
function allTemplate(allrow) {
  return `
      <div class= 'block1'>
        <img class="contentimg" src="${allrow.image}">
        <div class="block2">
          <div class="tagitem">
                ${tagsTemplate(allrow)}
          </div>
          <h3 class="name">${allrow.name}</h3>
          <span class="rating" role="img" aria-label="Rating: ${
            allrow.rating
          } out of 5 stars">
              ${ratingTemplate(allrow.rating)}
          <p class = 'datePublished'>${allrow.datePublished}</p>
          <p class="description">${allrow.description}</p>
        </div>
      </div>`;
}

function renderAll(allList) {
  // get the element we will output the recipes into
  const listElement = document.querySelector(".maincontent");
  // use the recipeTemplate function to transform our recipe objects into recipe HTML strings
  const allhtml1 = allList.map(allTemplate).join("");
  // Set the HTML strings as the innerHTML of our output element.
  return (listElement.innerHTML = allhtml1);
}

function sortByDate(data) {
  return data.sort((a, b) => new Date(b.datePublished) - new Date(a.datePublished));
}

const sortedall = sortByDate(all);
renderAll(sortedall);

// sort by filter
function filter2(query) {
  const filteredAll = all.filter2((allrow) => {
    return allrow.tags.find((tag) => tag.toLowerCase().incudes(query));
  });
  const sortedAll = filteredAll.sort((a,b) => a.name- b.name);
  return sortedAll
}

function searchHandler2(event){
  event.preventDefault();
  const input= document.querySelector('#search').ariaValueMax.toLowerCase();
  const fr = filter2(input);
  renderAll(fr.sortedAll);
}