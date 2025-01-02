import { Comodo } from "./Comodos.js";
import { Banheiro } from "./Banheiro.js";
import { Garagem } from "./Garagem.js";
import { Cozinha } from "./Cozinha.js";
import { Quarto } from "./Quarto.js";
import { Sala } from "./Sala.js";

 // Dados de login
 const validUser = "Gabiru";
 const validPassword = "RpgDosCrias2025";

 // Elementos do login
 const loginDiv = document.getElementById('login')! as HTMLDivElement;
 const CasaDiv = document.getElementById('Casa-Automatica')! as HTMLDivElement;
 const InputUsuario = document.getElementById('usuario') as HTMLInputElement;
 const InputSenha = document.getElementById('password') as HTMLInputElement;
 const MostrarSenha = document.getElementById('mostrar-senha')! as HTMLButtonElement;
 const eyeIcon = document.getElementById('eye-icon')! as HTMLImageElement;
 const loginButton = document.getElementById('login-botão')! as HTMLButtonElement;
 const loginError = document.getElementById('login-error') as HTMLDivElement;

 loginButton.addEventListener('click', () => {
     const usuario = InputUsuario.value;
     const senha = InputSenha.value;

     if (usuario === validUser && senha === validPassword) {
         loginDiv.style.display = 'none';
         CasaDiv.style.display = 'block';
     } else {
         loginError.style.display = 'block';
     }
 });

// Mostrar/ocultar senha com botão de "olhinho"
    MostrarSenha.addEventListener('click', () => {
    if (InputSenha.type === 'password') {

        InputSenha.type = 'text';
        eyeIcon.src = "https://img.icons8.com/ios-glyphs/30/000000/invisible.png";
            
    } else {
        
        InputSenha.type = 'password';
        eyeIcon.src = "https://img.icons8.com/ios-glyphs/30/000000/visible.png";
            
    }
});

const ListaComodos : Comodo[] = [
    new Quarto("Quarto1", true, 2.5, 6, 8, 20), //0
    new Sala("Sala de Estar", true, 3.5, 12,14, 20, false), //1
    new Banheiro("Banheiro1", true, 2.5, 6, 6, 20), //2
    new Garagem("Garagem", true, 3.5, 20, 20, 20, false), //3
    new Cozinha("Garagem", true, 3.5, 12,14, 20, false, false) //4
]

// Variável para rastrear a posição atual da câmera
let cameraIndice = -1;

function cameraExibeComodo(indice: number): void {
    if (indice >= 0 && indice < ListaComodos.length) {
        cameraIndice = indice;
        console.log(ListaComodos[cameraIndice].nome);
    } else {
        console.log("Índice inválido! Por favor, escolha um número válido na lista.");
    }
}

function alterarLuzes() : void{

    if (cameraIndice >= 0 && cameraIndice < ListaComodos.length) {
        ListaComodos[cameraIndice].Trocarluzes();
    } else {
        console.log("A câmera não está posicionada em um cômodo válido.");
    }

}

const selectCamera = document.getElementById('camera-select')! as HTMLSelectElement;
const btnAlternarLuzes = document.getElementById('alternar-luzes')! as HTMLButtonElement;
const output = document.getElementById('output')! as HTMLDivElement;

function atualizarOutput() {
    if (cameraIndice >= 0 && cameraIndice < ListaComodos.length) {
        const comodoAtual = ListaComodos[cameraIndice];
        output.innerHTML = `Câmera no ${comodoAtual.nome} <br>Luzes: ${comodoAtual.luzes ? 'Ligadas' : 'Desligadas'}`;
    } else {
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


