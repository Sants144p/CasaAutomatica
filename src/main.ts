import { Comodo } from "./Comodos";
import { Banheiro } from "./Banheiro";
import { Garagem } from "./Garagem";
import { Cozinha } from "./Cozinha";
import { Quarto } from "./Quarto";
import { Sala } from "./Sala";

const ListaComodos : Comodo[] = [
    new Quarto("Quarto1", true, 2.5, 6, 8, 20), //0
    new Sala("Sala de Estar", true, 3.5, 12,14, 20, false), //1
    new Banheiro("Banheiro1", true, 2.5, 6, 6, 20), //2
    new Garagem("Garagem", true, 3.5, 20, 20, 20, false), //3
    new Cozinha("Garagem", true, 3.5, 12,14, 20, false, false) //4
]

// Variável para rastrear a posição atual da câmera
let cameraIndice = -1;

function cameraExibeComodo(indice: number): void {
    if (indice >= 0 && indice < ListaComodos.length) {
        cameraIndice = indice;
        console.log(ListaComodos[cameraIndice].nome);
    } else {
        console.log("Índice inválido! Por favor, escolha um número válido na lista.");
    }
}

function alterarLuzes() : void{

    if (cameraIndice >= 0 && cameraIndice < ListaComodos.length) {
        ListaComodos[cameraIndice].Trocarluzes();
    } else {
        console.log("A câmera não está posicionada em um cômodo válido.");
    }

}

cameraExibeComodo(0)
alterarLuzes()
cameraExibeComodo(1)
alterarLuzes()
cameraExibeComodo(3)
alterarLuzes()