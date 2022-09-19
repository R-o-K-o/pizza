import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";

import {PizzaDetails} from "../../components";

import {pizzaService} from "../../services";

export const ChosenPizza = () => {
    const {id} = useParams();
    const {state} = useLocation();
    const [pizza, setPizza] = useState({});

    useEffect(() => {
        if (state) {
            setPizza(state);
        }
        else {
            try {
                pizzaService.getById(id).then(({data}) => setPizza(data));
            }
            catch (err) {
                console.log(err.message);
            }
        }

    }, [id, state]);

    return (
        <div className="container">
            <PizzaDetails pizza={pizza}/>
        </div>
    );
};