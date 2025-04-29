function redirecionarComErro(msg){
    sessionStorage.setItem('Erro', msg);
    window.location.href = '../erro.html';
}