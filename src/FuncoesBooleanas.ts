import { Comodo } from "./Comodos.js";
import { Banheiro } from "./Banheiro.js";
import { Garagem } from "./Garagem.js";
import { Cozinha } from "./Cozinha.js";
import { Quarto } from "./Quarto.js";
import { Sala } from "./Sala.js";
import { atualizarOutput } from "./FuncoesVisuais.js";

export function alterarLuzes(cameraIndice : number, ListaComodos : Comodo[]) : void{

    if (cameraIndice >= 0 && cameraIndice < ListaComodos.length) {
        ListaComodos[cameraIndice].Trocarluzes();
    } else {
        console.log("A câmera não está posicionada em um cômodo válido.");
    }

}

export function alterarFogao(cameraIndice : number, ListaComodos : Comodo[], TemperaturaUniversal : number) {
    const comodoAtual = ListaComodos[cameraIndice];
    if (comodoAtual instanceof Cozinha) {
            comodoAtual.alterarFogao();
            atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal);
    }

}

export function alterarGeladeira(cameraIndice : number, ListaComodos : Comodo[], TemperaturaUniversal : number) {
    const comodoAtual = ListaComodos[cameraIndice];
        if (comodoAtual instanceof Cozinha) {
            comodoAtual.alterarGeladeira();
            atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal);
    }

}

export function alterarPortao(cameraIndice : number, ListaComodos : Comodo[], TemperaturaUniversal : number) {
    const comodoAtual = ListaComodos[cameraIndice];
    if (comodoAtual instanceof Garagem) {
        comodoAtual.alterarPortao();
        atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal);
    }
}

export function alterarTelevisao(cameraIndice : number, ListaComodos : Comodo[], TemperaturaUniversal : number) {
    const comodoAtual = ListaComodos[cameraIndice];
    if (comodoAtual instanceof Sala) {
        comodoAtual.alterarTV();
        atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal);
    }
}

export function alterarTelevisaoQuarto(cameraIndice : number, ListaComodos : Comodo[], TemperaturaUniversal : number) {
    const comodoAtual = ListaComodos[cameraIndice];
    if (comodoAtual instanceof Quarto) {
        comodoAtual.alterarTV();
        atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal);
    }
}

export function alterarChuveiro(cameraIndice : number, ListaComodos : Comodo[], TemperaturaUniversal : number) {
    const comodoAtual = ListaComodos[cameraIndice];
    if (comodoAtual instanceof Banheiro) {
        comodoAtual.alterarChuveiro();
        atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal);
    }
}