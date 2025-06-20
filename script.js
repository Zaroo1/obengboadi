// script.js

document.getElementById("appointmentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  fetch("https://script.google.com/macros/s/[YOUR_SCRIPT_URL]/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => res.text())
    .then((msg) => {
      document.getElementById("responseMsg").textContent = "Appointment sent successfully!";
      form.reset();
    })
    .catch((err) => {
      document.getElementById("responseMsg").textContent = "Error sending appointment. Please try again.";
    });
});