let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
 

divClass()

console.log(json)
json.forEach(toy =>createNewCard (toy))


const divClassCard = document.createElement("div");
divClassCard.className ="card"
const h2 = document.createElement(h2)
h2.textContent = toy.name;
const imgCard = document.createElement('img')
imgCard.className = toy.name;
const imgCard = document.createElement('img')
imgCard.className = "toy-avatar"
imgCard.setAttribute (src,toy.image)
likeCount = document.createElement('p')
likeCount.textContent = toy.likes
btn = document.createElement('button')
btn.textContent='like <3'
divElem.appendChild(divClassCard);
divClassCard.appendChild(h2)
divClassCard.appendChild(imgCard)
divClassCard.appendChild(likeCount)
divClassCard.appendChild(btn)

function toyAdded(name,image){
  
}