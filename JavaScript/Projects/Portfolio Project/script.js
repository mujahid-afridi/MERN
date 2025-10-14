let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let btn = document.getElementById("btn");
let namePara = document.createElement("p");
let emailPara = document.createElement("p");
let messagePara = document.createElement("p");
let nameCont = document.querySelector(".name-cont");

name.addEventListener("click", () => {
  name.value = "";
  let p = document.getElementById("para");
  if (p) {
    p.style.display = "none";
  }
});

email.addEventListener("click", () => {
  email.value = "";
  let p = document.getElementById("emailPara");
  if (p) {
    p.style.display = "none";
  }
});
message.addEventListener("click", () => {
  message.value = "";
  let p = document.getElementById("messagePara");
  if (p) {
    p.style.display = "none";
  }
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (name.value != "" && name.value.length >= 3) {
    console.log(name.value);
  } else {
    namePara.style.display = "block";
    namePara.id = "para";
    namePara.innerHTML = "Name is invalid";
    namePara.style.color = "red";
    namePara.style.fontSize = "1rem";
    nameCont.appendChild(namePara);
  }
  if (
    email.value != "" &&
    email.value.includes("@gmail.com") &&
    email.value.length >= 11
  ) {
    console.log(email.value);
  } else {
    emailPara.style.display = "block";
    emailPara.id = "emailPara";
    emailPara.innerHTML = "Email is Invalid";
    emailPara.style.color = "red";
    emailPara.style.fontSize = "1rem";
    email.parentElement.appendChild(emailPara);
  }
  if (message.value != "" && message.value.length >= 10) {
    console.log(message.value);
  } else {
    messagePara.style.display = "block";
    messagePara.id = "messagePara";
    messagePara.innerHTML = "Please write proper message";
    messagePara.style.color = "red";
    messagePara.style.fontSize = "1rem";
    message.parentElement.appendChild(messagePara);
  }
});
