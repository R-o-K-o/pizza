import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Categories} from "../Categories/Categories";
import {Sort} from "../Sort/Sort";
import {PizzaCards} from "../PizzaCards/PizzaCards";
import {Skeleton} from "../Skeleton/Skeleton";
import {Pagination} from "../Pagination/Pagination";

import {filterActions, pizzaActions} from "../../redux";

export const Pizzas = () => {
    const {pizzas, isLoading} = useSelector(state => state.pizzaReducer);
    const {categoryId, sortType, searchValue, currentPage} = useSelector(state => state.filterReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const params = {
            category: categoryId !== 0 ? categoryId : '',
            sortBy: sortType.sortProperty.replace('-', ''),
            order: sortType.sortProperty.includes('-') ? 'asc' : 'desc',
            search: searchValue,
            page: currentPage,
        };

        dispatch(pizzaActions.getAll({params}));

        window.scrollTo(0,0);

    }, [categoryId, sortType.sortProperty, currentPage, searchValue, dispatch]);

    const pizzaList = !searchValue ? pizzas : pizzas.filter(pizza => pizza.title.toLowerCase().includes(searchValue));

    const changeCategoryClick = (id) => dispatch(filterActions.setCategoryId(id));

    const changePageClick = (page) => dispatch(filterActions.setCurrentPage(page));

    const skeletons = [...new Array(6)].map((item, index) => <Skeleton key={index}/>);

    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={categoryId}
                            changeCategoryClick={changeCategoryClick}
                />
                <Sort sortType={sortType}/>
            </div>
            <h2 className="content__title">Усі піци</h2>
            <div className="content__items">
                {
                    isLoading
                        ? skeletons
                        : <PizzaCards pizzas={pizzaList}/>
                }
            </div>
            {
                !categoryId && <Pagination currentPage={currentPage}
                                           changePageClick={changePageClick}
                               />
            }
        </div>
    );
};