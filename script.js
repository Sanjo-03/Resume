// Handle contact form submission
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  formMessage.textContent = "Sending message...";

  try {
    const res = await fetch("https://resume-4ek1.onrender.com/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    formMessage.textContent = data.message;
    if (data.success) form.reset();
  } catch (err) {
    formMessage.textContent = "Something went wrong. Try again later.";
  }
});


// Toggle "Show Details" buttons
document.querySelectorAll(".toggle-btn").forEach(button => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    const isHidden = details.classList.contains("hidden");

    if (isHidden) {
      details.classList.remove("hidden");
      button.textContent = "Hide Details";
    } else {
      details.classList.add("hidden");
      button.textContent = "Show Details";
    }
  });
});
