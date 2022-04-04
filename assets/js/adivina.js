const numIntento = document.getElementById("numIntento");
const btnAdivinar = document.getElementById("btnAdivinar");
const intentos = document.getElementById("intentos");
const ultimoResultado = document.getElementById("ultimoResultado");
const altobajo = document.getElementById("altobajo");

let numeroAleatorio = Math.floor(Math.random() * 100 + 1);

numIntento.value = "";
let cantidadIntentos = 1;
let btnReset;

function verificarIntento() {
    let intentoUsuario = Number(numIntento.value);

    if (cantidadIntentos === 1)
        intentos.textContent = "Intentos anteriores: ";

    intentos.textContent += intentoUsuario + " ";

    if (intentoUsuario === numeroAleatorio) {
        ultimoResultado.textContent = "¡Felicidades! ¡Lo adivinaste!";
        ultimoResultado.style.backgroundColor = "green";
        altobajo.textContent = "";
        finaLizarJuego();
    } else if (cantidadIntentos === 10) {
        ultimoResultado.textContent = "¡Fin del juego!";
        finaLizarJuego();
    } else {
        ultimoResultado.textContent = "¡Incorrecto!";
        ultimoResultado.style.backgroundColor = "red";
        if (intentoUsuario < numeroAleatorio) {
            altobajo.textContent = "EL número es my bajo";
        } else {
            altobajo.textContent = "EL número es my alto";
        }
    }

    cantidadIntentos += 1;
    numIntento.value = "";
    numIntento.focus();
}

function finaLizarJuego() {
    numIntento.disabled = true;
    btnAdivinar.disabled = true;

    btnReset = document.createElement("button");
    btnReset.textContent = "iniciar el juego de nuevo";
    document.body.append(btnReset);
    btnReset.addEventListener("click", reiniciar);
    padres.appendChild(btnReset);
}

function reiniciar() {
    cantidadIntentos = 1;
    intentos.textContent = "";
    ultimoResultado.textContent = "";
    altobajo.textContent = "";
    btnReset.parentNode.removeChild(btnReset);
    numIntento.disabled = false;
    btnAdivinar.disabled = false;
    ultimoResultado.style.backgroundColor = "white";
    numeroAleatorio = Math.floor(Math.random() * 100 + 1);

}

btnAdivinar.addEventListener("click", verificarIntento)