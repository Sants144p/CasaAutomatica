import { Comodo } from "./Comodos.js";
import { Banheiro } from "./Banheiro.js";
import { Garagem } from "./Garagem.js";
import { Cozinha } from "./Cozinha.js";
import { Quarto } from "./Quarto.js";
import { Sala } from "./Sala.js";

import { cameraExibeComodo, atualizarBotoes, atualizarImagemCamera, atualizarOutput, Energia } from "./Funcoes.js";


// Variável para rastrear a posição atual da câmera
let cameraIndice = 0;
console.log("Índice: " + cameraIndice);

//Temperatura
let TemperaturaAncora : number = 21
let TemperaturaUniversal : number = TemperaturaAncora

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
atualizarBotoes(CozinhaDiv, GaragemDiv, BanheiroDiv, SalaDiv, QuartoDiv, AjustadorDiv, ListaComodos, cameraIndice, Display_temp);
console.log("atualizarBotoes() OK");
atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal);
console.log("atualizarOutput() OK");
atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
console.log("atualizarImagemCamera() OK");
Energia(ListaComodos, ConsumoEnergia, btnDormir);
console.log("Energia() OK");

//#region Funções para alterar as booleanas

function alterarLuzes() : void{

    if (cameraIndice >= 0 && cameraIndice < ListaComodos.length) {
        ListaComodos[cameraIndice].Trocarluzes();
    } else {
        console.log("A câmera não está posicionada em um cômodo válido.");
    }

}

function alterarTemperatura() {

    const comodoAtual = ListaComodos[cameraIndice];

    if (comodoAtual instanceof Quarto && comodoAtual.ArCondicionado) {
        let tempAr = comodoAtual.temperaturaArCondicionado ?? 21
        TemperaturaUniversal = tempAr
        atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal)
    }else if (comodoAtual instanceof Quarto && comodoAtual.ArCondicionado == false){
        const NovaTemperatura : number = Number(NovaTemperaturaHTML.value)
        TemperaturaAncora = NovaTemperatura
        TemperaturaUniversal = TemperaturaAncora
        atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal)
    }else{
        const NovaTemperatura : number = Number(NovaTemperaturaHTML.value)
        TemperaturaAncora = NovaTemperatura
        TemperaturaUniversal = TemperaturaAncora
        atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal)
    }
}

function alterarTemperatura2(){

    const comodoAtual = ListaComodos[cameraIndice];

    if (comodoAtual instanceof Quarto  && comodoAtual.ArCondicionado){
        let tempAr = comodoAtual.temperaturaArCondicionado ?? 21
        TemperaturaUniversal = tempAr
        atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal)
    }else{
        TemperaturaUniversal = TemperaturaAncora
        atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal)
    }
}

function alterarTemperatura3(){

    const comodoAtual = ListaComodos[cameraIndice];

    if (comodoAtual instanceof Quarto && comodoAtual.ArCondicionado) {
        let tempAr = comodoAtual.temperaturaArCondicionado ?? 21
        TemperaturaUniversal = tempAr
        atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal)
    }
    else if (comodoAtual instanceof Quarto && comodoAtual.ArCondicionado == false){
        TemperaturaUniversal = TemperaturaAncora
        atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal)
    }

}

function alterarFogao() {
    const comodoAtual = ListaComodos[cameraIndice];
    if (comodoAtual instanceof Cozinha) {
            comodoAtual.alterarFogao();
            atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal);
    }

}

function alterarGeladeira() {
    const comodoAtual = ListaComodos[cameraIndice];
        if (comodoAtual instanceof Cozinha) {
            comodoAtual.alterarGeladeira();
            atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal);
    }

}

function alterarPortao() {
    const comodoAtual = ListaComodos[cameraIndice];
    if (comodoAtual instanceof Garagem) {
        comodoAtual.alterarPortao();
        atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal);
    }
}

function alterarTelevisao() {
    const comodoAtual = ListaComodos[cameraIndice];
    if (comodoAtual instanceof Sala) {
        comodoAtual.alterarTV();
        atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal);
    }
}

function alterarTelevisaoQuarto() {
    const comodoAtual = ListaComodos[cameraIndice];
    if (comodoAtual instanceof Quarto) {
        comodoAtual.alterarTV();
        atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal);
    }
}

function alterarChuveiro() {
    const comodoAtual = ListaComodos[cameraIndice];
    if (comodoAtual instanceof Banheiro) {
        comodoAtual.alterarChuveiro();
        atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal);
    }
}

function alterarArCondicionado() {
    const comodoAtual = ListaComodos[cameraIndice];
    if (comodoAtual instanceof Quarto) {
        comodoAtual.alterarArCondicionado();
        if (comodoAtual.ArCondicionado == true) {
            Display_temp.style.display = 'none';
        }
        else {
            Display_temp.style.display = 'block';
        }
        atualizarBotoes(CozinhaDiv, GaragemDiv, BanheiroDiv, SalaDiv, QuartoDiv, AjustadorDiv, ListaComodos, cameraIndice, Display_temp);
        atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal);
    }
    alterarTemperatura3()
}

