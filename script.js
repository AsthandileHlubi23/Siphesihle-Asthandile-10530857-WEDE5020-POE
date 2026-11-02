// Display a welcome message
console.log("Welcome to Hlubi's Green Harvest Farm!");

function filterProducts() {
    let input = document.getElementById("searchInput").value.toLowerCase();

    let products = document.querySelectorAll(".product");

    products.forEach(function(product) {
        let productName = product.textContent.toLowerCase();

        if (productName.includes(input)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
}


// Enquiry form validation
document.getElementById("enquiryForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("enquiryName").value.trim();
    let email = document.getElementById("enquiryEmail").value.trim();
    let type = document.getElementById("enquiryType").value;
    let product = document.getElementById("product").value;
    let message = document.getElementById("enquiryMessage").value.trim();

    let response = document.getElementById("enquiryResponse");

    if (name === "" || email === "" || type === "" || product === "" || message === "") {
        response.textContent = "Please complete all the fields.";
    } else {
        response.textContent = "Thank you! Your enquiry has been prepared successfully.";

        let subject = encodeURIComponent("Farm Enquiry: " + type);
        let body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\nEnquiry Type: " + type +
            "\nProduct: " + product +
            "\nMessage: " + message
        );

        window.location.href = "mailto:info@hlubigreenharvest.co.za?subject=" + subject + "&body=" + body;
    }
});
// Contact Form AJAX Submission
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const formMessage = document.getElementById("formMessage");

        formMessage.textContent = "Sending your message...";
        formMessage.style.color = "blue";

        try {
            const formData = new FormData(contactForm);

            const response = await fetch(
                "https://formsubmit.co/ajax/asthandilesphesihle07@gmail.com",
                {
                    method: "POST",
                    headers: {
                        "Accept": "application/json"
                    },
                    body: formData
                }
            );

            const result = await response.json();

            if (response.ok && result.success) {
                formMessage.textContent =
                    "Thank you! Your message has been sent successfully.";
                formMessage.style.color = "green";
                contactForm.reset();
            } else {
                throw new Error("Submission failed");
            }

        } catch (error) {
            formMessage.textContent =
                "Sorry, your message could not be sent. Please try again.";
            formMessage.style.color = "red";
        }
    });
}

// Image gallery lightbox
const galleryImages = document.querySelectorAll(".gallery-container img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.querySelector(".close-lightbox");

galleryImages.forEach(function(image) {
    image.addEventListener("click", function() {
        lightbox.style.display = "flex";
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
    });
});

if (closeLightbox) {
    closeLightbox.addEventListener("click", function() {
        lightbox.style.display = "none";
    });
}

if (lightbox) {
    lightbox.addEventListener("click", function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
}

// Display the latest farm update
const updateMessage = document.getElementById("updateMessage");

if (updateMessage) {
    updateMessage.textContent =
        "Our farm is preparing fresh fruits, vegetables, maize and eggs for our customers. Visit our Products page to explore our fresh produce!";
}
// FAQ Accordion
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(function(button) {
    button.addEventListener("click", function() {
        const panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});
// Product Tabs
function showTab(category) {
    const products = document.querySelectorAll(".product");

    products.forEach(function(product) {
        const heading = product.querySelector("h3");

        if (heading && heading.textContent.toLowerCase().includes(category)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
