// função para validação de login 
document.getElementById('formLog').addEventListener('submit', function(event)
{
    event.preventDefault(); // impede o envio do formulário

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const validUser = users.find(user.email === email && user.senha === senha);

    if(!validUser) {
        window.location.href = `erro.html?mensagem=${encodeURIComponent("Erro: E-mail ou senha inválidos.")}`;
        return;
    }

    alert('Login bem-sucedido!');

    window.location.href = '/grupo/HomePage/homePage.html';

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