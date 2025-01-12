import { Comodo } from "./Comodos.js";
export class Banheiro extends Comodo {
    constructor(nome, luzes, altura, largura, comprimento, _chuveiro) {
        super(nome, luzes, altura, largura, comprimento);
        this._chuveiro = false;
    }
    get chuveiro() {
        return this._chuveiro;
    }
    alterarChuveiro() {
        this._chuveiro = !this._chuveiro;
        console.log(`Banheiro: Chuveiro está agora ${this._chuveiro ? "Ligado" : "Desligado"}`);
    }
}
