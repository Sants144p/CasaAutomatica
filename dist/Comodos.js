export class Comodo {
    constructor(nome, luzes, altura, largura, comprimento) {
        this._nome = nome;
        this._luzes = luzes;
        this._altura = altura;
        this._largura = largura;
        this._comprimento = comprimento;
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
    Trocarluzes() {
        this._luzes = !this._luzes;
        console.log(`${this._nome}: as luzes estão agora ${this._luzes ? "ligadas" : "desligadas"}.`);
    }
}
