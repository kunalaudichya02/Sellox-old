import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCards: [],
  currentId: {},
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setAllCards: (state, action) => {
      state.currentCards = action.payload;
    },
    setCurrentCard: (state, action) => {
      state.currentId = action.payload;
    },
  },
});

export const { setAllCards, setCurrentCard } = cardSlice.actions;

export default cardSlice.reducer;
