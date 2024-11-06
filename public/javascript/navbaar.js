function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {
            link.style.animation = link.style.animation ? "" : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
    
    // Add event listener to each nav link to close the nav when clicked
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.toggle("nav-active");
            burger.classList.toggle("toggle");
        });
    });
}

navSlide();