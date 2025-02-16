import { Comodo } from "./Comodos.js";


export class Cozinha extends Comodo{

    protected _fogão : boolean
    protected _geladeira : boolean

    constructor(nome : string, luzes : boolean, altura : number, largura : number, comprimento: number, 
        _fogão : boolean, _geladeira : boolean) {

        super(nome, luzes, altura, largura, comprimento)

        this._fogão = false
        this._geladeira = false
    }

    get fogão(){
        return this._fogão
    }

    alterarFogao() : void{
        this._fogão = !this._fogão;
        console.log(`Cozinha: Fogão está agora ${this._fogão ? "Ligado" : "Desligado"}`);
    }

    get geladeira(){
        return this._geladeira
    }

    alterarGeladeira() : void{

        this._geladeira = !this._geladeira;
        console.log(`Cozinha: Geladeira está agora ${this._geladeira ? "Ligada" : "Desligada"}`);
        
    }
}