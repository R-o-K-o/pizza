import {Categories} from "../Categories/Categories";
import {Sort} from "../Sort/Sort";
import {PizzaCards} from "../PizzaCards/PizzaCards";

export const Pizzas = () => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Усі піци</h2>
            <PizzaCards/>
        </div>
    );
};