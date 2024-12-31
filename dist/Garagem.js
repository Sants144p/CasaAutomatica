import { Comodo } from "./Comodos.js";
export class Garagem extends Comodo {
    constructor(nome, luzes, altura, largura, comprimento, temperatura, Portão) {
        super(nome, luzes, altura, largura, comprimento, temperatura);
        this._Portão = Portão;
    }
}
