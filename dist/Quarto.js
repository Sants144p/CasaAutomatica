import { Comodo } from "./Comodos.js";
export class Quarto extends Comodo {
    constructor(nome, luzes, altura, largura, comprimento, _televisao, _ArCondicionado) {
        super(nome, luzes, altura, largura, comprimento);
        this._televisao = false;
        this._ArCondicionado = false;
        this._temperaturaArCondicionado = 23;
    }
    get televisao() {
        return this._televisao;
    }
    alterarTV() {
        this._televisao = !this._televisao;
        console.log(`Quarto: Televisão está agora ${this._televisao ? "Ligada" : "Desligada"}`);
    }
    get ArCondicionado() {
        return this._ArCondicionado;
    }
    alterarArCondicionado() {
        this._ArCondicionado = !this._ArCondicionado;
        console.log(`Quarto: O Ventilador está agora ${this._ArCondicionado ? "Ligado" : "Desligado"}`);
    }
    get temperaturaArCondicionado() {
        return this._temperaturaArCondicionado;
    }
    ajustarTemperaturadoAr(temp) {
        if (this.ArCondicionado) {
            this._temperaturaArCondicionado = temp;
        }
        else {
            console.error("O Ar-Condicionado precisa estar ligado para funcionar");
        }
    }
}
