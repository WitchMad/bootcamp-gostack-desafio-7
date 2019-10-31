export function addToCart(product) {
  return {
    // Type tem que estar declarado no reducer
    type: '@cart/ADD',
    product,
  };
}
export function removeFromCart(id) {
  return { type: '@cart/REMOVE', id };
}
