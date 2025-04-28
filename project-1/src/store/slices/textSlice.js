import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
    name: "text",
    initialState: {
        title: "Buongiorno mondo",
        text: "facendo l'esercizio di redux",
    },
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setText: (state, action) => {
            state.text = action.payload;
        },
    },
});

export const { setTitle, setText } = textSlice.actions;
export default textSlice.reducer;