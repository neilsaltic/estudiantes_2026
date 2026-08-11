/* //----INICIAR UN ARRAY ----------------
let estudiantes_funval: string[] = ["neils","sergio","alanoca","ticona"];
//------ACCEDER A UN DATO DE UNA ARRAY ------
console.log(estudiantes_funval[1]);
//-----MOTODO PARA SABER CUANTOS ELEMENTOS TENEMOS EN EL ARRAY -------------
console.log(estudiantes_funval.length);
//----- AÑADIR ELEMENTOS EN EL ARRAY------
let largo = estudiantes_funval.push("jhenny"); //agrega elementos al final del array
largo = estudiantes_funval.unshift("Payton");// agrega elementos al inicio del array
estudiantes_funval.pop(); // elimina el ultimo elemento del array
estudiantes_funval.shift();//elimina el primer elemento del array

console.log(estudiantes_funval); */

//lo primero cuando veamos un array es ITERACION--------------
/* let contador = 0;
let mascota: string[] = ["perrro", "gato", "loro", "conejos", "gallinas", "Cuy"];
for (let index = 0; index < mascota.length; index++) {
    if (mascota[index] === "Cuy") {
        console.log("si tienes 1 cuy en el array ");
        contador++
    }
}
if (contador===0) {
    console.log("no tienes ningun CUY en el array");
} */

/* 
sacar el promedio de notas almacenadas en array 
[23,45,67,87,99]
[23,46,66]
*/
/* let total_prom = 0;
let nota: number[] = [80,80,85,90,75];
for (let index = 0; index < nota.length; index++) {
    total_prom = total_prom + nota[index];  
}
total_prom = total_prom / nota.length;
console.log(`eñ promedio es: ${total_prom}`); */

/* 
dado el array de numeros [2,3,,12,78,99,43,22]
pares = 4
impares = 3
*/
let impares = 0;
let pares = 0;
let numeros: number[]= [2,3,12,78,99,43,22];
for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] % 2 ==0) {
        pares++
    }else{
        impares++
    }
}
console.log("el numeor de pares es: "+pares+" y el numero de impares es "+impares);
