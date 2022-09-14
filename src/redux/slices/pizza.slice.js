import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {pizzaService} from "../../services";

const initialState = {
    pizzas: [],
    isLoading: true,
};

const getAll = createAsyncThunk(
    'pizza/getAll',
    async ({params}) => {
        try {
            const {category, sortBy, order, page} = params;

            const {data} = await pizzaService.getAll(category, sortBy, order, page);
            return data;
        }
        catch (err) {
            console.log(err.message);
        }
    }
);

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.pizzas = action.payload;
                state.isLoading = false;
            })
    }
});

const {reducer: pizzaReducer} = pizzaSlice;

export const pizzaActions = {
    getAll,
};

export {pizzaReducer};
