// ===============================
// CONTACT.JS
// ===============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (email === "") {
            alert("Please enter your email.");
            return;
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (subject === "") {
            alert("Please enter the subject.");
            return;
        }

        if (message === "") {
            alert("Please enter your message.");
            return;
        }

        alert(
            "Thank you, " +
            name +
            "! Your message has been sent successfully."
        );

        contactForm.reset();

    });

}

// ===============================
// CONTACT INFORMATION
// ===============================

const callButton = document.getElementById("callBtn");

if (callButton) {

    callButton.addEventListener("click", () => {

        window.location.href = "tel:+911234567890";

    });

}

const emailButton = document.getElementById("emailBtn");

if (emailButton) {

    emailButton.addEventListener("click", () => {

        window.location.href =
            "mailto:info@tamilnadutourism.com";

    });

}

const locationButton = document.getElementById("locationBtn");

if (locationButton) {

    locationButton.addEventListener("click", () => {

        window.open(
            "https://maps.google.com/?q=Tamil+Nadu+Tourism",
            "_blank"
        );

    });

}

// ===============================
// END OF CONTACT.JS
// ===============================