console.log("Hola mundo")
console.error("Error 403")
console.table([{
    nombre: "Adrian", edad: 43
}],['nombre','edad','peso'])
const pi:number=3.1416
let radio: number=4

console.log("El area del circulo es: ", pi*(radio*radio))

type genero= "La roca" | 10

interface Usuario{
    nombre: string
    edad: number
    sexo: genero
    correo: string
}

let arreglo: number[]
let usuarios: Usuario[]

let gen: genero='La roca'

console.log("genero: ", gen)

usuarios = [{nombre:'Adrian',edad: 45,sexo: 'La roca',correo: 'asjkbdjkabd'}]

console.log(usuarios)