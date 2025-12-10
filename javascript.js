let cart = [];

document.getElementById("openCart").addEventListener("click", () => {
    document.getElementById("cartOverlay").style.display = "block";
    document.getElementById("cartModal").style.display = "block";
});

document.getElementById("cartOverlay").addEventListener("click", () => {
    document.getElementById("cartOverlay").style.display = "none";
    document.getElementById("cartModal").style.display = "none";
});

function addToCart(image, name, price) {
    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            image,
            name,
            price,
            quantity: 1
        });
    }

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        cartItems.innerHTML += `
            <tr>
                <td><img src="${item.image}"></td>
                <td>${item.name}</td>
                <td>$${item.price}</td>
                <td><input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="changeQuantity(${index}, this.value)"></td>
                <td><button class="remove-btn" onclick="removeItem(${index})">✖</button></td>
            </tr>
        `;
    });

    document.getElementById("cart-count").innerText = cart.length;
    document.getElementById("cart-count-modal").innerText = cart.length;
    document.getElementById("cartTotal").innerText = total.toFixed(2);
}

function changeQuantity(index, value) {
    cart[index].quantity = parseInt(value);
    updateCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}