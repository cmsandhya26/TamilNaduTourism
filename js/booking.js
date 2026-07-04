// ===============================
// BOOKING.JS
// ===============================

// Select all booking buttons
const bookingButtons = document.querySelectorAll(
    ".book-btn, .package-btn"
);

// Booking Event
bookingButtons.forEach(button => {

    button.addEventListener("click", (e) => {

        e.preventDefault();

        const destination =
            button.closest(".package-card")
            ?.querySelector("h3")?.innerText || "Tamil Nadu Tour";

        const confirmBooking = confirm(
            `Do you want to book "${destination}"?`
        );

        if (confirmBooking) {

            alert(
                "Your booking request has been submitted successfully!"
            );

            // Redirect to Booking Page
            window.location.href = "booking.html";

        }

    });

});

// ===============================
// BOOKING FORM
// ===============================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const destination =
            document.getElementById("destination").value;

        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            destination === ""
        ) {

            alert("Please fill all the fields.");

            return;

        }

        alert(
            `Thank you ${name}!\n\nYour trip to ${destination} has been booked successfully.`
        );

        bookingForm.reset();

    });

}

// ===============================
// QUICK BOOK BUTTON
// ===============================

const quickBook = document.getElementById("quickBook");

if (quickBook) {

    quickBook.addEventListener("click", () => {

        window.location.href = "booking.html";

    });

}