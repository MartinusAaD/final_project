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
