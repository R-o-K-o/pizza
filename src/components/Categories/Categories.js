import {Category} from "../Category/Category";

const categories = [
    {id: 0, title: "Всі"},
    {id: 1, title: "М'ясні"},
    {id: 2, title: "Вегетаріанські"},
    {id: 3, title: "Гриль"},
    {id: 4, title: "Гострі"},
    {id: 5, title: "Сирні"},
];

export const Categories = ({activeCategory, onChangeCategory}) => {
    return (
        <div className="categories">
            <ul>
                {
                    categories.map(category =>
                        <Category
                            key={category.id}
                            category={category}
                            activeCategory={activeCategory}
                            onChangeCategory={onChangeCategory}
                        />
                    )
                }
            </ul>
        </div>
    );
};