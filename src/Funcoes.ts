import { Comodo } from "./Comodos.js";
import { Banheiro } from "./Banheiro.js";
import { Garagem } from "./Garagem.js";
import { Cozinha } from "./Cozinha.js";
import { Quarto } from "./Quarto.js";
import { Sala } from "./Sala.js";


export function cameraExibeComodo(indice: number, ListaComodos : Comodo[], cameraIndice : number) {
    cameraIndice = indice
    if (indice >= 0 && indice < ListaComodos.length) {
        console.log(ListaComodos[cameraIndice].nome);
        console.log(cameraIndice)
        return cameraIndice;
    } else {
        console.log("Índice inválido! Por favor, escolha um número válido na lista.");
        return indice;
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

export function atualizarImagemCamera(ListaComodos : Comodo[], cameraIndice : number, imagemDiv : HTMLDivElement) {
    const comodoAtual = ListaComodos[cameraIndice];
    let imagemPath = "";

    if (comodoAtual instanceof Quarto) {
        if (comodoAtual.luzes && comodoAtual.televisao && comodoAtual.ArCondicionado){
            imagemPath = "/Images/Quarto/Quarto (Tudo).png" //Tudo on
        }
        else if (!comodoAtual.luzes && !comodoAtual.televisao && !comodoAtual.ArCondicionado){
            imagemPath = "/Images/Quarto/Quarto (Nada).png" //Tudo off
        }
        else if (comodoAtual.luzes && !comodoAtual.televisao && !comodoAtual.ArCondicionado){
            imagemPath = "/Images/Quarto/Quarto (Luz).png" //só Luz on
        }
        else if (!comodoAtual.luzes && comodoAtual.televisao && !comodoAtual.ArCondicionado){
            imagemPath = "/Images/Quarto/Quarto (TV).png" //só v2 on
        }
        else if (!comodoAtual.luzes && !comodoAtual.televisao && comodoAtual.ArCondicionado){
            imagemPath = "/Images/Quarto/Quarto (Ar).png" //só v3 on
        }
        else if (comodoAtual.luzes && comodoAtual.televisao && !comodoAtual.ArCondicionado){
            imagemPath = "/Images/Quarto/Quarto (Luz e TV).png" //luz e v2 on
        }
        else if (comodoAtual.luzes && !comodoAtual.televisao && comodoAtual.ArCondicionado){
            imagemPath = "/Images/Quarto/Quarto (Luz e Ar).png" //luz e v3 on
        }
        else if (!comodoAtual.luzes && comodoAtual.televisao && comodoAtual.ArCondicionado){
            imagemPath = "/Images/Quarto/Quarto (TV e Ar).png" //Só luz off
        }

    }

    if (comodoAtual instanceof Sala) {
        
        if (comodoAtual.luzes && comodoAtual.televisao){
            imagemPath = "/Images/Sala/Sala (Tudo).png" //Tudo on
        }
        else if (!comodoAtual.luzes && !comodoAtual.televisao){
            imagemPath = "/Images/Sala/Sala (Nada).png" //Tudo off
        }
        else if (comodoAtual.luzes && !comodoAtual.televisao){
            imagemPath = "/Images/Sala/Sala (Luz).png" //Só luz on
        }
        else if (!comodoAtual.luzes && comodoAtual.televisao){
            imagemPath = "/Images/Sala/Sala (TV).png" //Só luz off
        }
    }

    if (comodoAtual instanceof Banheiro) {
        
        if (comodoAtual.luzes && comodoAtual.chuveiro){
            imagemPath = "/Images/Banheiro/Banheiro (Tudo).png" //Tudo on V
        }
        else if (!comodoAtual.luzes && !comodoAtual.chuveiro){
            imagemPath = "/Images/Banheiro/Banheiro (Nada).png" //Tudo off
        }
        else if (comodoAtual.luzes && !comodoAtual.chuveiro){
            imagemPath = "/Images/Banheiro/Banheiro (Luz).png" //Só luz on V
        }
        else if (!comodoAtual.luzes && comodoAtual.chuveiro){
            imagemPath = "/Images/Banheiro/Banheiro (Chuveiro).png" //Só luz off
        }

    }

    if (comodoAtual instanceof Garagem) {
        
        if (comodoAtual.luzes && comodoAtual.portao){
            imagemPath = "/Images/Garagem/Garagem (Tudo).png" //Tudo on
        }
        else if (!comodoAtual.luzes && !comodoAtual.portao){
            imagemPath = "/Images/Garagem/Garagem (Nada).png" //Tudo off
        }
        else if (comodoAtual.luzes && !comodoAtual.portao){
            imagemPath = "/Images/Garagem/Garagem (Luz).png" //Só luz on
        }
        else if (!comodoAtual.luzes && comodoAtual.portao){
            imagemPath = "/Images/Garagem/Garagem (Portão).png" //Só luz off
        }

    }

    if (comodoAtual instanceof Cozinha) {
        
        if (comodoAtual.luzes && comodoAtual.fogão && comodoAtual.geladeira){
            imagemPath = "/Images/Cozinha/Cozinha (Tudo).png" //Tudo on
        }
        else if (!comodoAtual.luzes && !comodoAtual.fogão && !comodoAtual.geladeira){
            imagemPath = "/Images/Cozinha/Cozinha (Nada).png" //Tudo off
        }
        else if (comodoAtual.luzes && !comodoAtual.fogão && !comodoAtual.geladeira){
            imagemPath = "/Images/Cozinha/Cozinha (Luz).png" //só Luz on
        }
        else if (!comodoAtual.luzes && comodoAtual.fogão && !comodoAtual.geladeira){
            imagemPath = "/Images/Cozinha/Cozinha (Fogão).png" //só v2 on
        }
        else if (!comodoAtual.luzes && !comodoAtual.fogão && comodoAtual.geladeira){
            imagemPath = "/Images/Cozinha/Cozinha (Geladeira).png" //só v3 on
        }
        else if (comodoAtual.luzes && comodoAtual.fogão && !comodoAtual.geladeira){
            imagemPath = "/Images/Cozinha/Cozinha (Luz e Fogão).png" //luz e v2 on
        }
        else if (comodoAtual.luzes && !comodoAtual.fogão && comodoAtual.geladeira){
            imagemPath = "/Images/Cozinha/Cozinha (Luz e Geladeira).png" //luz e v3 on
        }
        else if (!comodoAtual.luzes && comodoAtual.fogão && comodoAtual.geladeira){
            imagemPath = "/Images/Cozinha/Cozinha (Fogão e Geladeira).png" //Só luz off
        }
    }
    // Atualiza a imagem na div
    imagemDiv.innerHTML = `<img src="${imagemPath}" width="1400" height="800"></img">`;
}

export function atualizarOutput(ListaComodos : Comodo[], cameraIndice : number, TemperaturaUniversal : number) {
    const comodoAtual = ListaComodos[cameraIndice];
    let status = `${comodoAtual.nome}: Luzes estão ${comodoAtual.luzes ? 'ligadas' : 'desligadas'}.`;
    const output = document.getElementById('output')! as HTMLDivElement;

    // Adicionar status das novas variáveis (garantir que acessamos corretamente os atributos específicos)
    if (comodoAtual instanceof Cozinha) {
        output.innerHTML = `${status} <br>
        Fogão: ${comodoAtual.fogão ? 'Ligado' : 'Desligado'}.<br>
        Geladeira: ${comodoAtual.geladeira ? 'Ligada' : 'Desligada'}.`
    } else if (comodoAtual instanceof Garagem) {
        output.innerHTML = `${status} <br> 
        Portão: ${comodoAtual.portao ? 'Aberto' : 'Fechado'}.`;
    } else if (comodoAtual instanceof Banheiro) {
        output.innerHTML = `${status} <br>
        Chuveiro: ${comodoAtual.chuveiro ? 'Ligado' : 'Desligado'}.`;
    } else if (comodoAtual instanceof Sala) {
        output.innerHTML = `${status} <br>
        Televisão: ${comodoAtual.televisao ? 'Ligada' : 'Desligada'}.`;
    } else if (comodoAtual instanceof Quarto) {
        output.innerHTML = `${status} <br>
        Televisão: ${comodoAtual.televisao ? 'Ligada' : 'Desligada'}.<br>
        Ar-Condicionado: ${comodoAtual.ArCondicionado ? 'Ligado' : 'Desligado'}`
        
    }
    const temperaturaDiv = document.getElementById('temperatura-atual') as HTMLDivElement;
    temperaturaDiv.innerHTML = `${TemperaturaUniversal}°C`; 

    if (comodoAtual instanceof Quarto && comodoAtual.ArCondicionado){
        temperaturaDiv.innerHTML = `${comodoAtual.temperaturaArCondicionado}°C`
    }
}

export function Energia(ListaComodos : Comodo[], ConsumoEnergia : HTMLDivElement, btnDormir : HTMLButtonElement) {
    const quarto = ListaComodos[0];
    const sala = ListaComodos[1];
    const banheiro = ListaComodos[2];
    const garagem = ListaComodos[3];
    const cozinha = ListaComodos[4];
    let ConsumoTotal = 0;
    const ConsumoLuzes = 1;
    const ConsumoFogao = 2700;
    const ConsumoGeladeiraAberta = 104;
    const ConsumoGeladeiraFechada = 101;
    const ConsumoArCondicionado = 101;
    const ConsumoTV = 160;
    const ConsumoChuveiro = 6800;

    if (quarto instanceof Quarto) {
        if (quarto.luzes && quarto.televisao && quarto.ArCondicionado){
            ConsumoTotal += ConsumoLuzes + ConsumoTV + ConsumoArCondicionado  //Tudo on
        }
        else if (quarto.luzes && !quarto.televisao && !quarto.ArCondicionado){
            ConsumoTotal += ConsumoLuzes//só Luz on
        }
        else if (!quarto.luzes && quarto.televisao && !quarto.ArCondicionado){
            ConsumoTotal += ConsumoTV //só v2 on
        }
        else if (!quarto.luzes && !quarto.televisao && quarto.ArCondicionado){
            ConsumoTotal += ConsumoArCondicionado //só v3 on
        }
        else if (quarto.luzes && quarto.televisao && !quarto.ArCondicionado){
            ConsumoTotal += ConsumoLuzes + ConsumoTV //luz e v2 on
        }
        else if (quarto.luzes && !quarto.televisao && quarto.ArCondicionado){
            ConsumoTotal += ConsumoLuzes + ConsumoArCondicionado //luz e v3 on
        }
        else if (!quarto.luzes && quarto.televisao && quarto.ArCondicionado){
            ConsumoTotal += ConsumoTV + ConsumoArCondicionado //Só luz off
        }
    }

    if (sala instanceof Sala) {
        
        if (sala.luzes && sala.televisao){
            ConsumoTotal += ConsumoLuzes + ConsumoTV //Tudo on
        }
        else if (sala.luzes && !sala.televisao){
            ConsumoTotal += ConsumoLuzes //Só luz on
        }
        else if (!sala.luzes && sala.televisao){
            ConsumoTotal += ConsumoTV //Só luz off
        }
    }

    if (banheiro instanceof Banheiro) {
        
        if (banheiro.luzes && banheiro.chuveiro){
            ConsumoTotal += ConsumoLuzes + ConsumoChuveiro //Tudo on V
        }
        else if (banheiro.luzes && !banheiro.chuveiro){
            ConsumoTotal += ConsumoLuzes //Só luz on V
        }
        else if (!banheiro.luzes && banheiro.chuveiro){
            ConsumoTotal += ConsumoChuveiro //Só luz off
        }

    }

    if (garagem instanceof Garagem) {
        
        if (garagem.luzes && garagem.portao){
            ConsumoTotal += ConsumoLuzes //Tudo on
        }
        else if (garagem.luzes && !garagem.portao){
            ConsumoTotal += ConsumoLuzes //Só luz on
        }

    }

    if (cozinha instanceof Cozinha) {
        
        if (cozinha.luzes && cozinha.fogão && cozinha.geladeira){
            ConsumoTotal += ConsumoLuzes + ConsumoFogao + ConsumoGeladeiraAberta //Tudo on
        }
        else if(!cozinha.luzes && !cozinha.fogão && !cozinha.geladeira) {
            ConsumoTotal += ConsumoGeladeiraFechada
        }
        else if (cozinha.luzes && !cozinha.fogão && !cozinha.geladeira){
            ConsumoTotal += ConsumoLuzes + ConsumoGeladeiraFechada //só Luz on
        }
        else if (!cozinha.luzes && cozinha.fogão && !cozinha.geladeira){
            ConsumoTotal += ConsumoFogao + ConsumoGeladeiraFechada //só v2 on
        }
        else if (!cozinha.luzes && !cozinha.fogão && cozinha.geladeira){
            ConsumoTotal += ConsumoGeladeiraAberta //só v3 on
        }
        else if (cozinha.luzes && cozinha.fogão && !cozinha.geladeira){
            ConsumoTotal += ConsumoLuzes + ConsumoFogao + ConsumoGeladeiraFechada //luz e v2 on
        }
        else if (cozinha.luzes && !cozinha.fogão && cozinha.geladeira){
            ConsumoTotal += ConsumoLuzes + ConsumoGeladeiraAberta //luz e v3 on
        }
        else if (!cozinha.luzes && cozinha.fogão && cozinha.geladeira){
            ConsumoTotal += ConsumoFogao + ConsumoGeladeiraAberta //Só luz off
        }
    }
    ConsumoEnergia.innerHTML = `${ConsumoTotal}W`

    if (ConsumoTotal == 101) {
        btnDormir.style.display = 'block'
    }
    else {
        btnDormir.style.display = 'none'
    }
}