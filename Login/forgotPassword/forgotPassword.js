document.getElementById('formRecuperar').addEventListener('submit', function(event){
    event.preventDefault();

    const email = document.getElementById('email').value;
    const novaSenha = document.getElementById('nova-senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    if (novaSenha !== confirmarSenha) {
        redirecionarComErro("Erro: As senhas não coicidem.");
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const index = users.findIndex(u => u.email === email);

    if (index === -1) {
        redirecionarComErro("Erro: E-mail não encontrado.");
        return;
    }

    users[index].senha = novaSenha;
    localStorage.setItem('users', JSON.stringify(users));

    alert("Senha redefinida com sucesso.");
    window.location.href = '/grupo/Login/login.html';

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
