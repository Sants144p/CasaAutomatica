import { Comodo } from "./Comodos.js";

export class Banheiro extends Comodo{

    protected _chuveiro : boolean

    constructor(nome : string, luzes : boolean, altura : number, largura : number, comprimento : number, _chuveiro : boolean) {

        super(nome, luzes, altura, largura, comprimento)
        this._chuveiro = false

    }

    get chuveiro(){
        return this._chuveiro
    }

    alterarChuveiro() {
        this._chuveiro = !this._chuveiro;
        console.log(`Banheiro: Chuveiro está agora ${this._chuveiro ? "Ligado" : "Desligado"}`);
    }

}