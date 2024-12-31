import { Comodo } from "./Comodos.js";
export class Cozinha extends Comodo {
    constructor(nome, luzes, altura, largura, comprimento, temperatura, fogão, geladeira) {
        super(nome, luzes, altura, largura, comprimento, temperatura);
        this._fogão = fogão;
        this._geladeira = geladeira;
    }
    get fogão() {
        return this._fogão;
    }
    alterarFogão(status) {
        this._fogão = status;
    }
    get geladeira() {
        return this._geladeira;
    }
    alterarGeladeira(status) {
        this._geladeira = status;
        if (status == true) {
            this._temperatura = this._temperatura + 5;
        }
    }
}
