export class Comodo{

    _nome : string;
    _luzes : boolean;
    _altura : number;
    _largura : number;
    _comprimento: number;
    _temperatura : number;

    constructor(nome : string, luzes : boolean, altura : number, largura : number, comprimento: number, temperatura : number) {
        this._nome = nome;
        this._luzes = luzes;
        this._altura = altura;
        this._largura = largura;
        this._comprimento = comprimento;
        this._temperatura = temperatura;
    } 

    get nome(){
        return this._nome
    }
    get luzes(){
        return this._luzes
    }
    get altura(){
        return this._altura
    }
    get largura(){
        return this._largura
    }
    get comprimento(){
        return this._comprimento
    }
    get temperatura(){
        return this._temperatura
    }
    
    Trocarluzes(): void {
        this._luzes = !this._luzes;
        console.log(`${this._nome}: as luzes estão agora ${this._luzes ? "ligadas" : "desligadas"}.`);
    }


    alterarTemperatura(novaTemperatura: any) {
        this._temperatura = novaTemperatura;
        console.log(`${this._nome}: a temperatura atual é igual a ${this._temperatura}`);
    }

    /* Com set seria assim:

        set luzes(status: boolean) {
        this._luzes = status;
        }

        set temperatura(novaTemperatura: number) {
        this._temperatura = novaTemperatura;
        }
    
    */
}

