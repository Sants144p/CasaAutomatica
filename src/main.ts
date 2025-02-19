import { Comodo } from "./Comodos.js";
import { Banheiro } from "./Banheiro.js";
import { Garagem } from "./Garagem.js";
import { Cozinha } from "./Cozinha.js";
import { Quarto } from "./Quarto.js";
import { Sala } from "./Sala.js";

import { cameraExibeComodo, atualizarBotoes, atualizarImagemCamera, atualizarOutput, Energia, atualizarHora, mudarFiltro } from "./FuncoesVisuais.js";
import { alterarLuzes, alterarFogao, alterarGeladeira, alterarChuveiro, alterarPortao, alterarTelevisao, alterarTelevisaoQuarto} from "./FuncoesBooleanas.js";
import { alterarArCondicionado, alterarTemperatura, alterarTemperatura2, alterarTemperatura3, alterarValorTemp, alterarValorTempAr, RegularArCondicionado } from "./FuncoesTemperatura.js";

// Variável para rastrear a posição atual da câmera
let cameraIndice = 0;
console.log("Índice: " + cameraIndice);

//Temperatura
localStorage.setItem("TemperaturaAncora", "40");
localStorage.setItem('TemperaturaUniversal', "40");
let tempStringAncora: string = localStorage.getItem("TemperaturaAncora") ?? "21"
let tempStringUniversal: string = localStorage.getItem("TemperaturaUniversal") ?? "21"

export let _TemperaturaAncora : number = parseInt(tempStringAncora) 
export let _TemperaturaUniversal : number = parseInt(tempStringUniversal)

const ListaComodos : Comodo[] = [
    new Quarto("Quarto", true, 2.5, 6, 8, false, false), //0
    new Sala("Sala de Estar", true, 3.5, 12,14, false), //1
    new Banheiro("Banheiro", true, 2.5, 6, 6, false), //2
    new Garagem("Garagem", true, 3.5, 20, 20, false), //3
    new Cozinha("Cozinha", true, 3.5, 12,14, false, false) //4
];

//#region Elementos
const CasaDiv = document.getElementById('Casa-Automatica')! as HTMLDivElement;
const CozinhaDiv = document.getElementById('controle-cozinha') as HTMLDivElement;
const QuartoDiv = document.getElementById('controle-quarto') as HTMLDivElement;
const GaragemDiv = document.getElementById('controle-garagem') as HTMLDivElement;
const SalaDiv = document.getElementById('controle-sala') as HTMLDivElement;
const BanheiroDiv = document.getElementById('controle-banheiro') as HTMLDivElement;
const AjustadorDiv = document.getElementById('ajustar-temp-arcondicionado') as HTMLDivElement
const HoraDiv = document.getElementById('Hora') as HTMLDivElement
const ValorTemp = document.getElementById('temperatura-range') as HTMLDivElement;
const ValorTempAr = document.getElementById('temperatura-range-ar') as HTMLDivElement;
const imagemDiv = document.getElementById('ImagemCamera') as HTMLDivElement;
const ConsumoEnergia = document.getElementById('Energia') as HTMLDivElement;
const Display_temp = document.getElementById('display-temp') as HTMLDivElement;
const FiltroCor = document.getElementById('Filtro') as HTMLImageElement;
const Cubao = document.getElementById('Cubao') as HTMLDivElement

const btnAlternarLuzes = document.getElementById('alternar-luzes')! as HTMLButtonElement;
const btnAlternarFogao = document.getElementById('alternar-fogao')! as HTMLButtonElement;
const btnAlternarGeladeira = document.getElementById('alternar-geladeira')! as HTMLButtonElement;
const btnAlternarPortao = document.getElementById('alternar-portao')! as HTMLButtonElement;
const btnAlternarTelevisao = document.getElementById('alternar-televisao')! as HTMLButtonElement;
const btnAlternarTelevisaoQuarto = document.getElementById('alternar-televisao-quarto')! as HTMLButtonElement;
const btnAlternarChuveiro = document.getElementById('alternar-chuveiro') as HTMLButtonElement;
const btnDormir = document.getElementById('dormir') as HTMLButtonElement;

const btnAlternarArCondicionado = document.getElementById('alternar-ar-quarto')! as HTMLButtonElement;
const btnAjustarTempAr = document.getElementById('ajustar-temp')! as HTMLButtonElement;

const btnAlterarTemperatura = document.getElementById('alterar-temperatura')! as HTMLButtonElement;
const NovaTemperaturaHTML = document.getElementById('nova-temperatura')! as HTMLInputElement;
const NovaTemperaturaAr = document.getElementById('temp-ar')! as HTMLInputElement;
//#endregion

//#region Inicialização
atualizarBotoes(CozinhaDiv, GaragemDiv, BanheiroDiv, SalaDiv, QuartoDiv, AjustadorDiv, ListaComodos, cameraIndice, Display_temp);
console.log("atualizarBotoes() OK");
atualizarOutput(ListaComodos, cameraIndice, _TemperaturaUniversal);
console.log("atualizarOutput() OK");
atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
console.log("atualizarImagemCamera() OK");
Energia(ListaComodos, ConsumoEnergia, btnDormir);
console.log("Energia() OK");
//#endregion

