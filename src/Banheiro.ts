import { Comodo } from "./Comodos.js";

export class Banheiro extends Comodo{

    constructor(nome : string, luzes : boolean, altura : number, largura : number, comprimento: number, temperatura : number) {

        super(nome, luzes, altura, largura, comprimento, temperatura)
       
    }

}