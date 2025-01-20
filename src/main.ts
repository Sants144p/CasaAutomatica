import { Comodo } from "./Comodos.js";
import { Banheiro } from "./Banheiro.js";
import { Garagem } from "./Garagem.js";
import { Cozinha } from "./Cozinha.js";
import { Quarto } from "./Quarto.js";
import { Sala } from "./Sala.js";

// Dados de login
const validUser = "Viniccius";
const validPassword = "davizao13";

//Temperatura
let TemperaturaAncora : number = 21
let TemperaturaUniversal : number = TemperaturaAncora

//#region Elementos
const loginDiv = document.getElementById('login')! as HTMLDivElement;
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

const InputUsuario = document.getElementById('usuario') as HTMLInputElement;
const InputSenha = document.getElementById('password') as HTMLInputElement;
const MostrarSenha = document.getElementById('mostrar-senha')! as HTMLButtonElement;
const eyeIcon = document.getElementById('eye-icon')! as HTMLImageElement;
const loginButton = document.getElementById('login-botão')! as HTMLButtonElement;
const loginError = document.getElementById('login-error') as HTMLDivElement;

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

//#region código do Login
loginButton.addEventListener('click', () => {
     const usuario = InputUsuario.value;
     const senha = InputSenha.value;

     if (usuario === validUser && senha === validPassword) {
         loginDiv.style.display = 'none';
         CasaDiv.style.display = 'block';
         atualizarBotoes();
         atualizarOutput();
         atualizarImagemCamera();
         Energia();
     
     } else {
         loginError.style.display = 'block';
     }
 });

 //#endregion

//#region Mostrar/ocultar senha com botão de "olhinho"
    MostrarSenha.addEventListener('click', () => {
    if (InputSenha.type === 'password') {

        InputSenha.type = 'text';
        eyeIcon.src = "/Images/Perola_Do_Fim.png";
            
    } else {
        
        InputSenha.type = 'password';
        eyeIcon.src = "/Images/Olho_Do_Fim.png";
            
    }
});
//#endregion

const ListaComodos : Comodo[] = [
    new Quarto("Quarto", true, 2.5, 6, 8, false, false), //0
    new Sala("Sala de Estar", true, 3.5, 12,14, false), //1
    new Banheiro("Banheiro", true, 2.5, 6, 6, false), //2
    new Garagem("Garagem", true, 3.5, 20, 20, false), //3
    new Cozinha("Cozinha", true, 3.5, 12,14, false, false) //4
]

// Variável para rastrear a posição atual da câmera
let cameraIndice = 0;

function cameraExibeComodo(indice: number): void {
    if (indice >= 0 && indice < ListaComodos.length) {
        cameraIndice = indice;
        console.log(ListaComodos[cameraIndice].nome);
    } else {
        console.log("Índice inválido! Por favor, escolha um número válido na lista.");
    }
}

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
        atualizarOutput()
    }else if (comodoAtual instanceof Quarto && comodoAtual.ArCondicionado == false){
        const NovaTemperatura : number = Number(NovaTemperaturaHTML.value)
        TemperaturaAncora = NovaTemperatura
        TemperaturaUniversal = TemperaturaAncora
        atualizarOutput()
    }else{
        const NovaTemperatura : number = Number(NovaTemperaturaHTML.value)
        TemperaturaAncora = NovaTemperatura
        TemperaturaUniversal = TemperaturaAncora
        atualizarOutput()
    }
}

function alterarTemperatura2(){

    const comodoAtual = ListaComodos[cameraIndice];

    if (comodoAtual instanceof Quarto  && comodoAtual.ArCondicionado){
        let tempAr = comodoAtual.temperaturaArCondicionado ?? 21
        TemperaturaUniversal = tempAr
        atualizarOutput()
    }else{
        TemperaturaUniversal = TemperaturaAncora
        atualizarOutput()
    }
}

function alterarTemperatura3(){

    const comodoAtual = ListaComodos[cameraIndice];

    if (comodoAtual instanceof Quarto && comodoAtual.ArCondicionado) {
        let tempAr = comodoAtual.temperaturaArCondicionado ?? 21
        TemperaturaUniversal = tempAr
        atualizarOutput()
    }
    else if (comodoAtual instanceof Quarto && comodoAtual.ArCondicionado == false){
        TemperaturaUniversal = TemperaturaAncora
        atualizarOutput()
    }

}

function alterarFogao() {
    if (cameraIndice === 4) {  // Cômodo Cozinha
        const comodoAtual = ListaComodos[cameraIndice];
        if (comodoAtual instanceof Cozinha) {
            comodoAtual.alterarFogao();
            atualizarOutput();
        }
    }
}

function alterarGeladeira() {
    if (cameraIndice === 4) {  // Cômodo Cozinha
        const comodoAtual = ListaComodos[cameraIndice];
            if (comodoAtual instanceof Cozinha) {
                comodoAtual.alterarGeladeira();
                atualizarOutput();
        }
    }
}

