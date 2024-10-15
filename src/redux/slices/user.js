import { createSlice } from "@reduxjs/toolkit";

const storedUser = localStorage.getItem('user');

const testPourStateinitial = {
    users: [],
}; 

const storeInitialStateParse = {
    users: JSON.parse(storedUser),
}; 

console.log("conparaison storedUser", JSON.parse(storedUser))
console.log("comparaison initial state", testPourStateinitial)
console.log("comparaison initial state pour parse", storeInitialStateParse)

const initialState = storedUser ? {
    users: JSON.parse(storedUser),
} : {
    users: [],
};

// console.log("initialState", initialState)

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

// logique reducers --> addUser, updateUsers?, removeUsers?
export const { addUser } = userSlice.actions;

export default userSlice.reducer;