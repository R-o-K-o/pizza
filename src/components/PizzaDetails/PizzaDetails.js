import styles from './PizzaDetails.module.scss';

export const PizzaDetails = ({pizza: {title, imageUrl, types, sizes}}) => {
    return (
        <div className={styles.pizza_details_wrapper}>
            <div className={styles.pizza_card}>
                <img
                    className={styles.pizza_card__image}
                    src={imageUrl}
                    alt="Pizza"
                />
                <h4 className={styles.pizza_card__title}>{title}</h4>
                <p className={styles.pizza_card__description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, animi asperiores aspernatur at
                    deleniti illum in, ipsa ipsam itaque labore nesciunt perferendis, possimus provident recusandae
                    repellendus velit voluptatem.
                </p>
            </div>
        </div>
    );
};