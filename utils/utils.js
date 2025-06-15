function redirecionarComErro(msg){
    sessionStorage.setItem('Erro', msg);
    window.location.href = '/erro.html';
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
}

function applyUserPreferences() {
  const savedTheme = localStorage.getItem('user-theme') || 'light';
  const savedFontSize = localStorage.getItem('user-font') || 'normal';
  applyTheme(savedTheme);
  applyFontSize(savedFontSize);
}

document.addEventListener('DOMContentLoaded', applyUserPreferences);