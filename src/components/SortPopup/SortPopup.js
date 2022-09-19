import {sortList} from "../Sort/Sort";

export const SortPopup = ({sortType ,sortItemClick}) => {
    return (
        <ul>
            {
                sortList.map(sortItem =>
                    <li
                        onClick={() => sortItemClick(sortItem)}
                        className={sortType.sortProperty === sortItem.sortProperty ? 'active' : ''}
                        key={sortItem.id}
                    >
                        {sortItem.title}
                    </li>
                )
            }
        </ul>
    );
};