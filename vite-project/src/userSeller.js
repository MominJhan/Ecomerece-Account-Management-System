import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSellerAccount = createAsyncThunk(
  'seller/fetchSellerAccount',async () => {
    const response = await axios.get('http://localhost:3000/sellerAccount');
    return response.data;
  }
);

export const addSellerAccount = createAsyncThunk(
  'seller/addSellerAccount',async (newAccount) => {
    const response = await axios.post('http://localhost:3000/sellerAccount', newAccount);
    return response.data;
  }
);

export const deleteSellerAccount = createAsyncThunk(
    'seller/deleteSellerAccount',async(id)=>{
        await axios.delete(`http://localhost:3000/sellerAccount/${id}`)
        return id
    }
)
export const addProductAccount = createAsyncThunk(
  'seller/addProductAccount',
  async (newProduct) => {
    try {
      const response = await axios.get('http://localhost:3000/sellerAccount');
      const sellerAccounts = response.data;

      const existAccount = sellerAccounts.find(account => account.companyName === newProduct.companyName);

      if (existAccount) {
        const updatedAccount = {
          ...existAccount,
          products: [
            ...(existAccount.products || []),
            {
              productid: new Date(),
              productName: newProduct.productName,
              price: newProduct.price,
              quantity: newProduct.quantity,
              attribute: newProduct.attribute,
            }
          ]
        };

        const response = await axios.put(`http://localhost:3000/sellerAccount/${existAccount.id}`, updatedAccount);
        return response.data;
      }
    } catch (error) {
      return (error.message);
    }
  }
);


const accountslice = createSlice({
  name: 'seller',
  initialState: {
    accounts: [],
    loading: false,
    error: null, 
  },
  reducers: {}, 
  extraReducers: (builder) => {
    builder
    .addCase(fetchSellerAccount.pending,(state)=>{
    state.loading = true
    })
    .addCase(fetchSellerAccount.fulfilled,(state,action)=>{
        state.loading = false
        state.accounts = action.payload
    })
    .addCase(fetchSellerAccount.rejected,(state,action)=>{
       state.loading = false;
       state.error = action.error.payload
    })
    .addCase(addSellerAccount.fulfilled,(state,action)=>{
        state.accounts.push(action.payload)
    })
    .addCase(deleteSellerAccount.fulfilled,(state,action)=>{
        state.accounts = state.accounts.filter((account)=>account.id !== action.payload)
    })
  },
});

export default accountslice.reducer;
