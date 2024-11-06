var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}

// Function to hide the mobile menu
function hideMenu() {
    navLinks.style.right = "-200px";
}

// Add click functionality for navigation items
document.getElementById("home-link").onclick = function() {
    window.location.href = "student_council.html"; // Redirects to the Student Council page
};

document.getElementById("about-link").onclick = function() {
    alert("About section will be developed soon!"); // Placeholder for future content
};

document.getElementById("club-link").onclick = function() {
    alert("Club section will be developed soon!"); // Placeholder for future content
};

document.getElementById("faculty-link").onclick = function() {
    alert("Faculty section will be developed soon!"); // Placeholder for future content
};

document.getElementById("events-link").onclick = function() {
    alert("Events section will be developed soon!"); // Placeholder for future content
};

document.getElementById("contact-link").onclick = function() {
    alert("Contact section will be developed soon!"); // Placeholder for future content
};
