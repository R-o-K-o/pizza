export const Category = ({category: {id, title}, activeCategory, changeCategoryClick}) => {
    return (
        <li
            onClick={() => changeCategoryClick(id)}
            className={activeCategory === id ? 'active' : ''}
        >
            {title}
        </li>
    );
};