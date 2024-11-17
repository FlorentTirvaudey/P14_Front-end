import { createSlice } from "@reduxjs/toolkit";

const storedUser = localStorage.getItem('user');

const initialState = storedUser ? {
    users: JSON.parse(storedUser),
} : {
    users: [],
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);

            localStorage.setItem('user', JSON.stringify(state.users));
        },
    }
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;