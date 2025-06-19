// Lógica de cadastro: valida campos, salva usuário no localStorage, redireciona em caso de erro ou sucesso

document.getElementById('formCad').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;
    const confirmarSenhaInput = document.getElementById('confirmarSenha');
    const confirmarSenha = confirmarSenhaInput.value;

    if (senha !== confirmarSenha) {
        redirecionarComErro("Erro: As senhas não coicidem.");
        confirmarSenhaInput.value = ''; // limpa o campo
        confirmarSenhaInput.focus(); // foca no campo
        return; // Impede o envio do formulário se as senhas não conferirem
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const exists = users.some(u => u.email === email);

    if (exists) {
        redirecionarComErro("Erro: E-mail já cadastrado.");
        return;
    }

    users.push({ usuario, email, senha });
    localStorage.setItem('users', JSON.stringify(users));

    alert("Cadastro realizado com sucesso!");
    window.location.href = '../Login/login.html';
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

// Validação de email
document.getElementById('email').addEventListener('input', function() {
    let email = this.value;
    let pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
    if (email.match(pattern)) {
        this.setCustomValidity('');
    } else {
        this.setCustomValidity('Erro: Por favor, insira um email válido.');
    }
});

// Formatação do CPF
document.getElementById('cpf').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length <= 11) {
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{2})$/, '$1-$2');
    }
    e.target.value = value;
});

// Formatação telefone fixo
document.getElementById('telefoneFixo').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 10) value = value.slice(0, 10);
    if (value.length <= 10) {
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{4})(\d)/, '$1-$2');
        value = value.replace(/(\d{4})(\d)/, '$1');
    }
    e.target.value = value;
});

// Formatação telefone celular
document.getElementById('telefone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    if(value.length <= 11) {
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        if(value.length > 6) {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        }
    }
    e.target.value = value;
});

// Formatação do CEP
document.getElementById('cep').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 8) value = value.slice(0, 8);
    if (value.length <= 8) {
        value = value.replace(/(\d{5})(\d)/, '$1-$2');
    }
    e.target.value = value;
});