"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quarto = void 0;
const Comodos_1 = require("./Comodos");
class Quarto extends Comodos_1.Comodo {
    constructor(nome, luzes, altura, largura, comprimento, temperatura) {
        super(nome, luzes, altura, largura, comprimento, temperatura);
    }
}
exports.Quarto = Quarto;
