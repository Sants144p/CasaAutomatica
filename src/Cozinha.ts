import { Comodo } from "./Comodos.js";


export class Cozinha extends Comodo{

    protected _fogão : boolean
    protected _geladeira : boolean

    constructor(nome : string, luzes : boolean, altura : number, largura : number, comprimento: number, 
        temperatura : number, fogão : boolean, geladeira : boolean) {

        super(nome, luzes, altura, largura, comprimento, temperatura)

        this._fogão = fogão
        this._geladeira = geladeira
    }

    get fogão(){
        return this._fogão
    }

    alterarFogão(status : boolean){

        this._fogão = status
    }

    get geladeira(){
        return this._geladeira
    }

    alterarGeladeira(status : boolean){

        this._geladeira = status
        
        if (status == true){
            this._temperatura = this._temperatura + 5
        }
    }
}