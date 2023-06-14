export function getProducts() {
  return fetch(
    `https://shopisko-98e58-default-rtdb.firebaseio.com/products.json`,
    {
      method: "GET",
    }
  )
    .then(
      (response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed!");
      },
      (networkError) => {
        console.log(`network error!:`, networkError.message);
      }
    )
    .then((jsonResponse) => {
      if (jsonResponse === null) {
        return alert("No Products!");
      }
      const products = Object.entries(jsonResponse);
      const productsArray = products.map((product) => ({
        id: product[0],
        name: product[1].name,
        brand: product[1].brand,
        price: product[1].price,
        quantity: product[1].quantity,
        imageMedium: product[1].imageMedium,
        imageSmall: product[1].imageSmall,
      }));
      return productsArray;
    });
}
