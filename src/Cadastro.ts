const eyeIcon2 = document.getElementById('eye-icon')! as HTMLImageElement;
const InputSenha2 = document.getElementById('password') as HTMLInputElement;
const IrLogin = document.getElementById('pagina-login')! as HTMLButtonElement
const MostrarSenha2 = document.getElementById('mostrar-senha')! as HTMLButtonElement;

//Ir para página de login
IrLogin.addEventListener('click', () => {

    window.location.href = 'login.html'
})

//#region Mostrar/ocultar senha com botão de "olhinho"
MostrarSenha2.addEventListener('click', () => {
    if (InputSenha2.type === 'password') {
 
        InputSenha2.type = 'text';
        eyeIcon2.src = "Images/Perola_Do_Fim.png";
            
    } else {
        
        InputSenha2.type = 'password';
        eyeIcon2.src = "Images/Olho_Do_Fim.png";
            
    }
 });
 //#endregion