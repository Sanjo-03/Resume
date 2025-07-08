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
    const res = await fetch("https://your-backend-url.com/contact", {
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
