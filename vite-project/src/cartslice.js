import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  product: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find(item => item.productid === product.productid);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    updateCartQuantity: (state, action) => {
      const { productid, newQuantity } = action.payload;
      const product = state.cart.find(item => item.productid === productid);
      if (product) {
        product.quantity = newQuantity;
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeItemCart: (state, action) => {
    const productid = action.payload
    state.cart = state.cart.filter((item)=>item.productid !== productid)
     localStorage.setItem('cart' , JSON.stringify(state.cart))
    }
  },
});

export const { addToCart, updateCartQuantity, removeItemCart } = cartSlice.actions;
export default cartSlice.reducer;
