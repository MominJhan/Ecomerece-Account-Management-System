import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loginAndNavigate = createAsyncThunk(
  'user/loginAndNavigate',
  async ({ userData, navigate }, { dispatch }) => {
    const { role } = userData;
    dispatch(loginUser(userData));
    if (role === 'admin') {
      navigate('/admin', { state: { role } }); 
    } else if (role === 'seller') {
      navigate('/seller', { state: { role } });
    } else {
      navigate('/customer', { state: { role } });
    }
  }
);



const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
