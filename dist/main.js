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
const AjustadorDiv = document.getElementById('ajustar-temp-arcondicionado');
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
const btnAlternarArCondicionado = document.getElementById('alternar-ar-quarto');
const btnAjustarTempAr = document.getElementById('ajustar-temp');
const btnAlterarTemperatura = document.getElementById('alterar-temperatura');
const NovaTemperaturaHTML = document.getElementById('nova-temperatura');
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
// Mostrar/ocultar senha com botão de "olhinho"
MostrarSenha.addEventListener('click', () => {
    if (InputSenha.type === 'password') {
        InputSenha.type = 'text';
        eyeIcon.src = "https://img.icons8.com/ios-glyphs/30/000000/invisible.png";
    }
    else {
        InputSenha.type = 'password';
        eyeIcon.src = "https://img.icons8.com/ios-glyphs/30/000000/visible.png";
    }
});
//#endregion
const ListaComodos = [
    new Quarto("Quarto", true, 2.5, 6, 8, false, false), //0
    new Sala("Sala de Estar", true, 3.5, 12, 14, false), //1
    new Banheiro("Banheiro", true, 2.5, 6, 6, 19), //2
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
function alterarArCondicionado() {
    const comodoAtual = ListaComodos[cameraIndice];
    if (comodoAtual instanceof Quarto) {
        comodoAtual.alterarArCondicionado();
        atualizarBotoes();
        atualizarOutput();
    }
    alterarTemperatura();
}
function RegularArCondicionado() {
    const comodoAtual = ListaComodos[cameraIndice];
    if (comodoAtual instanceof Quarto) {
        const tempHTML = document.getElementById('temp-ar');
        const temp = parseInt(tempHTML.value, 10);
        comodoAtual.ajustarTemperaturadoAr(temp);
        atualizarOutput();
    }
    alterarTemperatura();
}
//#endregion
//#region Função para exibir e ocultar botões dependendo do cômodo selecionado
function atualizarBotoes() {
    // Ocultar todos os botões
    CozinhaDiv.style.display = 'none';
    GaragemDiv.style.display = 'none';
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
    temperaturaDiv.innerHTML = `<b>Temperatura Atual:</b> ${TemperaturaUniversal}°C`;
    if (comodoAtual instanceof Quarto && comodoAtual.ArCondionado) {
        temperaturaDiv.innerHTML += `<br><b>Temperatura do Ar-Condicionado:</b> ${comodoAtual.temperaturaArCondicionado}`;
    }
}
selectCamera.addEventListener('change', () => {
    const indice = parseInt(selectCamera.value, 10);
    cameraExibeComodo(indice);
    atualizarBotoes();
    atualizarOutput();
    alterarTemperatura2();
});
//#endregion
//#region Conectar os botões aos seus eventos
btnAlternarLuzes.addEventListener('click', () => {
    alterarLuzes();
    atualizarOutput();
});
btnAlternarFogao.addEventListener('click', () => {
    alterarFogao();
});
btnAlternarGeladeira.addEventListener('click', () => {
    alterarGeladeira();
});
btnAlternarPortao.addEventListener('click', () => {
    alterarPortao();
});
btnAlternarTelevisao.addEventListener('click', () => {
    alterarTelevisao();
});
btnAlternarTelevisaoQuarto.addEventListener('click', () => {
    alterarTelevisaoQuarto();
});
btnAlternarArCondicionado.addEventListener('click', () => {
    alterarArCondicionado();
});
btnAjustarTempAr.addEventListener('click', () => {
    RegularArCondicionado();
});
btnAlterarTemperatura.addEventListener('click', () => {
    alterarTemperatura();
});
// Inicializa a interface
atualizarOutput();
