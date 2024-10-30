import {tagsTemplate, ratingTemplate,viewHandler } from "./module.mjs";
import {recipes, stores, tools } from "./module.mjs";

const all = [...recipes, ...tools, ...stores];

// alltemplete
function allTemplate(allrow) {
  return `
      <div class= 'block1'>
        <img class="contentimg" src="${allrow.image}" loading="lazy">
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
  const listElement = document.querySelector(".maincontent");
  const allhtml1 = allList.map(allTemplate).join("");
  
  return (listElement.innerHTML = allhtml1);
}

function sortByDate(data) {
  return data.sort((a, b) => new Date(b.datePublished) - new Date(a.datePublished));
}

const sortedall = sortByDate(all);
renderAll(sortedall);

// sort by filter
function filterDate(query) {
  const filteredAll = all.filter((allrow) => {
    return allrow.tags.find((tag) => tag.toLowerCase().includes(query));
  });
  const sortedAll = filteredAll.sort((a,b) => new Date(b.datePublished) - new Date(a.datePublished));
  return sortedAll
}

function searchHandler2(event){
  event.preventDefault();
  const input = document.querySelector('#search').value.toLowerCase();
  if (!input) {
    renderAll(sortedall);
  } else {
    const filteredResults = filterDate(input);
    renderAll(filteredResults);
  }
}

document.querySelector('#searchbar').addEventListener('submit', searchHandler2)