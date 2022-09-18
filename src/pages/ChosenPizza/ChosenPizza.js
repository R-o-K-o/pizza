import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";

import {PizzaDetails} from "../../components";

import {pizzaService} from "../../services";


export const ChosenPizza = () => {
    const {id} = useParams();
    const {state} = useLocation();
    const [pizza, setPizza] = useState({});
    // console.log(state)

    useEffect(() => {
        if (state) {
            setPizza(state);
        }
        else {
            pizzaService.getById(id).then(({data}) => setPizza(data));
        }

    }, [id, state]);

    return (
        <div className="container">
            <PizzaDetails pizza={pizza}/>
        </div>
    );
};