"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banheiro = void 0;
const Comodos_1 = require("./Comodos");
class Banheiro extends Comodos_1.Comodo {
    constructor(nome, luzes, altura, largura, comprimento, temperatura) {
        super(nome, luzes, altura, largura, comprimento, temperatura);
    }
}
exports.Banheiro = Banheiro;
