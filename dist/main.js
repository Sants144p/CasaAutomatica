import { Banheiro } from "./Banheiro.js";
import { Garagem } from "./Garagem.js";
import { Cozinha } from "./Cozinha.js";
import { Quarto } from "./Quarto.js";
import { Sala } from "./Sala.js";
// Dados de login
const validUser = "user";
const validPassword = "1";
//#region Elementos
const loginDiv = document.getElementById('login');
const CasaDiv = document.getElementById('Casa-Automatica');
const CozinhaDiv = document.getElementById('controle-cozinha');
const QuartoDiv = document.getElementById('controle-quarto');
const GaragemDiv = document.getElementById('controle-garagem');
const SalaDiv = document.getElementById('controle-sala');
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
const btnAlternarVentilador = document.getElementById('alternar-ventilador-quarto');
const btnAlterarTemperatura = document.getElementById('alterar-temperatura');
const nova_temperatura = document.getElementById('nova-temperatura');
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
    new Quarto("Quarto", true, 2.5, 6, 8, 20, false, false), //0
    new Sala("Sala de Estar", true, 3.5, 12, 14, 20, false), //1
    new Banheiro("Banheiro", true, 2.5, 6, 6, 19), //2
    new Garagem("Garagem", true, 3.5, 20, 20, 21, false), //3
    new Cozinha("Cozinha", true, 3.5, 12, 14, 22, false, false) //4
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
    if (cameraIndice >= 0 && cameraIndice < ListaComodos.length) {
        ListaComodos[cameraIndice].alterarTemperatura(nova_temperatura.value);
        atualizarOutput();
    }
    else {
        console.log("A câmera não está posicionada em um cômodo válido.");
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
function alterarVentilador() {
    const comodoAtual = ListaComodos[cameraIndice];
    if (comodoAtual instanceof Quarto) {
        comodoAtual.alterarVentilador();
        atualizarOutput();
    }
}
//#endregion
//#region Função para exibir e ocultar botões dependendo do cômodo selecionado
function atualizarBotoes() {
    // Ocultar todos os botões
    CozinhaDiv.style.display = 'none';
    GaragemDiv.style.display = 'none';
    SalaDiv.style.display = 'none';
    QuartoDiv.style.display = 'none';
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
        Ventilador: ${comodoAtual.ventilador ? 'Ligado' : 'Desligado'}`;
    }
    const temperaturaDiv = document.getElementById('temperatura-atual');
    temperaturaDiv.innerHTML = `<b>Temperatura Atual:</b> ${comodoAtual._temperatura}°C`;
}
selectCamera.addEventListener('change', () => {
    const indice = parseInt(selectCamera.value, 10);
    cameraExibeComodo(indice);
    atualizarBotoes();
    atualizarOutput();
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
btnAlternarVentilador.addEventListener('click', () => {
    alterarVentilador();
});
btnAlterarTemperatura.addEventListener('click', () => {
    alterarTemperatura();
});
// Inicializa a interface
atualizarOutput();
