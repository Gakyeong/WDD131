const newimg = document.createElement('img');
newimg.src = 'https://picsum.photos/200';
document.body.append(newimg);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newsele = document.createElement('section');
newsele.innerHTML = '<h2>Dom basic</h2> <p>This was added through Javascript</p>'
document.body.appendChild(newsele)
// append? appendchild?