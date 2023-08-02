"use client";

import "./ContactPage.css";
import { useState } from "react";

function page() {
  const [state, setState] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    var re =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(state.email)) {
      setMessage("Veuillez entrer une adresse email valide.");
      return;
    }

    console.log(state);

    // Définir le message de confirmation
    setMessage("Votre demande a été envoyée.");
    setState({ nom: "", email: "", message: "" }); // Reset des champs du formulaire
  };

  return (
    <div>
      <h1 className="text-contact">Contactez-moi !!</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Nom:
        <input
          type="text"
          name="nom"
          value={state.nom}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Message:
        <textarea
          name="message"
          value={state.message}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Envoyer</button>
      {message && <p>{message}</p>}
    </form>
    </div>
  );
}

export default page;
