let boxes = document.querySelector(".timeline");

function readJson() {
  // leer fichero y crear un json
  fetch("data.json")
    .then((response) => response.json())
    //leer los elementos del array
    .then((data) => {
      data.sort((a, b) => a.date - b.date);

      console.log(data);

      data.forEach((element) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("content");
        newDiv.innerHTML = `<div id= textBox><h3></h3>${element.title}</h3><p id= date>${element.date}</p><p>${element.text}</p></div><img src="${element.image}">`;
        boxes.appendChild(newDiv);
    });

      console.log(data);
    });
}

window.addEventListener("load", readJson());
