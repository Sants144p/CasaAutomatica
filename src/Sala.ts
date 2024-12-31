import { Comodo } from "./Comodos.js";

export class Sala extends Comodo{

    protected _televisao : boolean

    constructor(nome : string, luzes : boolean, altura : number, largura : number, comprimento: number, temperatura : number, televisao : boolean) {

        super(nome, luzes, altura, largura, comprimento, temperatura)

        this._televisao = televisao
    }

    get televisao(){
        return this._televisao
    }

    alterarTV(status : boolean){

        this._televisao = status
    }
}