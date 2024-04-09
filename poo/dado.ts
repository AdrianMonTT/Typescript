export class Dado{
    lados:number

    constructor(lados:number){
        this.lados=lados
    }

    tirarDado():number{
        return Math.floor(Math.random()*this.lados)+1

    }
}