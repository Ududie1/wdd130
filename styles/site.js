let cart = [];

    function addToCart(product, price) {
        cart.push({ product, price });
        renderCart();
    }

    function renderCart() {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
            total += item.price;
        });

        cartTotal.textContent = total.toFixed(2);
    }

    function checkout() {
        alert(`Checkout successful! Total amount: $${document.getElementById('cart-total').textContent}`);
        cart = [];
        renderCart();
    }