// função para validação de login 
document.getElementById('formLog').addEventListener('submit', function(event)
{
    event.preventDefault(); // impede o envio do formulário

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const validUser = users.find(user => user.email === email && user.senha === senha);

    if(!validUser) {
        redirecionarComErro("Erro: E-mail ou senha inválidos.");
        return;
    }

    if(validUser) {
        userName.textContent = JSON.stringify(email);

        alert('Login bem-sucedido!');
        localStorage.setItem('usuarioLogado', JSON.stringify(validUser));
        window.location.href = '../index.html';
    }

    

});

// Função para alternar a visibilidade da senha
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.nextElementSibling;
    
    if (input.type === 'password') {
        input.type = 'text';
        button.textContent = '🔓';
    } else {
        input.type = 'password';
        button.textContent = '🔒';
    }
}