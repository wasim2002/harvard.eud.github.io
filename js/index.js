//  -------------- for toggle menu -----------
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}

// animate number 

const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 200;

counterNum.forEach((curElem) => {

    const updateNumber = () => {
        const targetNumber = parseInt(curElem.dataset.number);
        //    console.log(targetNumber);
        const initialNum = parseInt(curElem.innerText);
        // console.log(initialNum);

        const incrementNumber = Math.trunc(targetNumber / speed);
        // console.log(incrementNumber);

        if (initialNum < targetNumber) {
            curElem.innerText = `${initialNum + incrementNumber}+`;
            setTimeout(updateNumber, 15);
        }
    };

    updateNumber();
});

//---------------- scroll to top button -------------------

// scroll to top ko javascript se ham kuch es tarah se bana sakte hai 

const header = document.querySelector(".header")

const footerElem = document.querySelector(".footer-section");

const scrollTotop = document.createElement("div");
scrollTotop.classList.add("scrolltotop-style");

scrollTotop.innerHTML = `<ion-icon name="arrow-up-outline" class="scrolltop"></ion-icon>`;

footerElem.after(scrollTotop);

const scrollTop = () => {
    header.scrollIntoView({ behavior: "smooth" })
}

scrollTotop.addEventListener("click", scrollTop)
