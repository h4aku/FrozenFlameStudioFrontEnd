var navlink = document.getElementById("navlink");
var nav = document.querySelector("nav");
var barsIcon = document.querySelector(".fa-bars"); // Select the bars icon
var prevScrollPos = window.scrollY;

function hidemenu() {
    navlink.style.right = "-400px";
}

function showmenu() {
    navlink.style.right = "-50px";
}

function updateBarsIconColor(isTop) {
    if (isTop) {
        barsIcon.style.color = "white"; // Change icon color to transparent
    } else {
        barsIcon.style.color = "black"; // Change icon color to black
    }
}

function handleScroll() {
    var currentScrollPos = window.scrollY;
    var isTop = currentScrollPos <= 0;

    if (isTop) {
        // At the top, make navigation bar transparent and icon transparent
        nav.classList.add("transparent-top");
        nav.classList.remove("opaque");
    } else if (currentScrollPos > prevScrollPos) {
        // Scrolling down, make navigation bar black and icon black
        nav.classList.remove("transparent-top");
        nav.classList.add("opaque");
    } else {
        // Scrolling up, no need to change class
    }

    updateBarsIconColor(isTop); // Call the function to update icon color
    prevScrollPos = currentScrollPos;
}

// Initial check when the page loads
window.addEventListener("load", function () {
    handleScroll(); // Call the function on page load
});

// Add scroll event listener
window.addEventListener("scroll", function () {
    handleScroll(); // Call the function on scroll
});


//for smooth animation
const navLinks = document.querySelectorAll('#navlink a');

navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Get the target section's id from the href attribute
        const targetId = link.getAttribute('href');

        // Find the target element using the id
        const targetElement = document.querySelector(targetId);

        // Scroll to the target section with smooth behavior
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});