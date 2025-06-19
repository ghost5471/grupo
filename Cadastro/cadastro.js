document.getElementById('formCad').addEventListener('submit', function(event)
{
    event.preventDefault(); // Impede o comportamento padrão do formulário (envio)

    const usuario = document.getElementById('usuario').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    
    // Validação de senha e confirmação
    if (senha !== confirmarSenha)
    {
        redirecionarComErro("Erro: As senhas não coicidem.");
        confirmarSenha.value = ''; // limpa o campo
        confirmarSenha.focus(); // foca no campo
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


    /*
    O localStorage é uma tecnologia que permite armazenar
    dados no navegador de forma persistente, ou seja, mesmo
    depois do usuário fechar o navegador, os dados permanecem
    disponíveis. Neste caso, estamos utilizando a função localStorage:
    setItem('cadastro', JSON.stringify(cadastro)) para salvar os dados 
    inseridos pelo usuário. Quando o formulário é enviado, os dados
    de nome, e-mail e senha são armazenados no localStorage como uma
    string JSON.
    */

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

// Formatação de email
document.getElementById('email').addEventListener('input', function()
{
    let email = this.value;
    let pattern = /^[^]+@[^]+\.[a-z]{2,3}$/; // Regex para validar o email

    if (email.match(pattern)) {
        this.setCustomValidity(''); // remove a mensagem de erro
    } else {
        this.setCustomValidity('Erro: Por favor, insira um email válido.'); // mensagem de erro
    }

});

// Formatação do CPF em tempo real
document.getElementById('cpf').addEventListener('input', function(e)
{
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo o que não é dígito

    if (value.length > 11) value = value.slice(0, 11); // Limita o CPF a 11 dígitos
    if (value.length <= 11) {
        value = value.replace(/(\d{3})(\d)/, '$1.$2'); // adiciona o primeiro ponto
        value = value.replace(/(\d{3})(\d)/, '$1.$2'); // adiciona o segundo ponto
        value = value.replace(/(\d{3})(\d{2})$/, '$1-$2'); // adiciona o traço
    }
    e.target.value = value;
});

// Formatação de telefone fixo
document.getElementById('telefoneFixo').addEventListener('input', function(e)
{
    let value = e.target.value.replace(/\D/g, ''); // remove tudo que não é dígito

    if (value.length > 10) value = value.slice(0, 10); // Limita o telefone a 10 dígitos
    if (value.length <= 10) {
        value = value.replace(/(\d{2})(\d)/, '($1) $2'); // adiciona o DDD
        value = value.replace(/(\d{4})(\d)/, '$1-$2'); // adiciona o segundo dígito do CEP
        value = value.replace(/(\d{4})(\d)/, '$1'); // adiciona o terceiro dígito do CEP
    }
    e.target.value = value;
});

// Formatação telefone celular
document.getElementById('telefone').addEventListener('input', function(e)
{
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo o que não é dígito

    if (value.length > 11) value = value.slice(0, 11);

    if(value.length <= 11) {
        value = value.replace(/(\d{2})(\d)/, '($1) $2'); // adiciona o DDD
        if(value.length > 6) {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // Formata o telefone celular
        }
    }
    e.target.value = value;
});

// Formatação do CEP
document.getElementById('cep').addEventListener('input', function(e)
{
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo o que não é dígito

    if (value.length > 8) value = value.slice(0, 8); // Limita o CEP a 9 dígitos
    
    if (value.length <= 8) {
        value = value.replace(/(\d{5})(\d)/, '$1-$2'); // adiciona o traço
    }
    e.target.value = value;
});