import ReactPaginate from "react-paginate";

import styles from './Pagination.module.scss';

export const Pagination = ({currentPage, handlePageClick}) => {
    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={event => handlePageClick(event.selected + 1)}
            pageRangeDisplayed={5}
            pageCount={2}
            forcePage={currentPage - 1}
        />
    );
};