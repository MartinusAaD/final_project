const form = document.querySelector("form");
const fullname = document.querySelector(".fullname");
const ordernumber = document.querySelector(".ordernumber");
const email = document.querySelector(".email");
const phonenumber = document.querySelector(".phonenumber");
const message = document.querySelector(".message");

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
});

const storeData = (fullname, ordernumber, email, phonenumber, message) => {
  localStorage.setItem("Full Name", fullname);
  localStorage.setItem("Order Number", ordernumber);
  localStorage.setItem("Email", email);
  localStorage.setItem("Phone Number", phonenumber);
  localStorage.setItem("Message", message);
};
