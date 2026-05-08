/*## Objetivo ##
- Practicar JavaScript básico (variables, operadores, console.log)
- Aprender a crear un repositorio en [GitHub](https://github.com/?utm_source=chatgpt.com)
- Subir código usando Git */
console.log("### objetivo ###");
console.log("Practicar JavaScript básico -variables, operadores, console.log- Aprender a crear un repositorio en GitHub *https://github.com/?utm_source=chatgpt.com* Subir código usando Git");

let nombre = "Juan";
let apellido = "Jeldres";
let X = 5;

console.log("Hola", nombre, apellido + "."); // ejercicio 1

console.log((X + 5) * 3); // ejercicio 2

let fav_food = "Comida favorita: Helado de menta";
console.log(fav_food);

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a % b); // el resto

a = "10"; //re asignacion, va sin let
b = "3";

console.log(a + b); // como son string, no se suma si no que queda 103
console.log(a - b);
console.log(a * b);
console.log(a % b);

let edad = 15;
console.log(edad > 10);
console.log(edad < 18);

let numero = 8;
console.log(numero > 5 && numero < 10); //imprime si numero es mayor a 5 y menor a 10

let nota = 6;
console.log(nota == 7); // imprime si la nota es igual a 7

let temperatura = 25;
console.log(temperatura >= 30);

let y = 6;
let z = 9;
console.log(y == z);
console.log(z > y);

edad = 17;
let tienePermiso = true;
console.log("puede conducir", edad >= 18 || tienePermiso);

let usuario = "admin";
let password = "1234";
console.log(usuario === "admin" && password === "1234");

/* para subir a repositorio
el archivo debe estar dentro de la carpeta que corresponde al repositorio en windows, si no, habra que crear un nuevo repositorio
en terminal bash de visualstudio:
git add .
git commit -m "Agrego README"
// texto entre comillas se cambia por el nombre del archivo js o el que se quiera subir
git push