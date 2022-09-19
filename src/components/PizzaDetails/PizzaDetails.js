import styles from './PizzaDetails.module.scss';

import {Skeleton} from "../Skeleton/Skeleton";

export const PizzaDetails = ({pizza: {title, imageUrl}}) => {
    return (
        <div className={styles.pizza_details_wrapper}>
            {
                !imageUrl
                    ? <Skeleton/>
                    : <div className={styles.pizza_card}>
                        <img
                            className={styles.pizza_card__image}
                            src={imageUrl}
                            alt="Pizza"
                        />
                        <h4 className={styles.pizza_card__title}>{title}</h4>
                        <p className={styles.pizza_card__description}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Alias, animi asperiores aspernatur at
                            deleniti illum in, ipsa ipsam itaque labore
                            nesciunt perferendis, possimus provident recusandae
                            repellendus velit voluptatem.
                        </p>
                    </div>
            }
        </div>
    );
};