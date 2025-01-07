import { Comodo } from "./Comodos.js";

export class Garagem extends Comodo{

    protected _portao : boolean

    constructor(nome : string, luzes : boolean, altura : number, largura : number, comprimento: number, 
        _portao : boolean) {

        super(nome, luzes, altura, largura, comprimento)
        this._portao = false

    }

    get portao(){
        return this._portao
    }

    alterarPortao() {
        this._portao = !this._portao;
        console.log(`Garagem: Portão está agora ${this._portao ? "Aberto" : "Fechado"}`);
    }

}