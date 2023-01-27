"use strict";

let PrincipalBox = document.querySelector(".colorPrincipal");
let boxs = document.querySelectorAll("div");

//funtion for generate random colors

function rnColor() {
    const variation = 100;

    // Generate a random color
    let r = randomInt(256);
    let g = randomInt(256);
    let b = randomInt(256);
    let mainColor = `rgb(${r}, ${g}, ${b})`;

    PrincipalBox.style.background = mainColor;

    // Generate 7 variations of the main color
    let variations = [];
    let mainBoxIndex = randomInt(8);

    for (let i = 0; i < 8; i++) {
        if (i === mainBoxIndex) {
            boxs[i].style.background = mainColor;
        } else {
            boxs[i].style.background = `rgb(${r + randomInt(variation)}, ${g + randomInt(variation)
                }, ${b + randomInt(variation)})`;
        }
    }

    document.getElementById("rgb").innerHTML = mainColor;
}

function randomInt(range) {
    return Math.floor(Math.random() * range);
}

rnColor();

//function para comparar el background de los elementos
function compareColor() {
    for (const box of boxs) {
        box.addEventListener("click", () => {
            if (box.style.background !== PrincipalBox.style.background) {
                document.getElementById("mensaje").innerHTML = "Fallaste";
            } else {
                document.getElementById("mensaje").innerHTML = "Acertaste";
            }
            rnColor();
        });
    }
}
compareColor();

//function para generar colores nuevos al clikear un div
function reset() { }
