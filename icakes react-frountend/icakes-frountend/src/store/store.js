import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices/homeSlicer.js";

export const store = configureStore({
    reducer: reducer
})

