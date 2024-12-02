const productsArray = [
  // Consoles
  // Nintendo
  {
    name: "Nintendo Switch Neon",
    image: "../src/assets/images/nintendo/nintendo-switch-oled-neon.png",
    info: "This is info about the switch",
    price: 0,
    category: "console",
    brand: "nintendo",
  },
  {
    name: "Nintendo Switch White",
    image: "../src/assets/images/nintendo/nintendo-switch-oled-white.png",
    info: "This is info about the switch",
    price: 0,
    category: "console",
    brand: "nintendo",
  },

  // Microsoft
  {
    name: "Xbox-X",
    image: "../src/assets/images/microsoft/xbox-x.png",
    info: "This is info about the xbox-x",
    price: 4999,
    category: "console",
    brand: "microsoft",
  },
  {
    name: "Xbox-S",
    image: "../src/assets/images/microsoft/xbox-s.png",
    info: "This is info about the xbox-s",
    price: 3999,
    category: "console",
    brand: "microsoft",
  },

  // Sony
  {
    name: "Playstation 5 Slim Digital",
    image: "../src/assets/images/sony/ps5-slim-digital.png",
    info: "",
    price: 0,
    category: "console",
    brand: "sony",
  },

  // Games
  // Nintendo
  {
    name: "Hogwarts Legacy",
    image: "../src/assets/images/nintendo/hogwarts-legacy.png",
    info: "This is info about the game",
    price: 0,
    category: "game",
    brand: "nintendo",
  },
  {
    name: "Mario Kart 8 Deluxe",
    image: "../src/assets/images/nintendo/mario-kart-8.png",
    info: "Info",
    price: 0,
    category: "game",
    brand: "nintendo",
  },
  {
    name: "Mario Party Jamboree",
    image: "../src/assets/images/nintendo/mario-party-jamboree.png",
    info: "Info",
    price: 0,
    category: "game",
    brand: "nintendo",
  },
  {
    name: "Minecraft",
    image: "../src/assets/images/nintendo/minecraft.png",
    info: "Info",
    price: 0,
    category: "game",
    brand: "nintendo",
  },
  {
    name: "Prince of Persia",
    image: "../src/assets/images/nintendo/prince-of-persia.png",
    info: "Info",
    price: 0,
    category: "game",
    brand: "nintendo",
  },
  {
    name: "Super Mario Odyssey",
    image: "../src/assets/images/nintendo/super-mario-odyssey.png",
    info: "Info",
    price: 0,
    category: "game",
    brand: "nintendo",
  },
  {
    name: "Super Mario Wonder",
    image: "../src/assets/images/nintendo/super-mario-wonder.png",
    info: "Info",
    price: 0,
    category: "game",
    brand: "nintendo",
  },
  {
    name: "Super Smash Bros Ultimate",
    image: "../src/assets/images/nintendo/super-smash-bros-ultimate.png",
    info: "Info",
    price: 0,
    category: "game",
    brand: "nintendo",
  },
  {
    name: "The Legend of Zelda: Breath of The Wild",
    image: "../src/assets/images/nintendo/zelda-breath-of-the-wild.png",
    info: "Info",
    price: 0,
    category: "game",
    brand: "nintendo",
  },
  {
    name: "The Legend of Zelda: Echo of Wisdom",
    image: "../src/assets/images/nintendo/zelda-echo-of-wisdom.png",
    info: "Info",
    price: 0,
    category: "game",
    brand: "nintendo",
  },
  {
    name: "The Legend of Zelda: Tears of the Kingdom",
    image: "../src/assets/images/nintendo/zelda-tears-of-the-kingdom.png",
    info: "Info",
    price: 0,
    category: "game",
    brand: "nintendo",
  },

  // Microsoft
  {
    name: "",
    image: "",
    info: "",
    price: 0,
    category: "game",
    brand: "microsoft",
  },

  // Sony
  {
    name: "",
    image: "",
    info: "",
    price: 0,
    category: "game",
    brand: "sony",
  },
];

