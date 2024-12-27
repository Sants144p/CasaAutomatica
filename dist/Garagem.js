"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Garagem = void 0;
const Comodos_1 = require("./Comodos");
class Garagem extends Comodos_1.Comodo {
    constructor(nome, luzes, altura, largura, comprimento, temperatura, Portão) {
        super(nome, luzes, altura, largura, comprimento, temperatura);
        this._Portão = Portão;
    }
}
exports.Garagem = Garagem;
