import { Comodo } from "./Comodos.js";
export class Sala extends Comodo {
    constructor(nome, luzes, altura, largura, comprimento, _televisao) {
        super(nome, luzes, altura, largura, comprimento);
        this._televisao = false;
    }
    get televisao() {
        return this._televisao;
    }
    alterarTV() {
        this._televisao = !this._televisao;
        console.log(`Sala: Televisão está agora ${this._televisao ? "Ligada" : "Desligada"}`);
    }
}
