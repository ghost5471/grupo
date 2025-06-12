// Lógica do carrinho de compras: adiciona, remove e exibe produtos no carrinho usando localStorage

// Renderiza o carrinho na tela, mostrando nome, preço, imagem e quantidade de cada produto
function renderCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const grid = document.getElementById('product-grid');
  grid.innerHTML = ""; // Limpa o conteúdo

  if (carrinho.length === 0) {
    grid.innerHTML = "<h1>Seu carrinho está vazio!</h1>";
  } else {
    carrinho.forEach(produto => {
      let div = document.createElement('div');
      div.className = "produto-carrinho";
      div.innerHTML = `
        <h3>${produto.nome} ${produto.quantidade > 1 ? `<span style="color:red;">x${produto.quantidade}</span>` : ""}</h3>
        <p>Preço: ${produto.preco}</p>
        <img src="${produto.imagem}" width="100">
        <button onclick="removerItem('${produto.nome}', '${produto.imagem}')">Remover</button>
      `;
      grid.appendChild(div);
    });
  }

  // Atualiza o contador do carrinho no ícone
  let contador = document.getElementById('cart-count');
  if (contador) contador.textContent = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
}

// Adiciona um item ao carrinho ou incrementa a quantidade se já existir
function adicionarAoCarrinho(nome, preco, imagem) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const index = carrinho.findIndex(item => item.nome === nome && item.imagem === imagem);

  if (index !== -1) {
    carrinho[index].quantidade += 1;
  } else {
    carrinho.push({ nome, preco, imagem, quantidade: 1 });
  }
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarContadorCarrinho();
}

// Remove uma unidade do item ou remove o item se quantidade = 1
function removerItem(nome, imagem) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const index = carrinho.findIndex(item => item.nome === nome && item.imagem === imagem);

  if (index !== -1) {
    if (carrinho[index].quantidade > 1) {
      carrinho[index].quantidade -= 1;
    } else {
      carrinho.splice(index, 1);
    }
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    renderCarrinho();
    atualizarContadorCarrinho();
  }
}

// Remove todos os itens do carrinho
function Remover() {
  localStorage.removeItem('carrinho');
  renderCarrinho();
  atualizarContadorCarrinho();
}

// Atualiza o contador do carrinho em todas as páginas
function atualizarContadorCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const contador = document.getElementById('cart-count');
  if (contador) contador.textContent = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
}

// Inicializa o carrinho ao carregar a página do carrinho
if (window.location.pathname.toLowerCase().includes('cart.html')) {
  window.onload = renderCarrinho;
} else {
  atualizarContadorCarrinho();
}

// Para adicionar ao carrinho em outras páginas, chame adicionarAoCarrinho(nome, preco, imagem);


