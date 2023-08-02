"use client";

import { useState } from "react";
import "./Reviews.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteReview, editReview, saveReview } from "@/redux/feature/review";

function Page() {
  const reviews = useSelector((state) => state.review.reviews);
  const editingIndex = useSelector((state) => state.review.editingIndex);
  const dispatch = useDispatch();
  const [data, setData] = useState("");

  const handleEditReview = (index) => () => {
    dispatch(editReview({ id: index }));
    setData(reviews[index].review);
  };

  return (
    <div className="reviews-container">
      {reviews.map((review, index) => (
        <div key={index} className="review-item">
          <h2>{review.name}</h2>
          {editingIndex == index ? (
            <>
              <textarea
                className="review-input"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
              <button
                className="review-button"
                onClick={() => dispatch(saveReview(data))}
              >
                Sauvegarder
              </button>
            </>
          ) : (
            <>
              <p>{review.review}</p>
              <button
                className="review-button"
                onClick={handleEditReview(index)}
              >
                Modifier
              </button>
            </>
          )}
          <button
            className="review-button-supp"
            onClick={() => dispatch(deleteReview(index))}
          >
            Supprimer
          </button>
        </div>
      ))}
    </div>
  );
}

export default Page;
