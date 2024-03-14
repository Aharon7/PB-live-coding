const products = [
  {
    type: "t-shirt",
    price: 19,
    color: "green",
  },
  {
    type: "jeans",
    price: 27,
    color: "blue",
  },
  {
    type: "shirt",
    price: 32,
    color: "white",
  },
  {
    type: "jacket",
    price: 25,
    color: "grey",
  },
  {
    type: "shorts",
    price: 19,
    color: "yellow",
  },
  {
    type: "skirt",
    price: 18,
    color: "brown",
  },
  {
    type: "t-shirt",
    price: 5,
    color: "red",
  },
  {
    type: "jeans",
    price: 29,
    color: "black",
  },
];

const applyDiscount = (products, discount) => {
    // Erstelle neues Ergebnisarray
    // const discountedProducts = [];

    // Durchlaufe alle Produkte
    // products.forEach(product => {
    //     // Erstelle Produktkopie
    //     // const productCopy = {...product};

    //     // Überschreibe Preis der Produktkopie
    //     // productCopy.price = product.price - (product.price * discount / 100);

    //     // Alternativ: Erstelle Kopie und überschreibe dabei direkt die price-Property
    //     // const productCopy = {
    //     //     ...product,
    //     //     price: product.price - (product.price * discount / 100)
    //     // };

    //     // Füge veränderte Kopie zum Ergebnisarray hinzu
    //     // discountedProducts.push(productCopy);

    //     // Am kürzesten: Erstelle veränderte Kopie und füge diese hinzu in einem Schritt
    //     discountedProducts.push({
    //         ...product,
    //         price: product.price - (product.price * discount / 100)
    //     });
    // });

    // Gebe Ergebnis mit eingetragenen Rabatten zurück
    // return discountedProducts;


    // Zusammengefasst mit der map-Methode:
    return products.map(product => {
        return {
            ...product,
            price: product.price - (product.price * discount / 100)
        };
    });
};

console.log(applyDiscount(products, 10));
console.log(products);
