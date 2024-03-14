const cart = [
  {
    type: "t-shirt",
    price: 19,
    color: "green",
  },
  {
    type: "jeans",
    price: 27,
    color: "blue",
  }
];

const hatProduct = {
  type: "hat",
  price: 15,
  color: "pink",
};

const addProduct = (cart, product) => {
    // Erstelle Kopie des übergebenen Warenkorbs
    // const cartCopy = [...cart]; // [cart[0], cart[1]]

    // Hänge das übergebene Produkt der Kopie des Warenkorbs hinzu
    // cartCopy.push(product);

    // Gebe aktualisierten Warenkorb zurück
    // return cartCopy;

    // Alles in einem Ausdruck
    return [...cart, product];
};

const updatedCart = addProduct(cart, hatProduct);

console.log(updatedCart);
console.log(cart);
