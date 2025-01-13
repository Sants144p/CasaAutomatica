import { Banheiro } from "./Banheiro.js";
import { Garagem } from "./Garagem.js";
import { Cozinha } from "./Cozinha.js";
import { Quarto } from "./Quarto.js";
import { Sala } from "./Sala.js";
// Dados de login
const validUser = "user";
const validPassword = "1";
//Temperatura
let TemperaturaAncora = 21;
let TemperaturaUniversal = TemperaturaAncora;
//#region Elementos
const loginDiv = document.getElementById('login');
const CasaDiv = document.getElementById('Casa-Automatica');
const CozinhaDiv = document.getElementById('controle-cozinha');
const QuartoDiv = document.getElementById('controle-quarto');
const GaragemDiv = document.getElementById('controle-garagem');
const SalaDiv = document.getElementById('controle-sala');
const BanheiroDiv = document.getElementById('controle-banheiro');
const AjustadorDiv = document.getElementById('ajustar-temp-arcondicionado');
const HoraDiv = document.getElementById('Hora');
const ValorTemp = document.getElementById('temperatura-range');
const ValorTempAr = document.getElementById('temperatura-range-ar');
const imagemDiv = document.getElementById('ImagemCamera');
const InputUsuario = document.getElementById('usuario');
const InputSenha = document.getElementById('password');
const MostrarSenha = document.getElementById('mostrar-senha');
const eyeIcon = document.getElementById('eye-icon');
const loginButton = document.getElementById('login-botão');
const loginError = document.getElementById('login-error');
const btnAlternarLuzes = document.getElementById('alternar-luzes');
const btnAlternarFogao = document.getElementById('alternar-fogao');
const btnAlternarGeladeira = document.getElementById('alternar-geladeira');
const btnAlternarPortao = document.getElementById('alternar-portao');
const btnAlternarTelevisao = document.getElementById('alternar-televisao');
const btnAlternarTelevisaoQuarto = document.getElementById('alternar-televisao-quarto');
const btnAlternarChuveiro = document.getElementById('alternar-chuveiro');
const btnAlternarArCondicionado = document.getElementById('alternar-ar-quarto');
const btnAjustarTempAr = document.getElementById('ajustar-temp');
const btnAlterarTemperatura = document.getElementById('alterar-temperatura');
const NovaTemperaturaHTML = document.getElementById('nova-temperatura');
const NovaTemperaturaAr = document.getElementById('temp-ar');
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
    }
    else {
        loginError.style.display = 'block';
    }
});
//#endregion
//#region Mostrar/ocultar senha com botão de "olhinho"
MostrarSenha.addEventListener('click', () => {
    if (InputSenha.type === 'password') {
        InputSenha.type = 'text';
        eyeIcon.src = "/Images/Perola_Do_Fim.png";
    }
    else {
        InputSenha.type = 'password';
        eyeIcon.src = "/Images/Olho_Do_Fim.png";
    }
});
//#endregion
const ListaComodos = [
    new Quarto("Quarto", true, 2.5, 6, 8, false, false), //0
    new Sala("Sala de Estar", true, 3.5, 12, 14, false), //1
    new Banheiro("Banheiro", true, 2.5, 6, 6, false), //2
    new Garagem("Garagem", true, 3.5, 20, 20, false), //3
    new Cozinha("Cozinha", true, 3.5, 12, 14, false, false) //4
];
// Variável para rastrear a posição atual da câmera
let cameraIndice = 0;
function cameraExibeComodo(indice) {
    if (indice >= 0 && indice < ListaComodos.length) {
        cameraIndice = indice;
        console.log(ListaComodos[cameraIndice].nome);
    }
    else {
        console.log("Índice inválido! Por favor, escolha um número válido na lista.");
    }
}
//#region Funções para alterar as booleanas
function alterarLuzes() {
    if (cameraIndice >= 0 && cameraIndice < ListaComodos.length) {
        ListaComodos[cameraIndice].Trocarluzes();
    }
    else {
        console.log("A câmera não está posicionada em um cômodo válido.");
    }
}
function alterarTemperatura() {
    var _a;
    const comodoAtual = ListaComodos[cameraIndice];
    if (comodoAtual instanceof Quarto && comodoAtual.ArCondionado) {
        let tempAr = (_a = comodoAtual.temperaturaArCondicionado) !== null && _a !== void 0 ? _a : 21;
        TemperaturaUniversal = tempAr;
        atualizarOutput();
    }
    else if (comodoAtual instanceof Quarto && comodoAtual.ArCondionado == false) {
        const NovaTemperatura = Number(NovaTemperaturaHTML.value);
        TemperaturaAncora = NovaTemperatura;
        TemperaturaUniversal = TemperaturaAncora;
        atualizarOutput();
    }
    else {
        const NovaTemperatura = Number(NovaTemperaturaHTML.value);
        TemperaturaAncora = NovaTemperatura;
        TemperaturaUniversal = TemperaturaAncora;
        atualizarOutput();
    }
}
function alterarTemperatura2() {
    var _a;
    const comodoAtual = ListaComodos[cameraIndice];
    if (comodoAtual instanceof Quarto && comodoAtual.ArCondionado) {
        let tempAr = (_a = comodoAtual.temperaturaArCondicionado) !== null && _a !== void 0 ? _a : 21;
        TemperaturaUniversal = tempAr;
        atualizarOutput();
    }
    else {
        TemperaturaUniversal = TemperaturaAncora;
        atualizarOutput();
    }
}
function alterarTemperatura3() {
    var _a;
    const comodoAtual = ListaComodos[cameraIndice];
    if (comodoAtual instanceof Quarto && comodoAtual.ArCondionado) {
        let tempAr = (_a = comodoAtual.temperaturaArCondicionado) !== null && _a !== void 0 ? _a : 21;
        TemperaturaUniversal = tempAr;
        atualizarOutput();
    }
    else if (comodoAtual instanceof Quarto && comodoAtual.ArCondionado == false) {
        TemperaturaUniversal = TemperaturaAncora;
        atualizarOutput();
    }
}
function alterarFogao() {
    if (cameraIndice === 4) { // Cômodo Cozinha
        const comodoAtual = ListaComodos[cameraIndice];
        if (comodoAtual instanceof Cozinha) {
            comodoAtual.alterarFogao();
            atualizarOutput();
        }
    }
}
function alterarGeladeira() {
    if (cameraIndice === 4) { // Cômodo Cozinha
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
        atualizarBotoes();
        atualizarOutput();
    }
    alterarTemperatura3();
}
function RegularArCondicionado() {
    const comodoAtual = ListaComodos[cameraIndice];
    if (comodoAtual instanceof Quarto) {
        const tempHTML = document.getElementById('temp-ar');
        const temp = parseInt(tempHTML.value);
        comodoAtual.ajustarTemperaturadoAr(temp);
        atualizarOutput();
    }
    alterarTemperatura();
}
function alterarValorTemp() {
    const temp = parseInt(NovaTemperaturaHTML.value);
    ValorTemp.innerHTML = `${temp}°`;
    atualizarOutput();
}
function alterarValorTempAr() {
    const temp = parseInt(NovaTemperaturaAr.value);
    ValorTempAr.innerHTML = `${temp}`;
    atualizarOutput();
}
function atualizarImagemCamera() {
    const comodoAtual = ListaComodos[cameraIndice];
    let imagemPath = "";
    if (comodoAtual instanceof Quarto) {
        if (comodoAtual.luzes && comodoAtual.televisao && comodoAtual.ArCondionado) {
            imagemPath = "/Images/Quarto/Quarto (Luz, TV e Ar).jpg"; //Tudo on
        }
        else if (!comodoAtual.luzes && !comodoAtual.televisao && !comodoAtual.ArCondionado) {
            imagemPath = "/Images/Quarto/Quarto (Nada).jpg"; //Tudo off
        }
        else if (comodoAtual.luzes && !comodoAtual.televisao && !comodoAtual.ArCondionado) {
            imagemPath = "/Images/Quarto/Quarto (Luz).jpg"; //só Luz on
        }
        else if (!comodoAtual.luzes && comodoAtual.televisao && !comodoAtual.ArCondionado) {
            imagemPath = "/Images/Quarto/Quarto (TV).jpg"; //só v2 on
        }
        else if (!comodoAtual.luzes && !comodoAtual.televisao && comodoAtual.ArCondionado) {
            imagemPath = "/Images/Quarto/Quarto (Ar).jpg"; //só v3 on
        }
        else if (comodoAtual.luzes && comodoAtual.televisao && !comodoAtual.ArCondionado) {
            imagemPath = "/Images/Quarto/Quarto (Luz e TV).jpg"; //luz e v2 on
        }
        else if (comodoAtual.luzes && !comodoAtual.televisao && comodoAtual.ArCondionado) {
            imagemPath = "/Images/Quarto/Quarto (Luz e Ar).jpg"; //luz e v3 on
        }
        else if (!comodoAtual.luzes && comodoAtual.televisao && comodoAtual.ArCondionado) {
            imagemPath = "/Images/Quarto/Quarto (TV e Ar).jpg"; //Só luz off
        }
    }
    if (comodoAtual instanceof Sala) {
        if (comodoAtual.luzes && comodoAtual.televisao) {
            imagemPath = "/Images/Sala/Sala (Luz e TV).jpg"; //Tudo on
        }
        else if (!comodoAtual.luzes && !comodoAtual.televisao) {
            imagemPath = "/Images/Sala/Sala (Nada).jpg"; //Tudo off
        }
        else if (comodoAtual.luzes && !comodoAtual.televisao) {
            imagemPath = "/Images/Sala/Sala (Luz).jpg"; //Só luz on
        }
        else if (!comodoAtual.luzes && comodoAtual.televisao) {
            imagemPath = "/Images/Sala/Sala (TV).jpg"; //Só luz off
        }
    }
    if (comodoAtual instanceof Banheiro) {
        if (comodoAtual.luzes && comodoAtual.chuveiro) {
            imagemPath = "/Images/Banheiro/Banheiro (Luz e Chuveiro).jpg"; //Tudo on
        }
        else if (!comodoAtual.luzes && !comodoAtual.chuveiro) {
            imagemPath = "/Images/Banheiro/Banheiro (Nada).jpg"; //Tudo off
        }
        else if (comodoAtual.luzes && !comodoAtual.chuveiro) {
            imagemPath = "/Images/Banheiro/Banheiro (Luz).jpg"; //Só luz on
        }
        else if (!comodoAtual.luzes && comodoAtual.chuveiro) {
            imagemPath = "/Images/Banheiro/Banheiro (Chuveiro).jpg"; //Só luz off
        }
    }
    if (comodoAtual instanceof Garagem) {
        if (comodoAtual.luzes && comodoAtual.portao) {
            imagemPath = "/Images/Garagem/Garagem (Luz e Portão).jpg"; //Tudo on
        }
        else if (!comodoAtual.luzes && !comodoAtual.portao) {
            imagemPath = "/Images/Garagem/Garagem (Nada).jpg"; //Tudo off
        }
        else if (comodoAtual.luzes && !comodoAtual.portao) {
            imagemPath = "/Images/Garagem/Garagem (Luz).jpg"; //Só luz on
        }
        else if (!comodoAtual.luzes && comodoAtual.portao) {
            imagemPath = "/Images/Garagem/Garagem (Portão).jpg"; //Só luz off
        }
    }
    if (comodoAtual instanceof Cozinha) {
        if (comodoAtual.luzes && comodoAtual.fogão && comodoAtual.geladeira) {
            imagemPath = "/Images/Cozinha/Cozinha (Luz, Fogão e Geladeira).jpg"; //Tudo on
        }
        else if (!comodoAtual.luzes && !comodoAtual.fogão && !comodoAtual.geladeira) {
            imagemPath = "/Images/Cozinha/Cozinha (Nada).jpg"; //Tudo off
        }
        else if (comodoAtual.luzes && !comodoAtual.fogão && !comodoAtual.geladeira) {
            imagemPath = "/Images/Cozinha/Cozinha (Luz).jpg"; //só Luz on
        }
        else if (!comodoAtual.luzes && comodoAtual.fogão && !comodoAtual.geladeira) {
            imagemPath = "/Images/Cozinha/Cozinha (Fogão).jpg"; //só v2 on
        }
        else if (!comodoAtual.luzes && !comodoAtual.fogão && comodoAtual.geladeira) {
            imagemPath = "/Images/Cozinha/Cozinha (Geladeira).jpg"; //só v3 on
        }
        else if (comodoAtual.luzes && comodoAtual.fogão && !comodoAtual.geladeira) {
            imagemPath = "/Images/Cozinha/Cozinha (Luz e Fogão).jpg"; //luz e v2 on
        }
        else if (comodoAtual.luzes && !comodoAtual.fogão && comodoAtual.geladeira) {
            imagemPath = "/Images/Cozinha/Cozinha (Luz e Geladeira).jpg"; //luz e v3 on
        }
        else if (!comodoAtual.luzes && comodoAtual.fogão && comodoAtual.geladeira) {
            imagemPath = "/Images/Cozinha/Cozinha (Fogão e Geladeira).jpg"; //Só luz off
        }
    }
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
    }
    else if (cameraIndice === 3) { // Garagem
        GaragemDiv.style.display = 'block';
    }
    else if (cameraIndice === 2) { // Banheiro
        BanheiroDiv.style.display = 'block';
    }
    else if (cameraIndice === 1) { // Sala
        SalaDiv.style.display = 'block';
    }
    else if (cameraIndice === 0) { // Quarto
        QuartoDiv.style.display = 'block';
    }
    const comodoAtual = ListaComodos[cameraIndice];
    if (comodoAtual instanceof Quarto) {
        if (comodoAtual.ArCondionado == true) {
            AjustadorDiv.style.display = 'block';
        }
        else {
            AjustadorDiv.style.display = 'none';
        }
    }
}
//#endregion
//#region Horário Atualizado
function atualizarHora() {
    const Agora = new Date();
    const horas = ('0' + Agora.getHours()).slice(-2);
    const minutos = ('0' + Agora.getMinutes()).slice(-2);
    const segundos = ('0' + Agora.getSeconds()).slice(-2);
    HoraDiv.textContent = `${horas}:${minutos}:${segundos}`;
}
setInterval(atualizarHora, 1000);
atualizarHora();
//#endregion
//#region Cameras
const selectCamera = document.getElementById('camera-select');
function atualizarOutput() {
    const comodoAtual = ListaComodos[cameraIndice];
    let status = `${comodoAtual.nome}: Luzes estão ${comodoAtual.luzes ? 'ligadas' : 'desligadas'}.`;
    const output = document.getElementById('output');
    // Adicionar status das novas variáveis (garantir que acessamos corretamente os atributos específicos)
    if (comodoAtual instanceof Cozinha) {
        output.innerHTML = `${status} <br>
        Fogão: ${comodoAtual.fogão ? 'Ligado' : 'Desligado'}.<br>
        Geladeira: ${comodoAtual.geladeira ? 'Ligada' : 'Desligada'}.`;
    }
    else if (comodoAtual instanceof Garagem) {
        output.innerHTML = `${status} <br> 
        Portão: ${comodoAtual.portao ? 'Aberto' : 'Fechado'}.`;
    }
    else if (comodoAtual instanceof Banheiro) {
        output.innerHTML = `${status} <br>
        Chuveiro: ${comodoAtual.chuveiro ? 'Ligado' : 'Desligado'}.`;
    }
    else if (comodoAtual instanceof Sala) {
        output.innerHTML = `${status} <br>
        Televisão: ${comodoAtual.televisao ? 'Ligada' : 'Desligada'}.`;
    }
    else if (comodoAtual instanceof Quarto) {
        output.innerHTML = `${status} <br>
        Televisão: ${comodoAtual.televisao ? 'Ligada' : 'Desligada'}.<br>
        Ar-Condicionado: ${comodoAtual.ArCondionado ? 'Ligado' : 'Desligado'}`;
    }
    const temperaturaDiv = document.getElementById('temperatura-atual');
    temperaturaDiv.innerHTML = `<b>Temperatura do Ambiente:</b> ${TemperaturaUniversal}°C`;
    if (comodoAtual instanceof Quarto && comodoAtual.ArCondionado) {
        temperaturaDiv.innerHTML += `<br><b>Temperatura do Ar-Condicionado:</b> ${comodoAtual.temperaturaArCondicionado}°C`;
    }
}
selectCamera.addEventListener('change', () => {
    const indice = parseInt(selectCamera.value);
    cameraExibeComodo(indice);
    atualizarBotoes();
    atualizarImagemCamera();
    atualizarOutput();
    alterarTemperatura2();
});
//#endregion
//#region Conectar os botões aos seus eventos
btnAlternarLuzes.addEventListener('click', () => {
    alterarLuzes();
    atualizarImagemCamera();
    atualizarOutput();
});
btnAlternarFogao.addEventListener('click', () => {
    alterarFogao();
    atualizarImagemCamera();
});
btnAlternarGeladeira.addEventListener('click', () => {
    alterarGeladeira();
    atualizarImagemCamera();
});
btnAlternarPortao.addEventListener('click', () => {
    alterarPortao();
    atualizarImagemCamera();
});
btnAlternarChuveiro.addEventListener('click', () => {
    alterarChuveiro();
    atualizarImagemCamera();
});
btnAlternarTelevisao.addEventListener('click', () => {
    alterarTelevisao();
    atualizarImagemCamera();
});
btnAlternarTelevisaoQuarto.addEventListener('click', () => {
    alterarTelevisaoQuarto();
    atualizarImagemCamera();
});
btnAlternarArCondicionado.addEventListener('click', () => {
    alterarArCondicionado();
    atualizarImagemCamera();
});
btnAjustarTempAr.addEventListener('click', () => {
    RegularArCondicionado();
    atualizarImagemCamera();
});
btnAlterarTemperatura.addEventListener('click', () => {
    alterarTemperatura();
    atualizarImagemCamera();
});
NovaTemperaturaHTML.addEventListener('change', () => {
    alterarValorTemp();
    atualizarImagemCamera();
});
NovaTemperaturaAr.addEventListener('change', () => {
    alterarValorTempAr();
    atualizarImagemCamera();
});
//#endregion
// Inicializa a interface
atualizarOutput();
