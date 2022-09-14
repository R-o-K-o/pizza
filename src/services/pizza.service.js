import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const pizzaService = {
    getAll: (category, sortBy, order, page) => axiosService.get(urls.pizzas, {
            params: {
                page,
                limit: 5,
                category,
                sortBy,
                order
            }
        }
    ),
    getById: (id) => axiosService.get(`${urls.pizzas}/${id}`),
};