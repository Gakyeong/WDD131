const menuDefault = document.querySelector('.menu-button');
function showMenu() {
    const navigation = document.querySelector('.nav');
    if (window.innerWidth > 1000) {
        menuDefault.classList.toggle('hide');
    }
    else {
        navigation.classList.toggle('show');
    }
}

menuDefault.addEventListener('click', showMenu)

function HandleResize() {
    const navigation = document.querySelector('.nav'); 
    if (window.innerWidth > 1000) {
        navigation.classList.add('show');
    }
    else{
        navigation.classList.remove('show');
    }
}
window.addEventListener('resize', HandleResize);


function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }

  function closeviewer() {
    const viewer = document.querySelector('.viewer');
    viewer.remove();
}

function viewHandler(event) {
    // create a variable to hold the element that was clicked on from event.target
    const element = event.target;
    if (element.tagName === 'IMG') {
	// get the src attribute from that element and 'split' it on the "-"
    let srcvalue = element.getAttribute('src');
    let splitsrc = srcvalue.split('-');
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const newname = splitsrc[0] + '-full.jpeg';
    const htmltoinsert = viewerTemplate(newname, element.alt);

	// insert the viewerTemplate into the top of the body element
	document.body.insertAdjacentHTML("afterbegin", htmltoinsert);

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    const removeModal = document.querySelector('.close-viewer');
    removeModal.addEventListener('click', closeviewer);
    }
}
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', viewHandler);

