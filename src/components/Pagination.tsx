"use client";
import React from "react";
import usePagination from "@lucasmogari/react-pagination";

interface PaginationProps {
  page: number;
  totalItems: number;
  perPage: number;
}

const Pagination = ({ page, totalItems, perPage }: PaginationProps) => {
  const { getPageItem, totalPages } = (usePagination as any)({
    totalItems: totalItems,
    page: page,
    itemsPerPage: perPage, // Fixed here
    maxPageItems: 3,
  });

  const firstPage = 1;
  // calculate the next page
  const nextPage = Math.min(page + 1, totalPages);
  // calculate the previous page
  const prevPage = Math.max(page - 1, firstPage);
  // create a new array based on the total pages
  const arr = new Array(totalPages + 2);

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      {[...arr].map((_, i) => {
        // getPageItem function returns the type of page based on the index.
        // it also automatically calculates if the page is disabled.
        const { page, disabled, current } = getPageItem(i);
        console.log("page", page);

        if (page === "previous") {
          return <span key={i}>{"<"}</span>;
        }
        if (page === "next") {
          return <span key={i}>{">"}</span>;
        }
        if (page === "gap") {
          return <span key={`${page}-${i}`}>...</span>;
        }
        return <span key={i}> {page} </span>;
      })}
    </div>
  );
};

export default Pagination;
