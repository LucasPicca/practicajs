//Ejercicio 1
/* let n1 = parseInt(prompt("Ingrese un número"));
 if (n1 > 10) {
    alert("El número es mayor a 10");
 } else {
    alert("Es menor a 10")
 } */

 //Ejercicio 2
/* let n1 = parseInt(prompt("Ingrese un número"));
let n2 = parseInt(prompt("Ingrese otro número"));
 if (n1< n2) {
   alert(n1 + " es menor que " + n2)
 } else {
   alert(n2 + " es menor que " + n1)
 }
  */

 //Ejercicio 3 
/*  let n1 = parseInt(prompt("Ingrese un número"));
 let n2 = parseInt(prompt("Ingrese otro número"));
 if (n1 > n2) {
   alert(n1 + " es mayor que " + n2)
 } else if (n2 > n1) {
   alert(n2 + " es mayor que " + n1)
 } else {
   alert(n1 + " es igual a " + n2)
 }
 */

 //Ejercicio 4
/*  let n = parseInt(prompt("Ingrese un número"))
  if (n > 0) {
   alert(n + " es positivo")
  } else if (n < 0){
   alert(n + " es negativo")
  } else {
   alert(n + " es igual a 0")
  } */

//Ejercicio 5
/* let n = parseInt(prompt("Ingrese un número"))
let resultado = n % 2

if (resultado == 0) {
   alert("Es Par")
} else {
   alert("Es Impar")
} */

//Ejercicio 6
/* let i = parseInt(prompt("Ingrese el importe"))

if (i < 1000) {
   alert("No aplica descuento")
} else if (i >= i || i < 5000) {
   alert ("El importe final con descuento aplicado es " + (i - (i * 0.10)))
} else {
   alert ("El importe final con descuento aplicado es " + (i - (i * 0.18)))
}
 */

//Ejercicio 7
/* let n1 = parseInt(prompt("Ingrese un número"));
let n2 = parseInt(prompt("Ingrese otro número"));
let n3 = parseInt(prompt("Ingrese otro número"));
let n4 = parseInt(prompt("Ingrese otro número"));
let max 
if (n1 > n2) {
   max = n1
} else if (n2 > n3){
   max = n2
} else if (n3 > n4) {
   max = n3
} else {
   max = n4
}

alert(max) */

//Ejercicio 8
/* let n1 = parseInt(prompt("Ingrese un número"));
let n2 = parseInt(prompt("Ingrese otro número"));
let n3 = parseInt(prompt("Ingrese otro número"));
let n4 = parseInt(prompt("Ingrese otro número"));
let min 
if (n1 < n2) {
   mim = n1
} else if (n2 < n3){
   mim = n2
} else if (n3 < n4) {
   mim = n3
} else {
   mim = n4
}

alert(mim) */

//Ejercicio 9 ////      *****  REVISAR *****

/* let a = parseInt(prompt("Ingrese un número"));
let b = parseInt(prompt("Ingrese otro número"));
let c = parseInt(prompt("Ingrese otro número"));
let d = parseInt(prompt("Ingrese otro número"));
let e = parseInt(prompt("Ingrese otro número"));

let max
let min 

if (a > b) {
   max = a
   min = b
} else if (b > max) {
   max = b
   min = a
} else if (c > max) {
   max = c
} else if (c < min) {
   min = c
} else if (d > max) {
   max = d
} else if (d < min) {
   min = d
} else if (e > max) {
   max = e
} else if (e < min) {
   min = e
}

alert("El número máximo es " + max + "El número mínimo es " + min) */

//Ejercicio 10       *****  REVISAR *****
/* let a = parseInt(prompt("Ingrese un número"));
let b = parseInt(prompt("Ingrese otro número"));
let c = parseInt(prompt("Ingrese otro número"));
let d = parseInt(prompt("Ingrese otro número"));

if (a > 100) {
   alert(a + " es mayor a 100")
} else if (b > 100) {
   alert(b + " es mayor a 100")
} else if (c > 100){
   alert(c + " es mayor a 100")
} else if (d > 100) {
   alert(c + " es mayor a 100")
} */

//Ejercicio 11        *****  REVISAR *****
/* let a = parseInt(prompt("Ingrese un número"));
let b = parseInt(prompt("Ingrese otro número"));
let c = parseInt(prompt("Ingrese otro número"));
let d = parseInt(prompt("Ingrese otro número"));

let j = 0

if (a < 100) {
   j = j + 1  
} else if (b < 100) {
   j = j++
} else if (c< 100) {
   j = j++
} else if (d < 100) {
   j = j++
}

alert(j) */


// Ejercicio 12
let a = parseInt(prompt("Ingrese la hora"))
let hora

if (a > 60) {
   hora = a/60
   alert(hora)
} else {
  alert(a)
}