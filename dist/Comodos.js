"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comodo = void 0;
class Comodo {
    constructor(nome, luzes, altura, largura, comprimento, temperatura) {
        this._nome = nome;
        this._luzes = luzes;
        this._altura = altura;
        this._largura = largura;
        this._comprimento = comprimento;
        this._temperatura = temperatura;
    }
    get nome() {
        return this._nome;
    }
    get luzes() {
        return this._luzes;
    }
    get altura() {
        return this._altura;
    }
    get largura() {
        return this._largura;
    }
    get comprimento() {
        return this._comprimento;
    }
    get temperatura() {
        return this._temperatura;
    }
    alterarLuzes(status) {
        this._luzes = status;
    }
    alterarTemperatura(novaTemperatura) {
        this._temperatura = novaTemperatura;
    }
}
exports.Comodo = Comodo;
