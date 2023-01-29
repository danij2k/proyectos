"use stric";

let boxes = document.querySelector(".timeline");

function readJson() {
  // leer fichero y crear un json
  fetch("data.json")
    .then((response) => response.json())
    //leer los elementos del array y
    .then((data) => {
      data.sort((a, b) => a.date - b.date);

      data.forEach((element) => {
        createNewContentDiv(
          element.title,
          element.text,
          element.date,
          element.image
        );
      });
    });
}

window.addEventListener("load", readJson);


let button = document.getElementById("boton");
button.addEventListener("click", insertGame);

function insertGame() {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const image = document.getElementById("image").value;
  const text = document.getElementById("text").value;

  createNewContentDiv(title, date, text, image);
}

function createNewContentDiv(title, date, text, image) {
  console.log(image);
  let newDiv = document.createElement("div");
  newDiv.classList.add("content");
  newDiv.innerHTML = `<div id=textBox><h3></h3>${title}</h3><p id=date>${date}</p><p>${text}</p></div><img src="${image}">`;
  boxes.appendChild(newDiv);
  
}