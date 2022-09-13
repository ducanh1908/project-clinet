const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      console.log(action);
      state.user = action.payload;
      localStorage.setItem("token", action.payload.user.token);
    },
    logout: (state, action) => {
      localStorage.removeItem("token");
    },
  },
});
export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
