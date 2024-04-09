type tipo="oviparo" | "viviparo"
class Animal{
    raza:string
    tipoA:tipo
    sexo:boolean
    constructor(raza:string, tipoA:tipo, sexo:boolean){
        this.raza=raza
        this.tipoA=tipoA
        this.sexo=sexo
    }
    hacerRuido():void{
        console.log("Estoy caminando")
    }
}

class Perro extends Animal{

    constructor(raza:string, tipoA:tipo, sexo:boolean){
        super(raza, tipoA, sexo)
    }
    hacerRuido():void{
        console.log("Estoy ladrando")
    }
}

let Firulais=new Perro("pug","viviparo",true)
Firulais.hacerRuido()
console.log(Firulais.raza)
console.log(Firulais.sexo)