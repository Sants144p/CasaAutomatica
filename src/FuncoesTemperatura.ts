import { Comodo } from "./Comodos.js";
import { Banheiro } from "./Banheiro.js";
import { Garagem } from "./Garagem.js";
import { Cozinha } from "./Cozinha.js";
import { Quarto } from "./Quarto.js";
import { Sala } from "./Sala.js";
import { atualizarOutput, atualizarBotoes } from "./FuncoesVisuais.js";
export function alterarTemperatura(cameraIndice : number, ListaComodos : Comodo[], TemperaturaAncora : number,
    TemperaturaUniversal : number, NovaTemperaturaHTML : HTMLInputElement
) {

    const comodoAtual = ListaComodos[cameraIndice];

    if (comodoAtual instanceof Quarto && comodoAtual.ArCondicionado) {
        let tempAr = comodoAtual.temperaturaArCondicionado ?? TemperaturaUniversal
        TemperaturaUniversal = tempAr
        localStorage.setItem('TemperaturaUniversal', `${tempAr}`)
        atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal)
    }else if (comodoAtual instanceof Quarto && comodoAtual.ArCondicionado == false){
        const NovaTemperatura : number = Number(NovaTemperaturaHTML.value)
        TemperaturaAncora = NovaTemperatura
        localStorage.setItem('TemperaturaAncora', `${NovaTemperatura}`)
        localStorage.setItem('TemperaturaUniversal', `${TemperaturaAncora}`)
        TemperaturaUniversal = TemperaturaAncora
        atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal)
    }else{
        const NovaTemperatura : number = Number(NovaTemperaturaHTML.value)
        TemperaturaAncora = NovaTemperatura
        TemperaturaUniversal = TemperaturaAncora
        atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal)
    }
}

export function alterarTemperatura2(cameraIndice : number, ListaComodos : Comodo[], TemperaturaAncora : number,
    TemperaturaUniversal : number){

    const comodoAtual = ListaComodos[cameraIndice];

    if (comodoAtual instanceof Quarto  && comodoAtual.ArCondicionado){
        let tempAr = comodoAtual.temperaturaArCondicionado ?? TemperaturaUniversal
        TemperaturaUniversal = tempAr
        atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal)
    }else{
        TemperaturaUniversal = TemperaturaAncora
        atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal)
    }
}

export function alterarTemperatura3(cameraIndice : number, ListaComodos : Comodo[], TemperaturaAncora : number,
    TemperaturaUniversal : number){

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

export function alterarArCondicionado(cameraIndice : number, ListaComodos : Comodo[], TemperaturaAncora : number, 
    TemperaturaUniversal : number, Display_temp : HTMLDivElement, CozinhaDiv : HTMLDivElement, GaragemDiv : HTMLDivElement,
    BanheiroDiv : HTMLDivElement, SalaDiv : HTMLDivElement, QuartoDiv : HTMLDivElement, AjustadorDiv : HTMLDivElement
) {
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
    alterarTemperatura3(cameraIndice, ListaComodos, TemperaturaAncora, TemperaturaUniversal)
}

export function RegularArCondicionado(cameraIndice : number, ListaComodos : Comodo[], TemperaturaAncora : number, TemperaturaUniversal : number, NovaTemperaturaHTML : HTMLInputElement) {
    const comodoAtual = ListaComodos[cameraIndice];
    if (comodoAtual instanceof Quarto) {
        const tempHTML = document.getElementById('temp-ar')! as HTMLInputElement
        const temp = parseInt(tempHTML.value)
        
        comodoAtual.ajustarTemperaturadoAr(temp);
        atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal);
    }
    alterarTemperatura(cameraIndice, ListaComodos, TemperaturaAncora, TemperaturaUniversal, NovaTemperaturaHTML)
}
export function alterarValorTemp(cameraIndice : number, ListaComodos : Comodo[], TemperaturaUniversal : number,
    NovaTemperaturaHTML : HTMLInputElement, ValorTemp : HTMLDivElement
) {
    const temp = parseInt(NovaTemperaturaHTML.value)
    ValorTemp.innerHTML = `${temp}°`
    console.log('quebrei o sistema porra')
    atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal);
}

export function alterarValorTempAr(cameraIndice : number, ListaComodos : Comodo[], TemperaturaUniversal : number,
    NovaTemperaturaAr : HTMLInputElement, ValorTempAr : HTMLDivElement) {
    const temp = parseInt(NovaTemperaturaAr.value)
    ValorTempAr.innerHTML = `${temp}`
    atualizarOutput(ListaComodos, cameraIndice, TemperaturaUniversal);
}
