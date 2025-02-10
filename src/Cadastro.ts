const IrLogin = document.getElementById('pagina-login')! as HTMLButtonElement

//Ir para página de login
IrLogin.addEventListener('click', () => {

    window.location.href = '/frontend/login.html'
})
