import { Comodo } from "./Comodos.js";

export class Sala extends Comodo{

    protected _televisao : boolean

    constructor(nome : string, luzes : boolean, altura : number, largura : number, comprimento: number, 
    temperatura : number, _televisao : boolean) {

        super(nome, luzes, altura, largura, comprimento, temperatura)

        this._televisao = false
    }

    get televisao(){
        return this._televisao
    }

    alterarTV() : void{

        this._televisao = !this._televisao;
        console.log(`Sala: Televisão está agora ${this._televisao ? "Ligada" : "Desligada"}`);
    }
}