//import { Button } from "bootstrap";
import { useState } from "react";
//import { Link } from "react-router-dom"

const Pagination = ({ pageNum, itemsNum, handlePage }) => {

    const handlePageDecrement = () => {
        handlePage(pageNum - 1);
    }
    const handlePageIncrement = () => {
        handlePage(pageNum + 1);
    }

    return (
        <div>
            <ul>
                <li className="page-item">
                    <button className="page-link" onClick={handlePageDecrement} >
                        Previous
               </button>
                </li>
                <li className="page-item">
                    <button className="page-link active">
                        {pageNum+1}
                    </button>
                </li>
                <li className="page-item">
                    <button className="page-link" onClick={handlePageIncrement} >
                        Next
               </button>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;