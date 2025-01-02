import { Banheiro } from "./Banheiro.js";
import { Garagem } from "./Garagem.js";
import { Cozinha } from "./Cozinha.js";
import { Quarto } from "./Quarto.js";
import { Sala } from "./Sala.js";
// Dados de login
const validUser = "Gabiru";
const validPassword = "RpgDosCrias2025";
// Elementos do login
const loginDiv = document.getElementById('login');
const CasaDiv = document.getElementById('Casa-Automatica');
const InputUsuario = document.getElementById('usuario');
const InputSenha = document.getElementById('password');
const MostrarSenha = document.getElementById('mostrar-senha');
const eyeIcon = document.getElementById('eye-icon');
const loginButton = document.getElementById('login-botão');
const loginError = document.getElementById('login-error');
loginButton.addEventListener('click', () => {
    const usuario = InputUsuario.value;
    const senha = InputSenha.value;
    if (usuario === validUser && senha === validPassword) {
        loginDiv.style.display = 'none';
        CasaDiv.style.display = 'block';
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
const ListaComodos = [
    new Quarto("Quarto1", true, 2.5, 6, 8, 20), //0
    new Sala("Sala de Estar", true, 3.5, 12, 14, 20, false), //1
    new Banheiro("Banheiro1", true, 2.5, 6, 6, 20), //2
    new Garagem("Garagem", true, 3.5, 20, 20, 20, false), //3
    new Cozinha("Cozinha", true, 3.5, 12, 14, 20, false, false) //4
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
const selectCamera = document.getElementById('camera-select');
const btnAlternarLuzes = document.getElementById('alternar-luzes');
const output = document.getElementById('output');
function atualizarOutput() {
    if (cameraIndice >= 0 && cameraIndice < ListaComodos.length) {
        const comodoAtual = ListaComodos[cameraIndice];
        output.innerHTML = `Câmera no ${comodoAtual.nome} <br>Luzes: ${comodoAtual.luzes ? 'Ligadas' : 'Desligadas'}`;
    }
    else {
        output.innerHTML = 'Câmera não posicionada.';
    }
}
selectCamera.addEventListener('change', () => {
    const indice = parseInt(selectCamera.value, 10);
    cameraExibeComodo(indice);
    atualizarOutput();
});
btnAlternarLuzes.addEventListener('click', () => {
    alterarLuzes();
    atualizarOutput();
});
// Inicializa a interface
atualizarOutput();
