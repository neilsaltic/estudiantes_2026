console.log("Hola Mundo!!");
console.log('Funval');
// esto es un comentario de una sola linea :D
/* 
----------------------TIPOS DE DATOS ------------------------
    -number
    -string     "" '' ´´
    -boolean    true   or  false
    -undefined  valor no definido
    -null       valor nulo
    -big int    numeros sumamente grandes 

----------------------TYPESCRIPT UNICOS --------------------
    -any        cualquier cosa  //MALA PRACTICA !!!!!
    -void       vacio

---------------------CREAR VARIABLES Y CONSTANTES ----------
*/

let apPaterno: string = "Alanoca";
console.log(apPaterno);
const PI: number = 3.1416;

var malaPractica: string = "NO USAR"; //NO USAR 

let edad: Number = 30;
let nombre: String = "Neils";
let año = 2026;
let esMiembroSud: boolean = true;
let numeroDeBendiciones: BigInt = 5168546843216813516854n;
let numeroDeBendiciones2: Number = 5168546843216813516854458416815681684684645;

/* ------MALA PRACTICA-----
let numeroHijos;
numeroHijos = "neils";
numeroHijos = 2; */

/* 
CREAR 5 VARIABLES Y 5 CONSTANTES CON LOS DIFERENTES TIPOS DE DATOS 
    STRING
    NUMBER
    BOOLEAN
    BIGINT
    SIN ESPESIFICAR TIPO PERO SI EL VALOR 
*/

let curso: string = "Desarrollo web full-stack";
let costo: number = 0;
let misioneroRetornado: boolean = true;
let oportunidades: BigInt = 5646845168135168168165168n;
let instituto = "Funval";

const CristoResucito: string = "SIIII";
const añoNacCristo: number = 0;
const casado: boolean = false;
const trillonario: BigInt = 51658153841351681684831n
const nombreCrack = "Neils";

//---------- SIMBOLOS DE OPERACION ----------------

let num1 = 32;
let num2 = 3;
let num3 = "2";

let resultado = num1 + num2; //SUMA O CONCATENACION DE DATOS 
resultado = num1 - num2;    //RESTA DE DATOS SI O SI NUMERICOS 
resultado = num1 * num2;    //MULTIPLICACION DE DATOS SI O SI NUMERICOS 
resultado = num1 / num2;    //DIVISION DE DATOS SI O SI NUMERICOS
resultado = num1 % num2;    //MODULO DE DATOS SI O SI NUMERICOS


//---------CONVERTIR UN STRING A NUMBER-------------
let num3int: number = parseInt(num3);
console.log(typeof num3int);
console.log(num3int);

//---------- SIMBOLOS DE AUTOASIGNACION -----------
let añosMision = 1;

añosMision ++;
añosMision --;
añosMision += 5;
añosMision -= 5;
añosMision *= 5;
añosMision /= 5;

// ----------SIMBOLOS DE COMPARACION----------------

let a = 2;
let b = 4;
let c = "2";

let comparacion = a == b;
console.log(comparacion);

/* tambien != diferecnte 
>
<
>=
<= */

let supercomparacion = a == b && b == a; // AND
supercomparacion = a == b || b == a; // OR
supercomparacion = !(a == b); // NOT


