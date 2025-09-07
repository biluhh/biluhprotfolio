function sendMail(){
    var params = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };

const serviceID = "service_amgqy5h";
const templateID = "template_jsv6zgh"

emailjs
    .send(serviceID,templateID,params)
    .then((res) => {
        document.getElementById("name").value= "";
        document.getElementById("email").value= "";
        document.getElementById("message").value= "";
        console.log(res);
        alert("your message sent successfully");
    })
.catch((err) => console.log(err));
}
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-main ul");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});