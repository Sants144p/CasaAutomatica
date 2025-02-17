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

 //#region Fetch para parar de mostrar formulário após cadastro
 document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cadastro-form") as HTMLFormElement;
  
    if (form) {
      form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Impede o recarregamento da página
  
        const formData = new FormData(form);
        const data = {
          nome: formData.get("nome"),
          senha: formData.get("senha"),
        };
  
        try {
          const response = await fetch("/usuarios/create", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
  
          if (!response.ok) {
            throw new Error("Erro ao cadastrar usuário");
          }
  
          const result = await response.json();
          console.log("Usuário cadastrado com sucesso:", result);
  
          alert("Usuário cadastrado com sucesso!");
          form.reset(); // Limpa o formulário após o cadastro
        } catch (error) {
          console.error("Erro:", error);
          alert("Erro ao cadastrar usuário!");
        }
      });
    }
  });
//#endregion
 