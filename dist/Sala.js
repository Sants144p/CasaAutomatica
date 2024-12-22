"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sala = void 0;
const Comodos_1 = require("./Comodos");
class Sala extends Comodos_1.Comodo {
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
exports.Sala = Sala;
