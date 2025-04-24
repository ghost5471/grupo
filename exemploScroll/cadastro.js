document.getElementById('formCad').addEventListener('submit', function(event)
{
    event.preventDefault(); // Impede o comportamento padrão do formulário (envio)

    // coletando os valores dos inputs
    email = document.getElementById('email').value;
    senha = document.getElementById('senha').value;
    
    // criando um objeto com os dados do cadastro
    const cadastro =
    {
        email: email,
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

    // convertendo o objeto em JSON e salva na localStorage
    localStorage.setItem('cadastro', JSON.stringify(cadastro));

    // mostrando mensagem de sucesso
    alert('Cadastro realizado com sucesso!');

    // limpando os campos do formulário
    document.getElementById('formCad').reset();

});