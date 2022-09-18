import ReactPaginate from "react-paginate";

import styles from './Pagination.module.scss';

export const Pagination = ({currentPage, changePageClick}) => {
    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={event => changePageClick(event.selected + 1)}
            pageRangeDisplayed={5}
            pageCount={2}
            forcePage={currentPage - 1}
        />
    );
};