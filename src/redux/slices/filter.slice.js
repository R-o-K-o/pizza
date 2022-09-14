import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    searchValue: '',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
          state.searchValue = action.payload;
        },
    },
    extraReducers: {}
});

const {reducer: filterReducer, actions: {setSearchValue}} = filterSlice;

export const filterActions = {
    setSearchValue,
};

export {filterReducer};