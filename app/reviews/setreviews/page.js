"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addReview } from "@/redux/feature/review";
import { useRouter } from "next/navigation";
import "./SetReviews.css";

function page() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const submitReview = () => {
    // Vérification des validations
    if (name.trim() === "" || review.trim() === "") {
      setError("Veuillez remplir tous les champs");
      return;
    }

    // Save review to redux

    dispatch(addReview({ name, review }));

    // Redirection vers la page d'accueil

    router.push("/reviews/reviews");
  };

  return (
    <div className="set-reviews-container">
      <div>
        <h1 className="text-avis">Ajouter votre Avis</h1>
      </div>
      <input
        className="set-reviews-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nom"
      />
      <textarea
        className="set-reviews-input-avis"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Avis"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={submitReview} className="set-reviews-button">
        Soumettre
      </button>
    </div>
  );
}

export default page;
