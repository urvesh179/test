import { createSlice } from '@reduxjs/toolkit'

interface userState {
  userData: {
    firstname : string,
    lastname: string,
    email: string,
    token: string,
    mobile : string,
    isAuthenticated: boolean
  }
}

const initialState: userState = {
  userData: {
    firstname: "",
    lastname : "",
    email: "",
    token: "",
    mobile : "",
    isAuthenticated: false
  }
}

const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    sigin: (state, action) => {
      state.userData = action.payload;
    },
    signup: (state, action) => {
      state.userData = action.payload;
    }
  },
})

export const { sigin, signup, } = userSlice.actions
export default userSlice.reducer