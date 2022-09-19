import {createSlice} from "@reduxjs/toolkit";

import {calcTotalPrice, findItem} from "../../utils";

const initialState = {
    items: [],
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            // const findItem = state.items.find(item => {
            //     return (
            //         item.id === id &&
            //         item.size === size &&
            //         item.type === type
            //     );
            // });

            const foundItem = findItem(state.items, action.payload);

            if (foundItem) {
                foundItem.count++;
            } else {
                state.items.push(
                    {
                        ...action.payload,
                        count: 1,
                    }
                );
            }

            // state.totalPrice = state.items.reduce((sum, item) => {
            //     return (item.price * item.count) + sum;
            // }, 0);

            state.totalPrice = calcTotalPrice(state.items);
        },

        minusItem: (state, action) => {
            const foundItem = findItem(state.items, action.payload);

            if (foundItem) {
                foundItem.count--;
            }
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(item => {
                return (
                    item.id !== action.payload.id ||
                    item.size !== action.payload.size ||
                    item.type !== action.payload.type
                );
            });

            state.totalPrice = calcTotalPrice(state.items);
        },

        clearItems: (state) => {
            state.items = [];
            state.totalPrice = 0;
        },
    },
});

const {
    reducer: cartReducer,
    actions: {
        addItem,
        minusItem,
        removeItem,
        clearItems
    }
} = cartSlice;

const cartActions = {
    addItem,
    minusItem,
    removeItem,
    clearItems,
};

export {cartReducer, cartActions};