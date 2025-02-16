import { Comodo } from "./Comodos.js";

export class Quarto extends Comodo{

    protected _televisao : boolean
    protected _ArCondicionado : boolean
    protected _temperaturaArCondicionado : number | null

    constructor(nome : string, luzes : boolean, altura : number, largura : number, comprimento: number, 
         _televisao : boolean, _ArCondicionado : boolean) {

        super(nome, luzes, altura, largura, comprimento)

        this._televisao = false
        this._ArCondicionado = false
        this._temperaturaArCondicionado = 23
       
    }

    get televisao(){
        return this._televisao
    }

    alterarTV() : void{

        this._televisao = !this._televisao;
        console.log(`Quarto: Televisão está agora ${this._televisao ? "Ligada" : "Desligada"}`);
    }

    get ArCondicionado(){

        return this._ArCondicionado
    }

    alterarArCondicionado() : void{

        this._ArCondicionado = !this._ArCondicionado;
        console.log(`Quarto: O Ventilador está agora ${this._ArCondicionado ? "Ligado" : "Desligado"}`);
    }

    get temperaturaArCondicionado(){

        return this._temperaturaArCondicionado
    }

    ajustarTemperaturadoAr(temp : number){
        if (this.ArCondicionado) {
            this._temperaturaArCondicionado = temp
        } else {
            console.error("O Ar-Condicionado precisa estar ligado para funcionar")
        }

    }

}