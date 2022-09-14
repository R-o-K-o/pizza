import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const pizzaService = {
    getAll: (category, sortBy, order) => axiosService.get(urls.pizzas, {
            params: {
                category,
                sortBy,
                order
            }
        }
    ),
    getById: (id) => axiosService.get(`${urls.pizzas}/${id}`),
};