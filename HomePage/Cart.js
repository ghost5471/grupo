const productGrid = document.getElementById('product-grid'); // Onde os produtos são exibidos
const cartCount = document.getElementById('cart-count');     // O contador de itens no ícone do carrinho
const cartItemsContainer = document.getElementById('cart-items-container'); // Onde os itens do carrinho são exibidos na barra lateral

function renderProducts() {
        productGrid.innerHTML = '';

        // Função para atualizar o número de itens no contador do carrinho
    function updateCartCount() {
        cartCount.textContent = cart.length; // Atualiza o texto do contador com o número de itens no array 'cart'
    }

// Função para renderizar (exibir) os itens dentro da barra lateral do carrinho
    function renderCartItems() {
        cartItemsContainer.innerHTML = ''; // Limpa o contêiner de itens do carrinho antes de renderizar
        if (cart.length === 0) { // Se o carrinho estiver vazio
            cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>'; // Exibe uma mensagem de carrinho vazio
        } else { // Se houver itens no carrinho
            cart.forEach(item => { // Itera sobre cada item no array 'cart'
                const cartItemDiv = document.createElement('div'); // Cria um novo elemento <div> para o item do carrinho
                cartItemDiv.classList.add('cart-item'); // Adiciona a classe CSS 'cart-item'
                cartItemDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p class="price">$${item.price.toFixed(2)}</p>
                    </div>
                    <button class="remove-item-btn" data-id="${item.id}">Remover</button>
                `; // Define o HTML interno do item do carrinho
                cartItemsContainer.appendChild(cartItemDiv); // Adiciona o item ao contêiner
            });
        }
    }

// Função para renderizar (exibir) os itens dentro da barra lateral do carrinho
    function renderCartItems() {
        cartItemsContainer.innerHTML = ''; // Limpa o contêiner de itens do carrinho antes de renderizar
        if (cart.length === 0) { // Se o carrinho estiver vazio
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>'; // Exibe uma mensagem de carrinho vazio
        } else { // Se houver itens no carrinho
            cart.forEach(item => { // Itera sobre cada item no array 'cart'
                const cartItemDiv = document.createElement('div'); // Cria um novo elemento <div> para o item do carrinho
                cartItemDiv.classList.add('cart-item'); // Adiciona a classe CSS 'cart-item'
                cartItemDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p class="price">$${item.price.toFixed(2)}</p>
                    </div>
                    <button class="remove-item-btn" data-id="${item.id}">Remove</button>
                `; // Define o HTML interno do item do carrinho
                cartItemsContainer.appendChild(cartItemDiv); // Adiciona o item ao contêiner
            });
        }
    }
}

 // Chamadas iniciais das funções ao carregar a página
    
    updateCartCount(); // Atualiza o contador do carrinho com base no que está no localStorage
    renderCartItems(); // Exibe os itens do carrinho na barra lateral (se houver algum no localStorage)