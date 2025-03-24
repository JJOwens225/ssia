document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let data = {
      nom: document.getElementById("nom").value,
      prenom: document.getElementById("prenom").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    console.log("Données envoyées :", data); // ✅ Debug

    fetch(
      "https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbz_I4juE6fjPojYHhWtko-B6m2sKLFC7aL-UnghsKGGSDeu4LlYLuDxh6A4fGAlCH2xRw/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.text())
      .then((data) => {
        alert("Message envoyé avec succès !");
        document.getElementById("contactForm").reset(); // Réinitialiser le formulaire après l'envoi
      })
      .catch((error) => console.error("Erreur:", error));
  });