function alterarPortao() {
    const comodoAtual = ListaComodos[cameraIndice];
    if (comodoAtual instanceof Garagem) {
        comodoAtual.alterarPortao();
        atualizarOutput();
    }
}

function alterarTelevisao() {
    const comodoAtual = ListaComodos[cameraIndice];
    if (comodoAtual instanceof Sala) {
        comodoAtual.alterarTV();
        atualizarOutput();
    }
}

function alterarTelevisaoQuarto() {
    const comodoAtual = ListaComodos[cameraIndice];
    if (comodoAtual instanceof Quarto) {
        comodoAtual.alterarTV();
        atualizarOutput();
    }
}

function alterarChuveiro() {
    const comodoAtual = ListaComodos[cameraIndice];
    if (comodoAtual instanceof Banheiro) {
        comodoAtual.alterarChuveiro();
        atualizarOutput();
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
        atualizarBotoes();
        atualizarOutput();
    }
    alterarTemperatura3()
}

function RegularArCondicionado() {
    const comodoAtual = ListaComodos[cameraIndice];
    if (comodoAtual instanceof Quarto) {
        const tempHTML = document.getElementById('temp-ar')! as HTMLInputElement
        const temp = parseInt(tempHTML.value)
        
        comodoAtual.ajustarTemperaturadoAr(temp);
        atualizarOutput();
    }
    alterarTemperatura()
}
function alterarValorTemp() {
    const temp = parseInt(NovaTemperaturaHTML.value)
    ValorTemp.innerHTML = `${temp}°`
    atualizarOutput();
}

function alterarValorTempAr() {
    const temp = parseInt(NovaTemperaturaAr.value)
    ValorTempAr.innerHTML = `${temp}`
    atualizarOutput();
}

function atualizarImagemCamera() {
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



//#endregion

function Energia() {
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

function DORMIR() {
    CasaDiv.style.display = 'none'
    Cubao.style.display = 'block'
}
//#endregion

//#region Função para exibir e ocultar botões dependendo do cômodo selecionado
function atualizarBotoes() {
    // Ocultar todos os botões
    CozinhaDiv.style.display = 'none';
    GaragemDiv.style.display = 'none';
    BanheiroDiv.style.display = 'none';
    SalaDiv.style.display = 'none';
    QuartoDiv.style.display = 'none';
    AjustadorDiv.style.display = 'none';

    // Mostrar botões conforme o cômodo atual
    if (cameraIndice === 4) { // Cozinha
        CozinhaDiv.style.display = 'block';
    } else if (cameraIndice === 3) { // Garagem
        GaragemDiv.style.display = 'block';
    } else if (cameraIndice === 2) { // Banheiro
        BanheiroDiv.style.display = 'block'
    } else if (cameraIndice === 1) { // Sala
        SalaDiv.style.display = 'block';
    } else if (cameraIndice === 0) { // Quarto
        QuartoDiv.style.display = 'block';
    }

    const comodoAtual = ListaComodos[cameraIndice];
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


function atualizarOutput() {
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

selectCamera.addEventListener('change', () => {
    const indice = parseInt(selectCamera.value);
    cameraExibeComodo(indice);
    atualizarBotoes();
    atualizarImagemCamera();
    atualizarOutput();
    alterarTemperatura2();
    Energia();

});

//#endregion

//#region Conectar os botões aos seus eventos

btnAlternarLuzes.addEventListener('click', () => {
    alterarLuzes();
    atualizarImagemCamera();
    atualizarOutput();
    Energia();
});
btnAlternarFogao.addEventListener('click', () => {
    alterarFogao();
    atualizarImagemCamera();
    Energia();
});
btnAlternarGeladeira.addEventListener('click', () => {
    alterarGeladeira();
    atualizarImagemCamera();
    Energia();
});
btnAlternarPortao.addEventListener('click', () => {
    alterarPortao();
    atualizarImagemCamera();
});
btnAlternarChuveiro.addEventListener('click', () => {
    alterarChuveiro();
    atualizarImagemCamera();
    Energia();
})
btnAlternarTelevisao.addEventListener('click', () => {
    alterarTelevisao();
    atualizarImagemCamera();
    Energia();
});
btnAlternarTelevisaoQuarto.addEventListener('click', () => {
    alterarTelevisaoQuarto();
    atualizarImagemCamera();
    Energia();
});
btnAlternarArCondicionado.addEventListener('click', () => {
    alterarArCondicionado();
    atualizarImagemCamera();
    Energia();
});
btnAjustarTempAr.addEventListener('click', () => {
    RegularArCondicionado();
    atualizarImagemCamera();
})
btnAlterarTemperatura.addEventListener('click', () => {
    alterarTemperatura();
    atualizarImagemCamera();
})
btnDormir.addEventListener('click', () => {
    DORMIR();
})
NovaTemperaturaHTML.addEventListener('change', () => {
    alterarValorTemp();
    atualizarImagemCamera();
})
NovaTemperaturaAr.addEventListener('change', () => {
    alterarValorTempAr();
    atualizarImagemCamera();
})

//#endregion

// Inicializa a interface
atualizarOutput();


