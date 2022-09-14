import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Categories} from "../Categories/Categories";
import {Sort} from "../Sort/Sort";
import {PizzaCards} from "../PizzaCards/PizzaCards";
import {Skeleton} from "../Skeleton/Skeleton";
import {Pagination} from "../Pagination/Pagination";

import {pizzaActions} from "../../redux";

export const Pizzas = () => {
    const {pizzas, isLoading} = useSelector(state => state.pizzaReducer);
    const [categoryId, setCategoryId] = useState(0);
    const [sort, setSort] = useState({id: 1, title: 'популярності ⬆', sortProperty: 'rating'});
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        const params = {
            category: categoryId > 0 ? categoryId : '',
            sortBy: sort.sortProperty.replace('-', ''),
            order: sort.sortProperty.includes('-') ? 'asc' : 'desc',
            page: currentPage,
        };

        dispatch(pizzaActions.getAll({params}))

        window.scrollTo(0,0);
    }, [categoryId, sort.sortProperty, currentPage]);


    const onChangeCategory = (id) => setCategoryId(id);

    const onChangeSort = (sort) => setSort(sort);

    const handlePageClick = (page) => setCurrentPage(page);

    const skeletons = [...new Array(6)].map((item, index) => <Skeleton key={index}/>);

    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={categoryId} onChangeCategory={onChangeCategory}/>
                <Sort sort={sort} onChangeSort={onChangeSort}/>
            </div>
            <h2 className="content__title">Усі піци</h2>
            <div className="content__items">
                {
                    isLoading
                        ? skeletons
                        : <PizzaCards pizzas={pizzas}/>
                }
            </div>
            {
                !categoryId && <Pagination currentPage={currentPage} handlePageClick={handlePageClick}/>
            }
        </div>
    );
};