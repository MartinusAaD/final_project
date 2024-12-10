// Inserting products from shop to basket
const basketContainer = document.querySelector(".form__basket");
const basketProductContainer = document.createElement("div");
const basketProductImage = document.createElement("img");
const basketProductTitle = document.createElement("p");
const basketProductPrice = document.createElement("p");

// -----------------------------------------------------------------

// Input restrictions
//// Card Number restriction
const cardNumber = document.querySelector(".payment__cardnumber");

cardNumber.addEventListener("input", () => {
  if (cardNumber.value.length > 16) {
    cardNumber.value = cardNumber.value.slice(0, 16);
  }
});

//// CVC restriction
const cvc = document.querySelector(".payment__cvc");

cvc.addEventListener("input", () => {
  if (cvc.value.length > 3) {
    cvc.value = cvc.value.slice(0, 3);
  }
});

//// Expiry Date restriction
const expiryDate = document.querySelector(".payment__expiry-date");

cvc.addEventListener("input", () => {
  if (expiryDate.value.length > 4) {
    expiryDate.value = expiryDate.value.slice(0, 4);
  }
});

// -------------------------------------------------------------------

// Shipping section, checkbox
const shippingContainer = document.querySelector(".form__shipping");
const radioButton = document.querySelector(
  ".form__shipping-same-as-address-input"
);

radioButton.addEventListener("change", () => {
  if (radioButton.checked) {
    shippingContainer.style.display = "none";
  } else {
    shippingContainer.style.display = "flex";
  }
});
