// Função utilitária para redirecionar para a página de erro com mensagem
function redirecionarComErro(msg){
    sessionStorage.setItem('Erro', msg);
    window.location.href = '/erro.html';
}