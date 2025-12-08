function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to Cart!");
}

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let container = document.getElementById("cartItems");

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = "<h2>Your cart is empty</h2>";
    return;
  }

  container.innerHTML = cart
    .map(item => `<p>${item.name} — ₹${item.price}</p>`)
    .join("");
}

loadCart();