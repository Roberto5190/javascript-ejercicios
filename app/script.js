// ejercicio_1: Hola Mundo
console.log("¡Hola, Mundo!");

// ejercicio_2: Variables let y const
let numero = 42;
const texto = "Soy un string";
console.log("Número:", numero);
console.log("Texto:", texto);

// ejercicio_3: Tipo de dato con typeof
console.log("Tipo de dato 42:", typeof 42); // number
console.log("Tipo de dato 'JavaScript':", typeof "JavaScript"); // string
console.log("Tipo de dato true:", typeof true); // boolean

// ejercicio_4: Operadores aritméticos
const expresion = () => {
    return (15 + 3) * (8 / 2);
};
console.log("(15 + 3) * (8 / 2) =", expresion());

// ejercicio_5: Función básica
const sumar = (a, b) => a + b;
console.log("5 + 7 =", sumar(5, 7));
console.log("10 + 20 =", sumar(10, 20));

// ejercicio_6: Condicional if-else
const numeroCondicional = -5;
if (numeroCondicional > 0) {
    console.log(`El número ${numeroCondicional} es positivo`);
} else if (numeroCondicional < 0) {
    console.log(`El número ${numeroCondicional} es negativo`);
} else {
    console.log(`El número ${numeroCondicional} es cero`);
}

// ejercicio_7: Bucle for
for (let i = 1; i <= 5; i++) {
    console.log("Número del 1 al 5:", i);
}

// ejercicio_8: Métodos de String
const stringMethod = "hola mundo";
const stringResult = stringMethod.toUpperCase() + " desde JS";
console.log("Texto modificado:", stringResult);

// ejercicio_9: Array básico
const frutas = ["manzana", "banana", "pera"];
console.log("Segundo elemento del array:", frutas[1]);

// ejercicio_10: Métodos push y pop
const frutas2 = ["manzana"];
console.log("Array inicial:", frutas2);
frutas2.push("naranja");
console.log("Después de push:", frutas2);
const eliminado = frutas2.pop();
console.log("Elemento eliminado:", eliminado);
console.log("Después de pop:", frutas2);

// ejercicio_11: Objeto básico
const usuario = {
    nombre: "Antonio",
    edad: 34,
};
console.log("Nombre:", usuario.nombre);
console.log("Edad:", usuario.edad);

// ejercicio_12: Método en objeto (usando arrow function)
usuario.saludar = () => console.log("Hola");
usuario.saludar();

// ejercicio_13: Fecha actual
const currentYear = new Date().getFullYear();
console.log("Año actual:", currentYear);

// ejercicio_14: Número aleatorio
const randomNumber = Math.floor(Math.random() * 10);
console.log("Número aleatorio entre 1 y 10:", randomNumber);

// ejercicio_15: Switch
const weekDays = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
weekDays.forEach((day, i) => {
    switch (i) {
        case 0:
            console.log("Es Domingo");
            break;

        case 1:
            console.log("Es Lunes");
            break;

        case 2:
            console.log("Es Martes");
            break;

        case 3:
            console.log("Es Miércoles");
            break;

        case 4:
            console.log("Es Jueves");
            break;

        case 5:
            console.log("Es Viernes");
            break;

        case 6:
            console.log("Es Sábado");
            break;

    };
    // /switch
});
// /forEach()

// ejercicio_16: Bucle While
let contador = 5;
while (contador > 0) {
    console.log(contador);
    contador--;
};

// ejercicio_17: Función con return
const number1 = 2;
const number2 = 5;
const evenNumber = (number) => {
    const even = number % 2;

    if (even === 0) {
        console.log(`El numero ${number} es par: true`);
        return true;
    } else {
        console.log(`El numero ${number} es par: false`);
        return false;
    };
};
evenNumber(number1);
evenNumber(number2);

// ejercicio_18: Template Strings
const mensaje = (nombre, edad) => console.log(`Hola, ${nombre} tienes ${edad} años.`);
mensaje(usuario.nombre, usuario.edad);

// ejercicio_19: Arrow Function
const suma = (a, b) => {
    return a + b;
};

// ejercicio_20: forEach
const numbers = [1, 2, 3]
numbers.forEach((number) => {
    console.log(number);
});

// ejercicio_21: indexOf
const frutas3 = ["manzana", "banana", "pera"];
const bananaIndex = frutas3.indexOf("banana");
console.log(bananaIndex);


// ejercicio_22: Ordenar números con sort
const numbers2 = [5, 1, 3];
const numbers2Ascendent = numbers2.sort();
console.log(numbers2Ascendent);

// ejercicio_23: Filtrar con filter
const numbers3 = [1, 2, 3, 4];
const numbers3Even = numbers3.filter((number) => number % 2 === 0);
console.log(numbers3Even);

// ejercicio_24: Transformar con map
const squareNumbers = numbers.map((number) => Math.pow(number, 2))
console.log(squareNumbers);

// ejercicio_25: Constructor de objetos
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad
}

const persona1 = new Persona("Alba", 23);
console.log(persona1.nombre);

// ejercicio_26: Métodos de fecha avanzados
const obtenerHoraActual = () => {
    const date = new Date();

    const horas = String(date.getHours()).padStart(2, '0');
    const minutos = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const horaActual = `${horas}:${minutos}:${seconds}`;

    return horaActual;
}

console.log("Hora actual: ", obtenerHoraActual());

// ejercicio_27: Redondeo con toFixed
const pi = Math.PI;
const piRounded = pi.toFixed(2);
console.log("3,1415 redondeado a dos decimales es: ", piRounded);

// ejercicio_28: Buscar substrings con includes
const saludo = "¡Hola Mundo!";
console.log( `¿${saludo} contiene la palabra hola?`, saludo.includes("Hola"));

// ejercicio_29: Convertir strings con split y join
const string = "manzana,banana,pera";
const arrayFromString = string.split(",");
console.log(arrayFromString);
const stringFromArray = arrayFromString.join("-");
console.log(stringFromArray);

// ejercicio_30: Destructuring de arrays
const numbersArray = [10, 20, 30];
const [number10, ,number30] = numbersArray

console.log(number10, number30);

// ejercicio_31: Destructuring de objetos
const objeto = {
    nombre : "Ana",
    edad: 30
}

const {nombre: ana, edad: anaAge} = objeto
console.log(ana, anaAge);

// ejercicio_32:  Closure


