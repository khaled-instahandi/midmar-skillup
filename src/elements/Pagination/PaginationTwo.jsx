import React, { useState } from 'react';
import './PaginationTwo.css';
const PaginationTwo = ({ currentPage, totalPages, onPageChange }) => {
  const generatePageNumbers = () => {
    const pageNumbers = [];
    const pageBuffer = 2; // How many pages to show around the current page

    if (totalPages <= 5 + (pageBuffer * 2)) {
      // Less than 5+2*2 total pages, show all page numbers
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // More pages than we want to show at once
      let startPage = Math.max(2, currentPage - pageBuffer);
      let endPage = Math.min(totalPages - 1, currentPage + pageBuffer);

      // Current page is near the start, no leading ellipsis
      if (currentPage <= 3 + pageBuffer) {
        endPage = 1 + (pageBuffer * 2);
      }

      // Current page is near the end, no trailing ellipsis
      if (currentPage > totalPages - (3 + pageBuffer)) {
        startPage = totalPages - (pageBuffer * 2);
      }

      // Always show the first page
      pageNumbers.push(1);

      // Show ellipsis if there's a gap between the first page and the start page
      if (startPage > 2) {
        pageNumbers.push('...');
      }

      // Show the current range
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      // Show ellipsis if there's a gap between the end page and the last page
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }

      // Always show the last page
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const paginationNumbers = generatePageNumbers();
  
    return (
      <div className="pagination-two">
        <button className='pre-text-paginationTwo' onClick={() => onPageChange(Math.max(currentPage - 1, 1))} disabled={currentPage === 1}>
          ‹ السابق 
        </button>
        {paginationNumbers.map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <span className="pagination-two-dots">{page}</span>
          ) : (
            <button
              className={`pagination-two-item ${currentPage === page ? 'active' : ''}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}
        <button className='next-text-paginationTwo' onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))} disabled={currentPage === totalPages}>
        التالي ›  
        </button>
      </div>
    );
  };
  
  export default PaginationTwo;