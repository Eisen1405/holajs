const Mateo = document.getElementById("Mateo");
const Marcos = document.getElementById("Marcos");
const Lucas = document.getElementById("Lucas");
const Juan = document.getElementById("Juan");

let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;
let candidato4 = 0;

let voto;

for (let i = 1; i < 30; i++) 
{

    voto = ("Ingrese el numero del candidato de su preferencia:\n1. Mateo. \n2. Marcos.\n3. Lucas.\n4. Juan.");
    switch (voto) {
        case "1":
            candidato1++;
            break;
        case "2":
            candidato2++;
            break;
        case "3":
            candidato3++;
            break;
        case "4":
            candidato4++;
            break;
    }
}

$mensaje = "el vocero del curso es: "
if (candidato1 > candidato2 && candidato1 > candidato3 && candidato1 > candidato4)
{
    $mensaje += "Mateo";
}
else if(candidato2 > candidato1 && candidato2 > candidato3 && candidato2 > candidato4)
{
    $mensaje += "Marcos";
}
else if(candidato3 > candidato1 && candidato3 > candidato2 && candidato3 > candidato4)
{
    $mensaje += "Lucas";
}
else if(candidato4 > candidato1 && candidato4 > candidato2 && candidato4 > candidato3)
{
    $mensaje += "Juan";
}
else
{
    $mensaje = "No hay ganador";
}

alert($mensaje);