import { Comodo } from "./Comodos.js";
export class Sala extends Comodo {
    constructor(nome, luzes, altura, largura, comprimento, temperatura, televisao) {
        super(nome, luzes, altura, largura, comprimento, temperatura);
        this._televisao = televisao;
    }
    get televisao() {
        return this._televisao;
    }
    alterarTV(status) {
        this._televisao = status;
    }
}
