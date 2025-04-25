document.getElementById('formCad').addEventListener('submit', function(event)
{
    event.preventDefault(); // Impede o comportamento padrão do formulário (envio)

    // Validação de senha e confirmação
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    if (senha !== confirmarSenha)
    {
        alert('As senhas não coincidem. Por favor, verifique e tente novamente.');
        confirmarSenha.reset(); // Limpa o campo de confirmação
        confirmarSenha.focus(); // Foca no campo de confirmação
        return; // Impede o envio do formulário se as senhas não conferirem
    }

    // criando um objeto com os dados do cadastro
    const cadastro =
    {
        email: document.getElementById('email').value,
        senha: senha
    };

    /*
    O localStorage é uma tecnologia que permite armazenar
    dados no navegador de forma persistente, ou seja, mesmo
    depois de o usuário fechar o navegador, os dados permanecem
    disponíveis. Neste exemplo, estamos utilizando a função localStorage.
    setItem('cadastro', JSON.stringify(cadastro)) para salvar os dados 
    inseridos pelo usuário. Quando o formulário é enviado, os dados
    de nome, e-mail e senha são armazenados no localStorage como uma
    string JSON.
    */

    try{
    // convertendo o objeto em JSON e salva na localStorage
    localStorage.setItem('cadastro', JSON.stringify(cadastro));

    // mostrando mensagem de sucesso
    alert('Cadastro realizado com sucesso!');

    // Redirecionando para a página de login
    window.location.href = '../Login/login.html';
    } catch(error) {

        alert('Erro ao realizar o cadastro: ' + error.message);
        console.error('Erro: ' + error);

        // limpando os campos do formulário
        document.getElementById('formCad').reset();
    }
});

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

// Formatação d email em tempo real
let email = document.getElementById('email').value;

email.addEventListener("keydown", Validate);

function Validate()
{
    let form = document.getElementById("formCad");
    let pattern = /^[^]+@[^]+\.[a-z]{2,3}$/; // regex para validar o email
    
    if (email.value.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
    } else {
        form.classList.add("invalid");
        form.classList.remove("valid");
    }
}

// Formatação do CPF em tempo real
document.getElementById('cpf').addEventListener('input', function(e)
{
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo o que não é dígito

    if (value.lenght > 11) value = value.slice(0, 11);

    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); // Formata o CPF
    e.target.value = value;
});

// Formatação telefone em tempo real
document.getElementById('telefone').addEventListener('input', function(e)
{
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo o que não é dígito

    if (value.lenght > 11) value = value.slice(0, 11);

    value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // Formata o telefone
    e.target.value = value;
});