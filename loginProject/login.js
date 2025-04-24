// função para validação de login 

function ValidarLogin() {

    try {

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // recupera os dados da localstorage
    const usuario = JSON.parse(localStorage.getItem(usuario));

    // verificando as credenciais
    if (usuario && usuario.email === email && usuario.senha === senha) {
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