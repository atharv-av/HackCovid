const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".country-list").style.visibility = "hidden";
  document.querySelector(".close").style.visibility = "hidden";
});

document.querySelector("#search-input").addEventListener("click", () => {
  document.querySelector(".country-list").style.visibility = "visible";
  document.querySelector(".close").style.visibility = "visible";
})

document.querySelector(".change-country").addEventListener("click", () => {
  document.querySelector(".country-list").style.visibility = "visible";
  document.querySelector(".close").style.visibility = "visible";
})

function sendEmail(){
  Email.send({
    Host: "smtp.gmail.com",
    Username: "atharvav03@gmail.com",
    Password: "mzdegxhdjpnferuu",
    To: "atharvav03@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Form Id",
    Body: "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone No: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
  }).then(
    message => alert("Message sent succesfully")
  )
}