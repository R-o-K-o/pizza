import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {cartReducer, filterReducer, pizzaReducer} from "../slices";

const rootReducer = combineReducers({
    pizzaReducer,
    filterReducer,
    cartReducer,
});

export const store = configureStore({
    reducer: rootReducer
});