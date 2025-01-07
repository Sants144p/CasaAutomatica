import { Comodo } from "./Comodos.js";
export class Cozinha extends Comodo {
    constructor(nome, luzes, altura, largura, comprimento, _fogão, _geladeira) {
        super(nome, luzes, altura, largura, comprimento);
        this._fogão = false;
        this._geladeira = false;
    }
    get fogão() {
        return this._fogão;
    }
    alterarFogao() {
        this._fogão = !this._fogão;
        console.log(`Cozinha: Fogão está agora ${this._fogão ? "Ligado" : "Desligado"}`);
    }
    get geladeira() {
        return this._geladeira;
    }
    alterarGeladeira() {
        this._geladeira = !this._geladeira;
        console.log(`Cozinha: Geladeira está agora ${this._geladeira ? "Ligada" : "Desligada"}`);
    }
}
