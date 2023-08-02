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

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(state);

    // Définir le message de confirmation
    setMessage("Votre demande a été envoyée.");
    setState({ nom: "", email: "", message: "" }); // Reset des champs du formulaire
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom:
        <input
          type="text"
          name="nom"
          value={state.nom}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Message:
        <textarea
          name="message"
          value={state.message}
          onChange={handleInputChange}
          required
        />
      </label>
      <button type="submit">Envoyer</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default page;
