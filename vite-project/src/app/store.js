import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../userSlice'
import sellerReducer from '../userSeller'
import cartReducer from '../cartslice.js'
export const store = configureStore({
  reducer:{
    user: userReducer,
    seller: sellerReducer,
    cart : cartReducer ,
  }
})

export default store