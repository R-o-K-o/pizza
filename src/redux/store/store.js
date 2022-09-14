import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {pizzaReducer} from "../slices";

const rootReducer = combineReducers({
    pizzaReducer,
});

export const store = configureStore({
    reducer: rootReducer
});