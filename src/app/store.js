import { configureStore } from "@reduxjs/toolkit";
import icecreamReducer from "../features/icecream/icecreamSlice";

const store = configureStore({
    reducer: {
        icecream: icecreamReducer
    }
})

export default store;