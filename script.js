// Get Started Button
document.getElementById("startBtn").addEventListener("click", function () {
    document.getElementById("notes").scrollIntoView({
        behavior: "smooth"
    });
});

// Physics Button
document.getElementById("physicsBtn").addEventListener("click", function () {
    alert("Physics Notes will be available soon!");
});

// Chemistry Button
document.getElementById("chemistryBtn").addEventListener("click", function () {
    alert("Chemistry Notes will be available soon!");
});

// Mathematics Button
document.getElementById("mathBtn").addEventListener("click", function () {
    alert("Mathematics Notes will be available soon!");
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank You for Contacting Us!");
});