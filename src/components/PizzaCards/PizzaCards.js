import {PizzaCard} from "../PizzaCard/PizzaCard";

export const PizzaCards = ({pizzas}) => {
    return (
        <>
            {
                pizzas.map(pizza => <PizzaCard key={pizza.id}
                                               pizza={pizza}
                />
                )
            }
        </>
    );
};