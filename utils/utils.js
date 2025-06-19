function redirecionarComErro(msg){
    sessionStorage.setItem('Erro', msg);
    window.location.href = '../erro.html';
}

// Funções para tema e fonte global
function applyTheme(theme) {
  const body = document.body;
  if (theme === 'dark') {
    body.classList.add('dark-mode');
    body.classList.remove('theme-light');
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('theme-light');
  }
}

function applyFontSize(size) {
  const body = document.body;
  if (size === 'large') {
    body.classList.add('large-font');
  } else {
    body.classList.remove('large-font');
  }

  if (size === 'small') {
    body.classList.add('small-font');
  } else {
    body.classList.remove('small-font');
  }
}

function applyUserPreferences() {
  const savedTheme = localStorage.getItem('user-theme') || 'light';
  const savedFontSize = localStorage.getItem('user-font') || 'normal';
  applyTheme(savedTheme);
  applyFontSize(savedFontSize);
}

document.addEventListener('DOMContentLoaded', applyUserPreferences);

// Função para redirecionar usuário conforme login
function redirecionarUsuarioOuLogin() {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users[users.length - 1];
  if (user && user.usuario && user.email) {
    window.location.href = 'user.html';
  } else {
    window.location.href = '../Login/login.html';
  }
}