import { Comodo } from "./Comodos.js";
export class Quarto extends Comodo {
    constructor(nome, luzes, altura, largura, comprimento, temperatura, _televisao, _ventilador) {
        super(nome, luzes, altura, largura, comprimento, temperatura);
        this._televisao = false;
        this._ventilador = false;
    }
    get televisao() {
        return this._televisao;
    }
    alterarTV() {
        this._televisao = !this._televisao;
        console.log(`Quarto: Televisão está agora ${this._televisao ? "Ligada" : "Desligada"}`);
    }
    get ventilador() {
        return this._ventilador;
    }
    alterarVentilador() {
        this._ventilador = !this._ventilador;
        console.log(`Quarto: O Ventilador está agora ${this._ventilador ? "Ligado" : "Desligado"}`);
    }
}
