export class Carro{
    marca:string
    precio:number
    color:string
    velocidad:number

    constructor(marca:string, precio:number, color:string, velocidad:number){
        this.marca=marca
        this.precio=precio
        this.color=color
        this.velocidad=velocidad
    }

    Velocidad(speed:number):void{
        this.velocidad=speed
        console.log(`voy a ${this.velocidad}`)
    }
}




