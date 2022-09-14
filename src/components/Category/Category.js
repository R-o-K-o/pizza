export const Category = ({category: {id, title}, activeCategory, onChangeCategory}) => {
    return (
        <li
            onClick={() => onChangeCategory(id)}
            className={activeCategory === id ? 'active' : ''}
        >
            {title}
        </li>
    );
};