const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("active"));
});

document.getElementById("year").textContent = new Date().getFullYear();

const arrival = document.getElementById("arrival");
const departure = document.getElementById("departure");
const today = new Date().toISOString().split("T")[0];
arrival.min = today;
departure.min = today;

arrival.addEventListener("change", () => {
  departure.min = arrival.value;
});

document.getElementById("bookingForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const arrivalDate = arrival.value;
  const departureDate = departure.value;
  const guests = document.getElementById("guests").value;
  const message = document.getElementById("message").value.trim();

  const text = `Hello Island Keys Rentals!

I would like to make a booking inquiry.

Name: ${name}
Email: ${email}
Arrival Date: ${arrivalDate}
Departure Date: ${departureDate}
Guests: ${guests}

Message:
${message || "No additional message."}

I am interested in the 7-Day Stay & Drive Package.`;

  window.open(`https://wa.me/12468517895?text=${encodeURIComponent(text)}`, "_blank");
  event.target.reset();
});
