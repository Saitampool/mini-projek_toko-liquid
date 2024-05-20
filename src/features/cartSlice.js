import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: "",
      nama: "",
      gambar: "",
      kategori: "",
      deskirpsi: "",
      harga: 0,
      kuantitas: 1
    },
  ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.kuantitas++;
      } else {
        state.items.push({ ...newItem, kuantitas: 1 });
      }
    },
    reduceQuantity(state, action) {
      const itemId = action.payload;
      const item = state.items.find(item => item.id === itemId);
      if (item && item.kuantitas > 1) {
        item.kuantitas--;
      }
    },
    removeItem(state, action) {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },
    clearCart: (state) => {
      state.items = [];
    },
    },
});

export const { addItem, removeItem, reduceQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;