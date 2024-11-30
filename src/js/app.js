const categoryArray = ["Consoles", "Games"];

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
      image: "",
      info: "",
      price: 0,
    },
  ],
];

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
      image: "../src/assets/images/nintendo/zelda-tears-of-the-kingdom",
      info: "Info",
      price: 0,
    },
  ],

  // Microsoft i = 1
  [
    {
      name: "",
      image: "../src/assets/images/nintendo/hogwarts-legacy.png",
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

// Document Queries
const main = document.querySelector("main");

// Create Products Container
const productsContainer = document.createElement("div");
const productsContainerHeader = document.createElement("h2");
const productContainer = document.createElement("div");
const productHeader = document.createElement("h3");
const productImage = document.createElement("img");
const productInfo = document.createElement("p");
const productPriceBasketContainer = document.createElement("div");
const productPrice = document.createElement("h4");
const productBasket = document.createElement("button");
const productAddToBasket = document.createElement("img");

// Add classes to product variables
productsContainer.classList.add("products-container");
productsContainerHeader.classList.add("products__header");
productContainer.classList.add("product-container");
productHeader.classList.add("product__header");
productImage.classList.add("product__image");
productInfo.classList.add("product__info");
productPriceBasketContainer.classList.add("product__price-basket-container");
productPrice.classList.add("product__price");
productBasket.classList.add("product__basket");
productAddToBasket.classList.add("product__add-to-basket");

// Appending Product Container
main.append(productsContainer);
productsContainer.append(productsContainerHeader, productContainer);
productContainer.append(
  productImage,
  productHeader,
  productInfo,
  productPriceBasketContainer
);
productPriceBasketContainer.append(productPrice, productBasket);
productBasket.append(productAddToBasket);

// Adding Category Headers
productsContainerHeader.textContent = categoryArray[0];

// Adding Product Image
productImage.src = consolesArray[nintendo][0].image;

// Adding Product Headers
productHeader.textContent = consolesArray[nintendo][0].name;

// Adding Product Info
productInfo.textContent = consolesArray[nintendo][0].info;

// Adding Product Price
productPrice.textContent = `${consolesArray[nintendo][0].price} ,-`;

// Adding Basket SVG
productAddToBasket.src = "../src/assets/icons/plus.svg";
