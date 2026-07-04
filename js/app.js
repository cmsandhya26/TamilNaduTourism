// ==============================
// APP.JS
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Tamil Nadu Tourism Website Loaded Successfully!");

    // ==========================
    // Explore Button
    // ==========================

    const exploreBtn = document.querySelector(".explore-btn");

    if (exploreBtn) {

        exploreBtn.addEventListener("click", () => {

            window.location.href = "attractions.html";

        });

    }

    // ==========================
    // Book Button
    // ==========================

    const bookBtn = document.querySelector(".book-btn");

    if (bookBtn) {

        bookBtn.addEventListener("click", () => {

            window.location.href = "booking.html";

        });

    }

    // ==========================
    // Newsletter Form
    // ==========================

    const newsletter = document.getElementById("newsletterForm");

    if (newsletter) {

        newsletter.addEventListener("submit", (e) => {

            e.preventDefault();

            const email =
                newsletter.querySelector("input").value;

            if (email === "") {

                alert("Please enter your email.");

                return;

            }

            alert("Thank you for subscribing!");

            newsletter.reset();

        });

    }

    // ==========================
    // Card Animation
    // ==========================

    const cards = document.querySelectorAll(
        ".card,.package-card,.experience-card,.testimonial-card"
    );

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-10px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0px)";

        });

    });

    // ==========================
    // Scroll To Top Button
    // ==========================

    const topBtn = document.createElement("button");

    topBtn.innerHTML = "↑";

    topBtn.id = "topBtn";

    document.body.appendChild(topBtn);

    topBtn.style.cssText = `
        position:fixed;
        bottom:30px;
        right:30px;
        width:50px;
        height:50px;
        border:none;
        border-radius:50%;
        background:#8d63ff;
        color:white;
        font-size:22px;
        cursor:pointer;
        display:none;
        z-index:999;
        box-shadow:0 8px 20px rgba(0,0,0,.3);
    `;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

});