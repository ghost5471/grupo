// Pega os elementos pelo id
const nome = document.getElementById('nome')?.textContent || '';
const preco = document.getElementById('preco')?.textContent || '';
const imagem = document.getElementById('imagem')?.getAttribute('src') || '';

// Cria o array carrinho com o produto
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
carrinho.push({ nome, preco, imagem });
localStorage.setItem('carrinho', JSON.stringify(carrinho));

// Inicializa o contador a partir do localStorage, se existir
let cartCount = parseInt(localStorage.getItem("carrinho")) || 0;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cart-count').textContent = cartCount;
});



function Remover() {
    cartCount = 0;
    localStorage.setItem("carrinho", cartCount);
    document.getElementById('cart-count').textContent = cartCount;
}

window.onload = function() {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  let grid = document.getElementById('product-grid');
  grid.innerHTML = ""; // Limpa o conteúdo

  if (carrinho.length === 0) {
    grid.innerHTML = "<h1>Seu carrinho está vazio!</h1>";
  } else {
    carrinho.forEach(produto => {
      let div = document.createElement('div');
      div.className = "produto-carrinho";
      div.innerHTML = `
        <h3>${produto.nome}</h3>
        <p>Preço: R$ ${produto.preco}</p>
        <img src="${produto.imagem}" width="100">
      `;
      grid.appendChild(div);
    });
  }

  // Atualiza o contador do carrinho
  let contador = document.getElementById('cart-count');
  if (contador) contador.textContent = carrinho.length;
};

// Função para remover todos os itens do carrinho
function Remover() {
  localStorage.removeItem('carrinho');
  window.location.reload();
}


