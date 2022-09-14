import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {filterReducer, pizzaReducer} from "../slices";

const rootReducer = combineReducers({
    pizzaReducer,
    filterReducer,
});

export const store = configureStore({
    reducer: rootReducer
});