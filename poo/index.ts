import {Carro} from "./carro"

let Cupra=new Carro("Chevy",30000,"Naranja",20)
Cupra.Velocidad(Cupra.velocidad)
console.log(Cupra.marca)
console.log("cuesta: " + Cupra.precio)
console.log("Color: " + Cupra.color)
Cupra.Velocidad(50)

import {Dado} from "./dado"

let pirinola=new Dado(6)

console.log(pirinola.tirarDado())

let dado10=new Dado(10)

console.log(dado10.tirarDado())

let x:string | null =prompt("ingresa un numero: ");
console.log(x)