import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    categoryId: 0,
    sortType: {
        id: 1,
        title: 'популярності ⬆',
        sortProperty: 'rating',
    },
    searchValue: '',
    currentPage: 1,
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId: (state, action) => {
            state.categoryId = action.payload;
        },

        setSortType: (state, action) => {
            state.sortType = action.payload;
        },

        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },

        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },

        resetFilters: (state) => {
            state.categoryId = 0;
            state.sortType = {
                id: 1,
                title: 'популярності ⬆',
                sortProperty: 'rating',
            };
            state.searchValue = '';
            state.currentPage = 1;
        },
    },
});

const {
    reducer: filterReducer,
    actions: {
        setCategoryId,
        setSortType,
        setSearchValue,
        setCurrentPage,
        resetFilters,
    }
} = filterSlice;

const filterActions = {
    setCategoryId,
    setSortType,
    setSearchValue,
    setCurrentPage,
    resetFilters,
};

export {filterReducer, filterActions};