const categoryArray = ["Consoles", "Games"];

// Consoles
const consolesArray = [
  // Nintendo i = 0
  [
    {
      name: "Nintendo Switch Neon",
      image: "../src/assets/images/nintendo/nintendo-switch-oled-neon.png",
      info: "This is info about the switch",
      price: 0,
    },
    {
      name: "Nintendo Switch White",
      image: "../src/assets/images/nintendo/nintendo-switch-oled-white.png",
      info: "This is info about the switch",
      price: 0,
    },
  ],

  // Microsoft i = 1
  [
    {
      name: "Xbox-X",
      image: "../src/assets/images/microsoft/xbox-x.png",
      info: "This is info about the xbox-x",
      price: 4999,
    },
    {
      name: "Xbox-S",
      image: "../src/assets/images/microsoft/xbox-s.png",
      info: "This is info about the xbox-s",
      price: 3999,
    },
  ],

  // Sony i = 2
  [
    {
      name: "Playstation 5 Slim Digital",
      image: "../src/assets/images/sony/ps5-slim-digital.png",
      info: "",
      price: 0,
    },
  ],
];

// Games
const gamesArray = [
  // Nintendo i = 0
  [
    {
      name: "Hogwarts Legacy",
      image: "../src/assets/images/nintendo/hogwarts-legacy.png",
      info: "This is info about the game",
      price: 0,
    },
    {
      name: "Mario Kart 8 Deluxe",
      image: "../src/assets/images/nintendo/mario-kart-8.png",
      info: "Info",
      price: 0,
    },
    {
      name: "Mario Party Jamboree",
      image: "../src/assets/images/nintendo/mario-party-jamboree.png",
      info: "Info",
      price: 0,
    },
    {
      name: "Minecraft",
      image: "../src/assets/images/nintendo/minecraft.png",
      info: "Info",
      price: 0,
    },
    {
      name: "Prince of Persia",
      image: "../src/assets/images/nintendo/prince-of-persia.png",
      info: "Info",
      price: 0,
    },
    {
      name: "Super Mario Odyssey",
      image: "../src/assets/images/nintendo/super-mario-odyssey.png",
      info: "Info",
      price: 0,
    },
    {
      name: "Super Mario Wonder",
      image: "../src/assets/images/nintendo/super-mario-wonder.png",
      info: "Info",
      price: 0,
    },
    {
      name: "Super Smash Bros Ultimate",
      image: "../src/assets/images/nintendo/super-smash-bros-ultimate.png",
      info: "Info",
      price: 0,
    },
    {
      name: "The Legend of Zelda: Breath of The Wild",
      image: "../src/assets/images/nintendo/zelda-breath-of-the-wild.png",
      info: "Info",
      price: 0,
    },
    {
      name: "The Legend of Zelda: Echo of Wisdom",
      image: "../src/assets/images/nintendo/zelda-echo-of-wisdom.png",
      info: "Info",
      price: 0,
    },
    {
      name: "The Legend of Zelda: Tears of the Kingdom",
      image: "../src/assets/images/nintendo/zelda-tears-of-the-kingdom.png",
      info: "Info",
      price: 0,
    },
  ],

  // Microsoft i = 1
  [
    {
      name: "",
      image: "",
      info: "",
      price: 0,
    },
  ],

  // Sony i = 2
  [
    {
      name: "",
      image: "",
      info: "",
      price: 0,
    },
  ],
];

// Brand declaration
const nintendo = 0;
const microsoft = 1;
const sony = 2;

const main = document.querySelector("main");

// Category Counters
let countConsoles = 0;
let countGames = 0;

// Adding Containers, Consoles and Games to the page
for (let i = 0; i < categoryArray.flat().length; i++) {
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
  productsContainerHeader.textContent = categoryArray[i];

  // Inserting Consoles
  if (i === 0) {
    for (let j = 0; j < consolesArray.flat().length; j++) {
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
      productImage.src = consolesArray.flat()[countConsoles].image;

      // Adding Product Headers
      productHeader.textContent = consolesArray.flat()[countConsoles].name;

      // Adding Product Info
      productInfo.textContent = consolesArray.flat()[countConsoles].info;

      // Adding Product Price
      productPrice.textContent = `${
        consolesArray.flat()[countConsoles].price
      } ,-`;

      // Adding Basket SVG
      productAddToBasket.src = "../src/assets/icons/plus.svg";

      //
      countConsoles++;
    }
  }
  // Inserting Games
  else if (i === 1) {
    for (let j = 0; j < gamesArray.flat().length; j++) {
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
      productImage.src = gamesArray.flat()[countGames].image;

      // Adding Product Headers
      productHeader.textContent = gamesArray.flat()[countGames].name;

      // Adding Product Info
      productInfo.textContent = gamesArray.flat()[countGames].info;

      // Adding Product Price
      productPrice.textContent = `${gamesArray.flat()[countGames].price} ,-`;

      // Adding Basket SVG
      productAddToBasket.src = "../src/assets/icons/plus.svg";

      //
      countGames++;
    }
  }
}
