import { Comodo } from "./Comodos.js";
export class Garagem extends Comodo {
    constructor(nome, luzes, altura, largura, comprimento, _portao) {
        super(nome, luzes, altura, largura, comprimento);
        this._portao = false;
    }
    get portao() {
        return this._portao;
    }
    alterarPortao() {
        this._portao = !this._portao;
        console.log(`Garagem: Portão está agora ${this._portao ? "Aberto" : "Fechado"}`);
    }
}
