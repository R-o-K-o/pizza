import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const pizzaService = {
    getAll: () => axiosService.get(urls.pizzas),
    getById: (id) => axiosService.get(`${urls.pizzas}/${id}`),
};