import {Link} from "react-router-dom";

import emptyCartLogo from '../../assets/img/empty-cart.png';

export const CartEmpty = () => {
    return (
        <div className="cart cart--empty">
            <h2>Кошик порожній <span>😕</span></h2>
            <p>
                Найімовірніше, ви не замовляли ще піцу.<br/>
                Щоб замовити піцу, перейдіть на головну сторінку.
            </p>
            <img src={emptyCartLogo} alt="Empty cart"/>
            <Link to={'/'} className="button button--black">
                <span>Повернутися назад</span>
            </Link>
        </div>
    );
};