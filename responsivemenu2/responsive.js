let button = document.querySelector(".menu-btn");
let links = document.querySelectorAll("nav a");

button.addEventListener("click", () => {

    button.classList.toggle("change");

   
    links.forEach(link => {
      
        if (link.style.display === "block") {
            link.style.display = "none";
        } else {
            link.style.display = "block";
        }
    });
});