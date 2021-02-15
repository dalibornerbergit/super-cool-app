const Pagination = ({ pageNum, handlePage }) => {
    const handlePageDecrement = () => {
        handlePage(pageNum - 1);
    }
    const handlePageIncrement = () => {
        handlePage(pageNum + 1);
    }

    return (
        <ul className="pagination">
            <li className="page-item">
                <button className="page-link" onClick={handlePageDecrement} >
                    Prev
               </button>
            </li>
            <li className="page-item">
                <button className="page-link active">
                    {pageNum + 1}
                </button>
            </li>
            <li className="page-item">
                <button className="page-link" onClick={handlePageIncrement} >
                    Next
               </button>
            </li>
        </ul>
    );
}

export default Pagination;