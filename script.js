// =====================================
// ELEMENTS
// =====================================

const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

const nextBtn = document.getElementById("next-btn");


// =====================================
// CLICK ENVELOPE
// =====================================

envelope.addEventListener("click", () => {

    // Hide envelope
    envelope.style.display = "none";

    // Show letter
    letter.style.display = "flex";

    // Animate letter opening
    setTimeout(() => {

        document
            .querySelector(".letter-window")
            .classList.add("open");

    }, 50);

});


// =====================================
// NO BUTTON MOVEMENT
// =====================================

noBtn.addEventListener("mouseover", () => {

    const distance = 200;

    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";

    noBtn.style.transform =
        `translate(${moveX}px, ${moveY}px)`;

});


// =====================================
// RESET NO BUTTON WHEN MOUSE LEAVES
// =====================================

noBtn.addEventListener("mouseleave", () => {

    setTimeout(() => {

        noBtn.style.transform = "translate(0, 0)";

    }, 500);

});


// =====================================
// YES BUTTON
// =====================================

yesBtn.addEventListener("click", () => {

    // Change title
    title.textContent = "Yippeeee! ❤️";


    // Change cat
    catImg.src = "cat_dance.gif";


    // Add final animation class
    document
        .querySelector(".letter-window")
        .classList.add("final");


    // Hide YES and NO buttons
    buttons.style.display = "none";


    // Show apology message
    finalText.style.display = "block";


    // Show NEXT button
    nextBtn.style.display = "inline-block";

});


// =====================================
// NEXT BUTTON
// =====================================

nextBtn.addEventListener("click", () => {

    window.location.href = "love-letter.html";

});
