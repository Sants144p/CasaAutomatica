"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Banheiro_1 = require("./Banheiro");
const Garagem_1 = require("./Garagem");
const Cozinha_1 = require("./Cozinha");
const Quarto_1 = require("./Quarto");
const Sala_1 = require("./Sala");
const ListaComodos = [
    new Quarto_1.Quarto("Quarto1", true, 2.5, 6, 8, 20), //0
    new Sala_1.Sala("Sala de Estar", true, 3.5, 12, 14, 20, false), //1
    new Banheiro_1.Banheiro("Banheiro1", true, 2.5, 6, 6, 20), //2
    new Garagem_1.Garagem("Garagem", true, 3.5, 20, 20, 20, false), //3
    new Cozinha_1.Cozinha("Garagem", true, 3.5, 12, 14, 20, false, false) //4
];
// Variável para rastrear a posição atual da câmera
let cameraIndice = -1;
function cameraExibeComodo(indice) {
    if (indice >= 0 && indice < ListaComodos.length) {
        cameraIndice = indice;
        console.log(ListaComodos[cameraIndice].nome);
    }
    else {
        console.log("Índice inválido! Por favor, escolha um número válido na lista.");
    }
}
function alterarLuzes() {
    if (cameraIndice >= 0 && cameraIndice < ListaComodos.length) {
        ListaComodos[cameraIndice].Trocarluzes();
    }
    else {
        console.log("A câmera não está posicionada em um cômodo válido.");
    }
}
cameraExibeComodo(0);
alterarLuzes();
cameraExibeComodo(1);
alterarLuzes();
cameraExibeComodo(3);
alterarLuzes();
