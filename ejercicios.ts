//----------------Condicionales

/*
if(condicional){
    Se ejecutara el codigo si la condicion es VERDADERA
}else{
    Se ejecutara el codigo si la condicion es FALSA
}
 */
/* let dinero = 7000
if(dinero >= 1000){
    console.log("eres Pituco");
}else{
    console.log("eres color carton");
} */

//--------VARIAS CONDICIONALES------------

/* let calificacion: string = "C";
if(calificacion === "A"){
    console.log("APROBASTEEE!!!!");
}else{
    if(calificacion === "B"){
        console.log("REGULAAAR !!!");
    }else{
        console.log("RESPROBASTEEEE !!!");
    }
} */

/* switch (key) {
    case value:
        
        break;

    default:
        break;
} */

/* let menu = `
    Bienvenido a nuestro restaurante 
    1: Aji de Gallina
    2: pastel de fideo 
    3: cebiche
    4: pizza
    5: Pollo al horno
`;
console.log(menu);
let pedido = 1;
switch (pedido) {
    case 1:
        console.log("preparando tu Aji de Gallina")
        break;
    case 1:
        console.log("preparando tu Pastel de Fideo")
        break;
    case 1:
        console.log("preparando tu Cebiche")
        break;
    case 1:
        console.log("preparando tu Pizza")
        break;
    case 1:
        console.log("preparando tu Pollo al horno")
        break;
    default:
        console.log("tu opcion no esta dentro del menu")
        break;
} */

/* 
    operaciones condicion ternario ternario
    ?si es Verdadero
    :si es falso
*/

/* let ahorros = 1000;

ahorros>= 220
    ? console.log("Felicidades puedes comprarte lo que quieras")
    :console.log("que sad por ti "); */




//--------- Alerta de bateria de celular ----------

import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
/* const bateria = await rl.question('¿Cuál es tu porcentaje de bateria ? ');

bateria>= 20 
    ?console.log("OK")
    :console.log("CARGAR"); */

//------ EXAMEN DE TEMPORADA---------------

const resp1: number = await rl.question('Ingrese el puntaje de pregunta 1: ');
const resp2: number = await rl.question('Ingrese el puntaje de pregunta 2: ');
const resp3: number = await rl.question('Ingrese el puntaje de pregunta 3: ');

let total: number = resp1 + resp2 + resp3;
if(total >= 6 ){
    console.log("Pasaste la Prueba");
}else{
    console.log("Vuelve a intentarlo");
}

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();
