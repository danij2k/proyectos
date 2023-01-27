let boxes = document.querySelector(".timeline");

function readJson() {
  // leer fichero y crear un json
  fetch("data.json")
    .then((response) => response.json())
    //leer los elementos del array
    .then((data) => {
      //ordenar por fecha
      data.sort((a, b) => a.date - b.date);

      console.log(data);

      data.forEach((element) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("content");
        newDiv.innerHTML = `title: ${element.title} ${element.date} ${element.text}`;

        let img = document.createElement("img");
        img.src = element.image;

        newDiv.appendChild(img);
        boxes.appendChild(newDiv);
      });

      console.log(data);
    });
}

window.addEventListener("load", readJson());
