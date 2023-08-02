import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [
    {
      name: "Unknown",
      review: "J'avais le plaisir de travailler avec Monsieur Meradji :)",
    },
  ],
  editingIndex: null,
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    addReview: (state, action) => {
      state.reviews.push(action.payload);
    },

    editReview: (state, action) => {
      state.editingIndex = action.payload.id;
    },

    saveReview: (state, action) => {
      state.reviews[state.editingIndex].review = action.payload;
      state.editingIndex = null;
    },

    deleteReview: (state, action) => {
      state.reviews.splice(action.payload, 1);
    },
  },
});

export const { addReview, editReview, deleteReview, saveReview } =
  reviewSlice.actions;

export default reviewSlice.reducer;
