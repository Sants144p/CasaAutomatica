import { Comodo } from "./Comodos.js";

export class Quarto extends Comodo{

    protected _televisao : boolean
    protected _ventilador : boolean

    constructor(nome : string, luzes : boolean, altura : number, largura : number, comprimento: number, 
        temperatura : number, _televisao : boolean, _ventilador : boolean) {

        super(nome, luzes, altura, largura, comprimento, temperatura)

        this._televisao = false
        this._ventilador = false
       
    }

    get televisao(){
        return this._televisao
    }

    alterarTV() : void{

        this._televisao = !this._televisao;
        console.log(`Quarto: Televisão está agora ${this._televisao ? "Ligada" : "Desligada"}`);
    }

    get ventilador(){

        return this._ventilador
    }

    alterarVentilador() : void{

        this._ventilador = !this._ventilador;
        console.log(`Quarto: O Ventilador está agora ${this._ventilador ? "Ligado" : "Desligado"}`);
    }

}