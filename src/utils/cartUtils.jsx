// utils/cartUtils.js

export function getCart() {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}

export function addToCart(product) {
  const cart = getCart();
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  window.dispatchEvent(new Event("storage")); 
}

export function clearCart() {
  localStorage.removeItem("cart");
  window.dispatchEvent(new Event("storage")); 
}

export function getCartCount() {
  return getCart().length;
}
