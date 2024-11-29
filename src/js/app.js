const catergoryArray = ["Consoles", "Games"];

const consolesArray = [
  // Nintendo
  [
    {
      name: "Nintendo Switch Neon",
      image: "./assets/images/nintendo/nintendo-switch-oled-neon.png",
      info: "This is info about the switch",
      price: 0,
    },
    {
      name: "Nintendo Switch White",
      image: "./assets/images/nintendo/nintendo-switch-oled-white.png",
      info: "This is info about the switch",
      price: 0,
    },
  ],

  // Microsoft
  [
    {
      name: "Xbox-X",
      image: "./assets/images/microsoft/xbox-x.png",
      info: "This is info about the xbox-x",
      price: 4999,
    },
    {
      name: "Xbox-S",
      image: "./assets/images/microsoft/xbox-s.png",
      info: "This is info about the xbox-s",
      price: 3999,
    },
  ],

  // Sony
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
  // Nintendo
  [
    {
      name: "Hogwarts Legacy",
      image: "./assets/images/nintendo/hogwarts-legacy.png",
      info: "This is info about the game",
      price: 0,
    },
    {
      name: "Mario Kart 8 Deluxe",
      image: "./assets/images/nintendo/mario-kart-8.png",
      info: "Info",
      price: 0,
    },
    {
      name: "Mario Party Jamboree",
      image: "./assets/images/nintendo/mario-party-jamboree.png",
      info: "Info",
      price: 0,
    },
    {
      name: "Minecraft",
      image: "./assets/images/nintendo/minecraft.png",
      info: "Info",
      price: 0,
    },
    {
      name: "Prince of Persia",
      image: "./assets/images/nintendo/prince-of-persia.png",
      info: "Info",
      price: 0,
    },
    {
      name: "Super Mario Odyssey",
      image: "./assets/images/nintendo/super-mario-odyssey.png",
      info: "Info",
      price: 0,
    },
    {
      name: "Super Mario Wonder",
      image: "./assets/images/nintendo/super-mario-wonder.png",
      info: "Info",
      price: 0,
    },
    {
      name: "Super Smash Bros Ultimate",
      image: "./assets/images/nintendo/super-smash-bros-ultimate.png",
      info: "Info",
      price: 0,
    },
    {
      name: "The Legend of Zelda: Breath of The Wild",
      image: "./assets/images/nintendo/zelda-breath-of-the-wild.png",
      info: "Info",
      price: 0,
    },
    {
      name: "The Legend of Zelda: Echo of Wisdom",
      image: "./assets/images/nintendo/zelda-echo-of-wisdom.png",
      info: "Info",
      price: 0,
    },
    {
      name: "The Legend of Zelda: Tears of the Kingdom",
      image: "./assets/images/nintendo/zelda-tears-of-the-kingdom",
      info: "Info",
      price: 0,
    },
  ],

  // Microsoft
  [
    {
      name: "",
      image: "./assets/images/nintendo/hogwarts-legacy.png",
      info: "",
      price: 0,
    },
  ],

  // Sony
  [
    {
      name: "",
      image: "",
      info: "",
      price: 0,
    },
  ],
];

// Document Queries
const main = document.querySelector("main");

// Create Products Container
const productsContainer = document.createElement("div");
const productsContainerHeader = document.createElement("h2");
const productContainer = document.createElement("div");
const productHeader = document.createElement("h3");
const productImage = document.createElement("img");
const productInfo = document.createElement("p");
const productPrice = document.createElement("h4");

// Add classes to product variables
productsContainer.classList.add("products-container");
productsContainerHeader.classList.add("products-container__header");
productContainer.classList.add("product-container");
productHeader.classList.add("product__header");
productImage.classList.add("product__image");
productInfo.classList.add("product__info");
productPrice.classList.add("product__price");

main.append(productsContainer);
productsContainer.append(productsContainerHeader, productContainer);
productContainer.append(productHeader, productImage, productInfo, productPrice);

productsContainerHeader.textContent = "Consoles";
