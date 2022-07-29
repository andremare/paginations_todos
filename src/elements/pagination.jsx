import React, {useState} from 'react';
import _ from "lodash"

const Pagination = ({items, onPageChange, currentPage, todosOnPage}) => {
    const totalTodos = items.length
    const range = _.range(1, Math.ceil(totalTodos / todosOnPage + 1))
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {range.map((page) => <li className="page-item" key={page}>
                    <a className={"page-link" + (page === currentPage ? " active" : "") } onClick={() => onPageChange(page)}>{page}</a>
                </li>)}
            </ul>
        </nav>
    );
};
export default Pagination;
