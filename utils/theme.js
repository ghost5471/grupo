// Script para aplicar as preferencias do usuario pegando pelo localstorage
// e aplicando as classes correspondentes no body do documento.
  (function() {
    const theme = localStorage.getItem('user-theme') || 'light';
    const font = localStorage.getItem('user-font') || 'normal';
    document.body.classList.remove('dark-mode', 'large-font', 'small-font');
    if (theme === 'dark') document.body.classList.add('dark-mode');
    if (font === 'large') document.body.classList.add('large-font');
    else if (font === 'small') document.body.classList.add('small-font');
    // normal: nenhuma classe extra
  })();