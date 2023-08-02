"use client";

import "./ContactPage.css";
import { useState } from "react";

function page() {
  const [state, setState] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const [errorNom, setErrorNom] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (state.nom === "") {
      setErrorNom("Veuillez entrer un nom.");
    } else {
      setErrorNom("");
    }
    if (state.message === "") {
      setErrorMessage("Veuillez entrer un message.");
    } else {
      setErrorMessage("");
    }
    if (!validateEmail(state.email)) {
      setErrorEmail("Veuillez entrer une adresse email valide.");
    } else {
      setErrorEmail("");
    }

    if (state.nom !== "" && validateEmail(state.email) && state.message !== "") {
      // Définir le message de confirmation
      setSuccessMessage("Votre demande a été envoyée.");

      // Reset des champs du formulaire
      setState({ nom: "", email: "", message: "" }); 
    }
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
          {errorNom && <p style={{ color: 'red' }}>{errorNom}</p>}
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
          {errorEmail && <p style={{ color: 'red' }}>{errorEmail}</p>}
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={state.message}
            onChange={handleInputChange}
          />
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </label>
        <button type="submit">Envoyer</button>
        {successMessage && <p style={{ color: 'darkgreen', marginTop: '5px', fontSize:'30px'}}>{successMessage}</p>}
      </form>
    </div>
  );
}

export default page;
