"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cozinhaozinha = void 0;
const Comodos_1 = require("./Comodos");
class Cozinhaozinha extends Comodos_1.Comodo {
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
exports.Cozinhaozinha = Cozinhaozinha;
