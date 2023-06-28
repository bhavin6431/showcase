import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: '',
    isLoggedIn: false
}

const authSlice = createSlice({
    name: "auth-slice",
    initialState,
    reducers: {
        login(state, action) {
            state.isLoggedIn = true
            state.username = action.payload.username
        },
        logout(state, action) {
            state.isLoggedIn = false
            state.username = ''
        }

    }
})

export const authActions = authSlice.actions
export default authSlice.reducer