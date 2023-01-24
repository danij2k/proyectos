"use strict"

let principalBox = document.querySelector(".colorPrincipal");
let boxs = document.querySelectorAll("div");
let aciertos = document.querySelector(".aciertos");
let desaciertos = document.querySelector(".desaciertos");
let aside = document.querySelector("aside")

//funcion para generar colores aleatorios
function randomInt(range) {
    return Math.floor(Math.random() * range);
}
let numRandon = randomInt(boxs.length);

//Funcion para generar colores aleatorios
function rnColor() {
    const variation = 100;
    let r = randomInt(255);
    let g = randomInt(255);
    let b = randomInt(255);
    let mainColor = `rgb(${r}, ${g}, ${b})`;

    for (let i = 0; i < boxs.length; i++) {
        if (i == randomInt(boxs.length)) {
            boxs[i].style.background = mainColor;
        } else {
            boxs[i].style.background = `rgb(${r + randomInt(variation)}, ${g + randomInt(variation)
                }, ${b + randomInt(variation)})`;
        }
    }
    document.getElementById("rgb").innerHTML = mainColor;
}
rnColor();
//function para dar colores a los boxs
function rnColorCajas() {
    for (let i = 0; i < boxs.length; i++) {
        boxs[i].style.background = rnColor();
        principalBox.style.background = boxs[numRandon].style.background
    }
}
rnColorCajas()
//function para comparar el background de los elementos
function compareColor () {
    for (const box of boxs) {
        box.addEventListener("click", () => {    
            if(box.style.background !== principalBox.style.background){
                console.log(false);
                reduceScore ()
                aside.style.background = "rgba(197, 12, 12, 0.808)"
                document.getElementById("mensaje").innerHTML = "Fallaste";
                
            }else{
                console.log(true)
                addScore ()
                aside.style.background = "green"
                document.getElementById("mensaje").innerHTML = "Acertaste";               
            }
            endGame();
        })
    }
}
compareColor ();
//function para generar colores nuevos al clikear un div 
function reset() {
    for (const box of boxs){
        for(let i = 0; i < boxs.length; i++){
            box.addEventListener("click", () =>
            boxs[i].style.background = rnColor() );
            //para que la caja principal tenga el mismo color que una de las cajas, despues de clickear
            box.addEventListener("click", () =>  
            principalBox.style.background = boxs[randomInt(boxs.length)].style.background);
        }
    }
}
reset();
//Funciones para agregar los puntos al marcador
let scoreA = 0;
let scoreR = 0;
function addScore (){
    scoreA++
    aciertos.innerHTML = scoreA;
}
function reduceScore (){
    scoreR-- 
    desaciertos.innerHTML = scoreR;
}
function resetScoreR (){
    scoreR = scoreR + 3
    return scoreR
}
function resetScoreA (){
    scoreA = scoreA - 3
    return scoreA
}
//funcion para terminar el juego
function endGame(){
    if(scoreA > 2 ){
        alert(`You Win the game!!`)
        aciertos.innerHTML = 0;
        desaciertos.innerHTML = 0;
        aside.style.background = ("none");
        resetScoreA ();

    }else if (scoreR < - 2){
        alert(`GameOver!!! you missed your three chances`)
        desaciertos.innerHTML = 0;
        aciertos.innerHTML = 0;
        aside.style.background = ("none");    
        resetScoreR();   
    }   
}
