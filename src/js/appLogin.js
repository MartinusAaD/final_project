// Query Selectors
const form = document.querySelector("form");
const username = document.querySelector(".username");
const password = document.querySelector(".password");

// Form Submit Action
form.addEventListener("submit", (e) => {
  e.preventDefault();
  storeData(username.value, password.value);
});

// Local Storage
const storeData = (username, password) => {
  localStorage.setItem("username", username);
  localStorage.setItem("password", password); // Probably shouldn't store?
};
