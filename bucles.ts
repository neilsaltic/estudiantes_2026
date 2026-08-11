/* let ventas = 0;
while (ventas != 10) {
    ventas++;
    console.log(`venta realizada numero ${ventas}`);
} */

/* bucle for  */


/* mostrar los N terminos de la serie de la serie de los numeros impoares 
    n= 3
    1,3,5
    n=6
    1,3,5,7,9,11
*/
/* let numero1 = 6;
let impar = 1;

for (let j = 1; j <= numero1; j++) {
    console.log(impar);
    impar = impar + 2;
} */


/* -----------FACTORIALES---------------- */

/* let result = 1;
let n = 8;
for (let j = 1; j <= n; j++) {
    result = result * j;
}
console.log(result);
 */

//---------------------BUCLES EJERCICIOS POR PUNTOS -----------------------------------------------------------

// EJERCICIO 1 

/* let n = 15;
let numero = 0;
for (let j = 2; numero < n; j+= 2) {
    for (let i = 0; i < j && numero < n; i++) {
        console.log(j);
        numero ++;
    }
} */

/* let n = 15;
let valor_inicial = 2;
let contador = 1;
for (let i = 0; i < n; i++) {
    console.log(valor_inicial);
    if(contador === valor_inicial){
        contador = 1;
        valor_inicial += 2;
    }else{
        contador++;
    }
    
} */

//-------------- ejercicio 2 ----------------------

/* let n = 15;
let valorA = 1;
let valorB = 4;
let contadorA = 1;
let contadorB = 1;
let cambio = true;
let limite = 2  ;
for(let i=0; i <= n; i++){
    if (cambio) {
        if (contadorA == 2) {
            console.log(valorA);
            contadorA = 1;
            cambio = false;
        }else {
            console.log(valorA);
            valorA++;
            contadorA++;
        }
    }else{
        if(contadorB === limite){
            console.log(valorB)
            limite++;
            contadorB = 1;
            cambio = true;
        }else{
            console.log(valorB);
            contadorB++;
            valorB +=4;
        }  
    }
} */


/* ------------ ejercicio 3 --------------
lider de jas quiere comprarse su play 5 que cuesta 9500 
solo pudo ahorrar 5$ esta semana 
pero con el poder del diezmo cada semana puede ahorrar el doble de la semana anterior 
2da semana 10$
3ra semana 20$
cuantas semanas demorara en comprar su ps5??
*/

let precio = 9500;
let ahorro = 5;
let total = 0;
let semana = 0;

while (total < precio) {

    semana++;
    total = total + ahorro;    
    ahorro = ahorro * 2;
}

console.log(`Necesita ${semana} semanas para ahorrar para la play 5`);
console.log("Total ahorrado: $" + total);

