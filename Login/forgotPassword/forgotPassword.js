function ValidarLogin() {

    try {

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // recupera os dados da localstorage
    const usuario = JSON.parse(localStorage.getItem(usuario));

    // verificando as credenciais
    if (usuario && usuario.email === email && usuario.senha === senha)
    {
        alert('Login realizasdo com sucesso!')
        // local para redirecionar para a pagina principal ou dashboard
    }
    else
    {
        ExibirErroPopUp();
    }

    }
    catch(error)
    {
        console.error("Erro ao processar o login: ", error);
        ExibirErroPopUp();
    }
}

// função para exibir o pop-up de erro
function ExibirErroPopUp()
{
    const popup = document.getElementById('errorPopup');
    popup.style.display = 'block';
}

// Função para fechar o pop-up de erro
function FecharPopupErro()
{
    const popup = document.getElementById('errorPopup');
    popup.style.display = 'none';
}

// Função para alternar a visibilidade da senha
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.nextElementSibling;
    
    if (input.type === 'password') {
        input.type = 'text';
        button.textContent = '🔒';
    } else {
        input.type = 'password';
        button.textContent = '👁️';
    }
}