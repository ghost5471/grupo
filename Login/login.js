// Lógica de login: valida usuário e senha, redireciona em caso de erro ou sucesso
document.getElementById('formLog').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = users.find(user => user.email === email && user.senha === senha);

    if(!validUser) {
        redirecionarComErro("Erro: E-mail ou senha inválidos.");
        return;
    }

    alert('Login bem-sucedido!');
    localStorage.setItem('usuarioLogado', JSON.stringify(validUser));
    window.location.href = '../index.html';
});

// Alterna a visibilidade da senha
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