// Filtering Categories
// Temp solution
const categoriesArray = ["Consoles", "Games"];

// Filtering Consoles
const consolesArray = productsArray.filter(
  (product) => product.category === "console"
);

// Filtering Games
const gamesArray = productsArray.filter(
  (product) => product.category === "game"
);

// Main Queries
const main = document.querySelector("main");

//
//
// Adding Container Categories and products
for (let i = 0; i < 2; i++) {
  // Create Product Container and Header
  const productsContainer = document.createElement("div");
  const productsContainerHeader = document.createElement("h2");

  // Adding Classes
  productsContainer.classList.add("products-container");
  productsContainerHeader.classList.add("products__header");

  // Appending
  main.append(productsContainer);
  productsContainer.append(productsContainerHeader);

  // Adding Category Headers
  productsContainerHeader.textContent = categoriesArray[i];

  // Inserting Consoles
  if (i === 0) {
    for (let j = 0; j < consolesArray.length; j++) {
      // Creating Elements
      const productContainer = document.createElement("div");
      const productImage = document.createElement("img");
      const productHeader = document.createElement("h3");
      const productInfo = document.createElement("p");
      const productPriceBasketContainer = document.createElement("div");
      const productPrice = document.createElement("h4");
      const productBasket = document.createElement("button");
      const productAddToBasket = document.createElement("img");

      // Adding Classes
      productContainer.classList.add("product-container");
      productImage.classList.add("product__image");
      productHeader.classList.add("product__header");
      productInfo.classList.add("product__info");
      productPriceBasketContainer.classList.add(
        "product__price-basket-container"
      );
      productPrice.classList.add("product__price");
      productBasket.classList.add("product__basket");
      productAddToBasket.classList.add("product__add-to-basket");

      // Appending Product Container
      productsContainer.append(productContainer);
      productContainer.append(
        productImage,
        productHeader,
        productInfo,
        productPriceBasketContainer
      );
      productPriceBasketContainer.append(productPrice, productBasket);
      productBasket.append(productAddToBasket);

      // Adding Product Image
      productImage.src = consolesArray[j].image;

      // Adding Product Headers
      productHeader.textContent = consolesArray[j].name;

      // Adding Product Info
      productInfo.textContent = consolesArray[j].info;

      // Adding Product Price
      productPrice.textContent = `${consolesArray.price} ,-`;

      // Adding Basket SVG
      productAddToBasket.src = "../src/assets/icons/plus.svg";
    }
  }
  // Inserting Games
  else if (i === 1) {
    for (let j = 0; j < gamesArray.length; j++) {
      // Creating Elements
      const productContainer = document.createElement("div");
      const productImage = document.createElement("img");
      const productHeader = document.createElement("h3");
      const productInfo = document.createElement("p");
      const productPriceBasketContainer = document.createElement("div");
      const productPrice = document.createElement("h4");
      const productBasket = document.createElement("button");
      const productAddToBasket = document.createElement("img");

      // Adding Classes
      productContainer.classList.add("product-container");
      productImage.classList.add("product__image");
      productHeader.classList.add("product__header");
      productInfo.classList.add("product__info");
      productPriceBasketContainer.classList.add(
        "product__price-basket-container"
      );
      productPrice.classList.add("product__price");
      productBasket.classList.add("product__basket");
      productAddToBasket.classList.add("product__add-to-basket");

      // Appending Product Container
      productsContainer.append(productContainer);
      productContainer.append(
        productImage,
        productHeader,
        productInfo,
        productPriceBasketContainer
      );
      productPriceBasketContainer.append(productPrice, productBasket);
      productBasket.append(productAddToBasket);

      // Adding Product Image
      productImage.src = gamesArray[j].image;

      // Adding Product Headers
      productHeader.textContent = gamesArray[j].name;

      // Adding Product Info
      productInfo.textContent = gamesArray[j].info;

      // Adding Product Price
      productPrice.textContent = `${gamesArray[j].price} ,-`;

      // Adding Basket SVG
      productAddToBasket.src = "../src/assets/icons/plus.svg";
    }
  }
}
