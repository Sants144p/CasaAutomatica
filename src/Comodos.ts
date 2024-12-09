export class Comodo{

    nome : string;
    luzes : boolean;
    altura : number;
    largura : number;
    comprimento: number;
    temperatura : number;

    constructor(nome : string, luzes : boolean, altura : number, largura : number, comprimento: number, temperatura : number) {
        this.nome = nome;
        this.luzes = luzes;
        this.altura = altura;
        this.largura = largura;
        this.comprimento = comprimento;
        this.temperatura = temperatura;
    } 
}