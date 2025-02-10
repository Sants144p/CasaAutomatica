"use strict";
// Dados de login
const validUser = "Viniccius";
const validPassword = "davizao13";
const InputUsuario = document.getElementById('usuario');
const InputSenha = document.getElementById('password');
const MostrarSenha = document.getElementById('mostrar-senha');
const eyeIcon = document.getElementById('eye-icon');
const loginButton = document.getElementById('login-botão');
const loginError = document.getElementById('login-error');
const IrCadastro = document.getElementById('pagina-cadastro');
//#region código do Login
loginButton.addEventListener('click', () => {
    const usuario = InputUsuario.value;
    const senha = InputSenha.value;
    if (usuario === validUser && senha === validPassword) {
        window.location.href = 'index.html';
    }
    else {
        loginError.style.display = 'block';
    }
});
//Ir para página de cadastro
IrCadastro.addEventListener('click', () => {
    window.location.href = '/frontend/cadastro.html';
});
//#endregion
//#region Mostrar/ocultar senha com botão de "olhinho"
MostrarSenha.addEventListener('click', () => {
    if (InputSenha.type === 'password') {
        InputSenha.type = 'text';
        eyeIcon.src = "/frontend/Images/Perola_Do_Fim.png";
    }
    else {
        InputSenha.type = 'password';
        eyeIcon.src = "/frontend/Images/Olho_Do_Fim.png";
    }
});
//#endregion