//#region Mudar filtro de Calor/frio
setInterval( () => mudarFiltro(_TemperaturaUniversal, FiltroCor), 500);
//#endregion

//#region Horário Atualizado
setInterval( () => atualizarHora(HoraDiv), 1000);
atualizarHora(HoraDiv)
//#endregion

//#region Cameras
const selectCamera = document.getElementById('camera-select')! as HTMLSelectElement;

selectCamera.addEventListener('change', () => {
    const indice : number = parseInt(selectCamera.value);
    console.log(`O Indice é igual à: ${indice}`)
    cameraIndice = cameraExibeComodo(indice, ListaComodos, cameraIndice);
    atualizarBotoes(CozinhaDiv, GaragemDiv, BanheiroDiv, SalaDiv, QuartoDiv, AjustadorDiv, ListaComodos, cameraIndice, Display_temp);
    atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
    atualizarOutput(ListaComodos, cameraIndice, _TemperaturaUniversal);
    let tempStringUniversal: string = localStorage.getItem("TemperaturaUniversal") ?? "21"
    alterarTemperatura2(cameraIndice, ListaComodos, _TemperaturaAncora, parseInt(tempStringUniversal));
    Energia(ListaComodos, ConsumoEnergia, btnDormir);

});
//#endregion

//#region Conectar os botões aos seus eventos

btnAlternarLuzes.addEventListener('click', () => {
    alterarLuzes(cameraIndice, ListaComodos);
    atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
    atualizarOutput(ListaComodos, cameraIndice, _TemperaturaUniversal);
    Energia(ListaComodos, ConsumoEnergia, btnDormir);
});
btnAlternarFogao.addEventListener('click', () => {
    alterarFogao(cameraIndice, ListaComodos, _TemperaturaUniversal);
    atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
    Energia(ListaComodos, ConsumoEnergia, btnDormir);
});
btnAlternarGeladeira.addEventListener('click', () => {
    alterarGeladeira(cameraIndice, ListaComodos, _TemperaturaUniversal);
    atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
    Energia(ListaComodos, ConsumoEnergia, btnDormir);
});
btnAlternarPortao.addEventListener('click', () => {
    alterarPortao(cameraIndice, ListaComodos, _TemperaturaUniversal);
    atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
});
btnAlternarChuveiro.addEventListener('click', () => {
    alterarChuveiro(cameraIndice, ListaComodos, _TemperaturaUniversal);
    atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
    Energia(ListaComodos, ConsumoEnergia, btnDormir);
})
btnAlternarTelevisao.addEventListener('click', () => {
    alterarTelevisao(cameraIndice, ListaComodos, _TemperaturaUniversal);
    atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
    Energia(ListaComodos, ConsumoEnergia, btnDormir);
});
btnAlternarTelevisaoQuarto.addEventListener('click', () => {
    alterarTelevisaoQuarto(cameraIndice, ListaComodos, _TemperaturaUniversal);
    atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
    Energia(ListaComodos, ConsumoEnergia, btnDormir);
});
btnAlternarArCondicionado.addEventListener('click', () => {
    let tempStringUniversal: string = localStorage.getItem("TemperaturaUniversal") ?? "21"
    alterarArCondicionado(cameraIndice, ListaComodos, _TemperaturaAncora, parseInt(tempStringUniversal), Display_temp, 
        CozinhaDiv, GaragemDiv, BanheiroDiv, SalaDiv, QuartoDiv, AjustadorDiv);
    
    atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
    Energia(ListaComodos, ConsumoEnergia, btnDormir);
});
btnAjustarTempAr.addEventListener('click', () => {
    RegularArCondicionado(cameraIndice, ListaComodos, _TemperaturaAncora, parseInt(tempStringUniversal), NovaTemperaturaHTML);
    atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
})
btnAlterarTemperatura.addEventListener('click', () => {
    let tempStringUniversal: string = localStorage.getItem("TemperaturaUniversal") ?? "21"
    alterarTemperatura(cameraIndice, ListaComodos, _TemperaturaAncora, parseInt(tempStringUniversal), NovaTemperaturaHTML);
    atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
})
btnDormir.addEventListener('click', () => {
    DORMIR();
})
NovaTemperaturaHTML.addEventListener('change', () => {
    let tempStringUniversal: string = localStorage.getItem("TemperaturaUniversal") ?? "21"
    alterarValorTemp(cameraIndice, ListaComodos, parseInt(tempStringUniversal), NovaTemperaturaHTML, ValorTemp);
    atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
})
NovaTemperaturaAr.addEventListener('change', () => {
    let tempStringUniversal: string = localStorage.getItem("TemperaturaUniversal") ?? "21"
    alterarValorTempAr(cameraIndice, ListaComodos, parseInt(tempStringUniversal), NovaTemperaturaAr, ValorTempAr);
    atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
})

function DORMIR() {
    CasaDiv.style.display = 'none'
    Cubao.style.display = 'block'
}

//#endregion


