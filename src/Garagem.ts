import { Comodo } from "./Comodos";

export class Garagem extends Comodo{

    protected _Portão : boolean

    constructor(nome : string, luzes : boolean, altura : number, largura : number, comprimento: number, 
        temperatura : number, Portão : boolean) {

        super(nome, luzes, altura, largura, comprimento, temperatura)
        this._Portão = Portão

    }

}