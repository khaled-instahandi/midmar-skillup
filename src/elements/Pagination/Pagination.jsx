import React, { useState } from 'react';
import './Pagination.css';

const Pagination = ({ totalPages, onPageChange, itemsPerPage, totalItems }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const goToPrevPage = () => {
    const newPage = Math.max(currentPage - 1, 1);
    setCurrentPage(newPage);
    onPageChange(newPage);
  };

  const goToNextPage = () => {
    const newPage = Math.min(currentPage + 1, totalPages);
    setCurrentPage(newPage);
    onPageChange(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="pagination">
      <span className="pagination-info">
        Showing {startIndex} to {endIndex} of {totalItems} entries
      </span>
      <div className="pagination-data">
        <button
          className={`pagination-item ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={goToPrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {[...Array(totalPages).keys()].map((n) => {
          const pageNumber = n + 1;
          return (
            <button
              key={pageNumber}
              className={`pagination-item ${currentPage === pageNumber ? 'active' : ''}`}
              onClick={() => changePage(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className={`pagination-item ${currentPage === totalPages ? 'disabled' : ''}`}
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

    </div>
  );
};

export default Pagination;
