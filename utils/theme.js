// Aplica tema e fonte do usuário após o DOM estar pronto
(function() {
  function isAuthPage() {
    const path = window.location.pathname;
    return (
      path.includes('/Login/login.html') ||
      path.includes('/Cadastro/cadastro.html') ||
      path.includes('/Login/forgotPassword/forgotPassword.html')
    );
  }

  function applyThemeAndFont() {
    let theme = localStorage.getItem('user-theme');
    const font = localStorage.getItem('user-font') || 'normal';

    // Para telas de login, cadastro e forgotpassword, padrão é claro
    if (isAuthPage() && !theme) {
      theme = 'light';
      localStorage.setItem('user-theme', 'light');
    }
    if (!theme) theme = 'light';

    document.body.classList.remove('dark-mode', 'large-font', 'small-font');
    if (theme === 'dark') document.body.classList.add('dark-mode');
    if (font === 'large') document.body.classList.add('large-font');
    else if (font === 'small') document.body.classList.add('small-font');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyThemeAndFont);
  } else {
    applyThemeAndFont();
  }
})();