// ===============================
// GET STARTED BUTTON
// ===============================

let startBtn = document.getElementById("startBtn");

if (startBtn) {
    startBtn.addEventListener("click", function () {

        let notes = document.getElementById("notes");

        if (notes) {
            notes.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
}


// ===============================
// PHYSICS UNITS
// ===============================

let unit1 = document.getElementById("unit1");
if (unit1) {
    unit1.addEventListener("click", function () {
        alert("Physics Unit 1 Notes Coming Soon!");
    });
}

let unit2 = document.getElementById("unit2");
if (unit2) {
    unit2.addEventListener("click", function () {
        alert("Physics Unit 2 Notes Coming Soon!");
    });
}

let unit3 = document.getElementById("unit3");
if (unit3) {
    unit3.addEventListener("click", function () {
        alert("Physics Unit 3 Notes Coming Soon!");
    });
}

let unit4 = document.getElementById("unit4");
if (unit4) {
    unit4.addEventListener("click", function () {
        alert("Physics Unit 4 Notes Coming Soon!");
    });
}

let unit5 = document.getElementById("unit5");
if (unit5) {
    unit5.addEventListener("click", function () {
        alert("Physics Unit 5 Notes Coming Soon!");
    });
}


// ===============================
// CHEMISTRY UNITS
// ===============================

let cunit1 = document.getElementById("cunit1");
if (cunit1) {
    cunit1.addEventListener("click", function () {
        alert("Chemistry Unit 1");
    });
}

let cunit2 = document.getElementById("cunit2");
if (cunit2) {
    cunit2.addEventListener("click", function () {
        alert("Chemistry Unit 2");
    });
}


// ===============================
// MATHS UNITS
// ===============================

let munit1 = document.getElementById("munit1");
if (munit1) {
    munit1.addEventListener("click", function () {
        alert("Mathematics Unit 1");
    });
}


// ===============================
// MECHANICAL UNITS
// ===============================

let meunit1 = document.getElementById("meunit1");
if (meunit1) {
    meunit1.addEventListener("click", function () {
        alert("Mechanical Unit 1");
    });
}


// ===============================
// SEARCH BAR
// ===============================

let searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let filter = searchInput.value.toLowerCase();

        let cards = document.querySelectorAll(".subject-card");

        cards.forEach(function (card) {

            let text = card.innerText.toLowerCase();

            if (text.includes(filter)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }

        });

    });

}


// ===============================
// DARK MODE
// ===============================

let darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {

    darkBtn.addEventListener("click", function () {

        alert("Dark Mode Working");

        document.body.classList.toggle("dark-mode");

    });

}



// ===============================
// TYPING EFFECT
// ===============================

let typingText = document.getElementById("typing-text");

if (typingText) {

    let text = "Welcome To Students Notes Hub";
    let i = 0;

    function typingEffect() {

        if (i < text.length) {

            typingText.innerHTML += text.charAt(i);

            i++;

            setTimeout(typingEffect, 100);

        }

    }

    typingEffect();

}let topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});