// Query Selectors
const form = document.querySelector("form");
const fullname = document.querySelector(".fullname");
const ordernumber = document.querySelector(".ordernumber");
const email = document.querySelector(".email");
const phonenumber = document.querySelector(".phonenumber");
const message = document.querySelector(".message");
const messagePopup = document.querySelector(".message-popup");

// Form Submit Action
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("test");
  storeData(
    fullname.value,
    ordernumber.value,
    email.value,
    phonenumber.value,
    message.value
  );
  form.reset();

  messagePopup.style.display = "block";

  setTimeout(() => {
    messagePopup.style.display = "none";
  }, 3000);
});

// Local Storing
const storeData = (fullname, ordernumber, email, phonenumber, message) => {
  localStorage.setItem("Full Name", fullname);
  localStorage.setItem("Order Number", ordernumber);
  localStorage.setItem("Email", email);
  localStorage.setItem("Phone Number", phonenumber);
  localStorage.setItem("Message", message);
};
