 function verOferta() {
      alert("Redirecionando para as ofertas!");
    }

    function toggleMenu() {
      const menu = document.getElementById("floating-menu");
      menu.classList.toggle("active");
    }
    
    
    
// Adiciona um produto ao carrinho no localStorage
function adicionarAoCarrinho(produto) {
  // produto deve ser um objeto: { nome, preco, imagem }
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push(produto);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarContadorCarrinho();
}

// Atualiza o contador do carrinho no ícone
function atualizarContadorCarrinho() {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  let contador = document.getElementById('cart-count');
  if (contador) contador.textContent = carrinho.length;
}

// Chame atualizarContadorCarrinho() ao carregar a página
window.onload = atualizarContadorCarrinho;