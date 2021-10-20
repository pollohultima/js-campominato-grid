

const easy = 100
const medium = 81
const hard = 49




document.getElementById("easy").addEventListener('click', function () {
    contEl.classList.add("easy_cont")
    document.querySelector('.buttons').style.display = 'none';

})

document.getElementById("medium").addEventListener('click', function () {
    contEl.classList.add("medium_cont")
    document.querySelector('.buttons').style.display = 'none';
})

document.getElementById("hard").addEventListener('click', function () {
    contEl.classList.add("hard_cont")
    document.querySelector('.buttons').style.display = 'none';
})





/* Creare in js una griglia 8x8
   ogni volta che clicco un quadrato questo si colora di verde */

//DOM 
const contEl = document.querySelector('.container')

//Loop - genero una griglia da 64 elementi con ciclo
for (let i = 0; i < easy; i++) {

    //creo il div
    const divElement = document.createElement('div')

    //assegno classe
    divElement.className = 'cella'

    //inserisco cella dentro container
    contEl.append(divElement)

    //Event Listener a ciascun elemento creato nel ciclo
    divElement.addEventListener('click', function () {
        //assegno colore verde all'interno di questa funzione con 'this' 
        this.style.backgroundColor = 'green';

    })
}
