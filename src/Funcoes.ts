import { Comodo } from "./Comodos.js";
import { Banheiro } from "./Banheiro.js";
import { Garagem } from "./Garagem.js";
import { Cozinha } from "./Cozinha.js";
import { Quarto } from "./Quarto.js";
import { Sala } from "./Sala.js";


export function cameraExibeComodo(indice: number, ListaComodos : Comodo[], cameraIndice : number) {
    cameraIndice = indice
    if (indice >= 0 && indice < ListaComodos.length) {
        cameraIndice = indice;
        console.log(ListaComodos[cameraIndice].nome);
    } else {
        console.log("Índice inválido! Por favor, escolha um número válido na lista.");
    }
}

export function atualizarBotoes(CozinhaDiv : HTMLDivElement, GaragemDiv : HTMLDivElement, 
    BanheiroDiv : HTMLDivElement, SalaDiv : HTMLDivElement, QuartoDiv : HTMLDivElement, AjustadorDiv : HTMLDivElement,
    ListaComodos : Comodo[], cameraIndice : number, Display_temp : HTMLDivElement ) {
    // Ocultar todos os botões
    CozinhaDiv.style.display = 'none';
    GaragemDiv.style.display = 'none';
    BanheiroDiv.style.display = 'none';
    SalaDiv.style.display = 'none';
    QuartoDiv.style.display = 'none';
    AjustadorDiv.style.display = 'none';

    
    const comodoAtual = ListaComodos[cameraIndice];
    console.log(comodoAtual.nome);

    // Mostrar botões conforme o cômodo atual
    if (comodoAtual instanceof Cozinha) { // Cozinha
        CozinhaDiv.style.display = 'block';
    } else if (comodoAtual instanceof Garagem) { // Garagem
        GaragemDiv.style.display = 'block';
    } else if (comodoAtual instanceof Banheiro) { // Banheiro
        BanheiroDiv.style.display = 'block'
    } else if (comodoAtual instanceof Sala) { // Sala
        SalaDiv.style.display = 'block';
    } else if (comodoAtual instanceof Quarto) { // Quarto
        QuartoDiv.style.display = 'block';
    }

    if (comodoAtual instanceof Quarto) {
        if (comodoAtual.ArCondicionado == true){
            AjustadorDiv.style.display = 'block'
        }else{
            AjustadorDiv.style.display = 'none'
        }
    }
    if (comodoAtual instanceof Quarto) {
        if (comodoAtual.ArCondicionado == true) {
            Display_temp.style.display = 'none';
        }
        else {
            Display_temp.style.display = 'block';
        }
    }
    if (comodoAtual instanceof Sala) {
        Display_temp.style.display = 'block'
    }
    if (comodoAtual instanceof Garagem) {
        Display_temp.style.display = 'block'
    }
    if (comodoAtual instanceof Cozinha) {
        Display_temp.style.display = 'block'
    }
    if (comodoAtual instanceof Banheiro) {
        Display_temp.style.display = 'block'
    }
}