function RegularArCondicionado() {
    const comodoAtual = ListaComodos[cameraIndice];
    if (comodoAtual instanceof Quarto) {
        const tempHTML = document.getElementById('temp-ar')! as HTMLInputElement
        const temp = parseInt(tempHTML.value)
        
        comodoAtual.ajustarTemperaturadoAr(temp);
        atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal);
    }
    alterarTemperatura()
}
function alterarValorTemp() {
    const temp = parseInt(NovaTemperaturaHTML.value)
    ValorTemp.innerHTML = `${temp}°`
    atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal);
}

function alterarValorTempAr() {
    const temp = parseInt(NovaTemperaturaAr.value)
    ValorTempAr.innerHTML = `${temp}`
    atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal);
}

//#region Mudar filtro de Calor/frio

function mudarFiltro(){

    let opacidade

    if (TemperaturaUniversal >= -15 && TemperaturaUniversal <= 24){
        //Mantem o tom normal
        opacidade = 0
        FiltroCor.style.filter = 'none'

    }else{

        // Fora do intervalo neutro, calcula a opacidade com base na distância
        const distancia = TemperaturaUniversal < -15
            ? Math.abs(TemperaturaUniversal - (-15)) 
            : Math.abs(TemperaturaUniversal - 24);

        // Normaliza a distância para um intervalo de transparência (mínimo 0.3)
        const maxDistancia = 100; // -100 ou 100
        const transparencia = Math.min((distancia / maxDistancia), 1);
        

        if (TemperaturaUniversal > 24){
            FiltroCor.src = "/Images/TelaCalor.jpg"
            opacidade = 0.35  - (0.7 * (1 - transparencia)); // Garante opacidade mínima de 0.3
                        
        }else if (TemperaturaUniversal < -15){
            FiltroCor.src = "/Images/TelaFrio.jpg"
            opacidade = 0.5  - (0.7 * (1 - transparencia)); // Garante opacidade mínima de 0.3
        }
    

    }
    FiltroCor.style.opacity = String(opacidade)
}

setInterval(mudarFiltro, 500)

function DORMIR() {
    CasaDiv.style.display = 'none'
    Cubao.style.display = 'block'
}
//#endregion

//#region Horário Atualizado
function atualizarHora(){
    const Agora = new Date()

    const horas = ('0' + Agora.getHours()).slice(-2);
    const minutos = ('0' + Agora.getMinutes()).slice(-2);
    const segundos = ('0' + Agora.getSeconds()).slice(-2);

    HoraDiv.textContent = `${horas}:${minutos}:${segundos}`
}

setInterval(atualizarHora, 1000)

atualizarHora()
//#endregion

//#region Cameras

const selectCamera = document.getElementById('camera-select')! as HTMLSelectElement;

selectCamera.addEventListener('change', () => {
    let indice: number = parseInt(selectCamera.value);
    cameraIndice = cameraExibeComodo(indice, ListaComodos, cameraIndice);
    atualizarBotoes(CozinhaDiv, GaragemDiv, BanheiroDiv, SalaDiv, QuartoDiv, AjustadorDiv, ListaComodos, cameraIndice, Display_temp);
    atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
    atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal);
    alterarTemperatura2();
    Energia(ListaComodos, ConsumoEnergia, btnDormir);

});

//#endregion

//#region Conectar os botões aos seus eventos

btnAlternarLuzes.addEventListener('click', () => {
    alterarLuzes();
    atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
    atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal);
    Energia(ListaComodos, ConsumoEnergia, btnDormir);
});
btnAlternarFogao.addEventListener('click', () => {
    alterarFogao();
    atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
    Energia(ListaComodos, ConsumoEnergia, btnDormir);
});
btnAlternarGeladeira.addEventListener('click', () => {
    alterarGeladeira();
    atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
    Energia(ListaComodos, ConsumoEnergia, btnDormir);
});
btnAlternarPortao.addEventListener('click', () => {
    alterarPortao();
    atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
});
btnAlternarChuveiro.addEventListener('click', () => {
    alterarChuveiro();
    atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
    Energia(ListaComodos, ConsumoEnergia, btnDormir);
})
btnAlternarTelevisao.addEventListener('click', () => {
    alterarTelevisao();
    atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
    Energia(ListaComodos, ConsumoEnergia, btnDormir);
});
btnAlternarTelevisaoQuarto.addEventListener('click', () => {
    alterarTelevisaoQuarto();
    atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
    Energia(ListaComodos, ConsumoEnergia, btnDormir);
});
btnAlternarArCondicionado.addEventListener('click', () => {
    alterarArCondicionado();
    atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
    Energia(ListaComodos, ConsumoEnergia, btnDormir);
});
btnAjustarTempAr.addEventListener('click', () => {
    RegularArCondicionado();
    atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
})
btnAlterarTemperatura.addEventListener('click', () => {
    alterarTemperatura();
    atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
})
btnDormir.addEventListener('click', () => {
    DORMIR();
})
NovaTemperaturaHTML.addEventListener('change', () => {
    alterarValorTemp();
    atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
})
NovaTemperaturaAr.addEventListener('change', () => {
    alterarValorTempAr();
    atualizarImagemCamera(ListaComodos, cameraIndice, imagemDiv);
})

//#endregion


