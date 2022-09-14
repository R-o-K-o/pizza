import styles from './NotFound.module.scss'

export const NotFound = () => {
    return (
        <div className={styles.root}>
            <h1>
                <span>😕</span>
                <br/>
                Нічого не знайдено !
            </h1>
            <p className={styles.description}>
                Нажаль дана сторінка відсутня у нашому інтернет-магазині.
            </p>
        </div>
    );
};