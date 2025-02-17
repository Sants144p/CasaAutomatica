const db = `/usuarios`

// Dados de login

const InputUsuario = document.getElementById('usuario') as HTMLInputElement;
const InputSenha = document.getElementById('password') as HTMLInputElement;
const MostrarSenha = document.getElementById('mostrar-senha')! as HTMLButtonElement;
const eyeIcon = document.getElementById('eye-icon')! as HTMLImageElement;
const loginButton = document.getElementById('login-botão')! as HTMLButtonElement;
const loginError = document.getElementById('login-error') as HTMLDivElement;
const IrCadastro = document.getElementById('pagina-cadastro')! as HTMLButtonElement;




//#region código do Login
loginButton.addEventListener('click', () => {
    fetch(db)
    .then(response => response.json())
    .then(registro => mostrar_usuario(registro))

    function mostrar_usuario(registro: { id: number; nome: string; senha: string }[]) {
        let logou: boolean = false;
        for (let user of registro) {
          if (InputUsuario.value === user.nome && InputSenha.value === user.senha) {
            logou = true;
            break;
            } 
        }
        if (logou) {
            window.location.href = 'main.html'
            
        } else {
            loginError.style.display = 'block';
        }
         
      
}})

//Ir para página de cadastro
IrCadastro.addEventListener('click', () => {

    window.location.href = 'cadastro.html'
})


//#endregion

//#region Mostrar/ocultar senha com botão de "olhinho"
   MostrarSenha.addEventListener('click', () => {
   if (InputSenha.type === 'password') {

       InputSenha.type = 'text';
       eyeIcon.src = "Images/Perola_Do_Fim.png";
           
   } else {
       
       InputSenha.type = 'password';
       eyeIcon.src = "Images/Olho_Do_Fim.png";
           
   }
});
//#endregion