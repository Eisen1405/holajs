const numClicDOM = document.getElementById("numClic");
const btnRestablecer = document.getElementById("btnRestablecer");

let numeroclic = 0;

function contadorDeClick()
{
    numeroclic += 1;
    numClicDOM.textContent = numeroclic;
}

function restablecer()
{
    numClicDOM.textContent = 0;
}

btnRestablecer.addEventListener("click", restablecer);

