import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface IPagination {
  totalRecipe: number;
  totalRecipePerPage: number;
  setCurrentPages: React.Dispatch<React.SetStateAction<number>>;
}
export const Pagination = ({ totalRecipe, totalRecipePerPage, setCurrentPages }: IPagination) => {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePages = (page: number) => {
    setCurrentPage(page);
    setCurrentPages(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let pages = [];
  for (let i = 1; i <= Math.ceil(totalRecipe / totalRecipePerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className="flex justify-center items-center mt-4 pt-10 pb-10">
        <div className="flex justify-center items-center bg-white rounded-md py-1 md:mx-8 lg:mx-16">
          {currentPage > 1 && (
            <button
              className="rounded-sm px-2 text-center hover:bg-black hover:text-white"
              onClick={() => handlePages(currentPage - 1)}
            >
              <ChevronLeft />
            </button>
          )}
          {pages.map((page, index) => (
            <span key={index} className="mx-1">
              <button
                onClick={() => handlePages(page)}
                className={`hover:bg-black hover:text-white text-xs px-2 py-1 rounded-sm ${
                  currentPage === page ? "bg-black text-white" : ""
                }`}
              >
                {page}
              </button>
            </span>
          ))}
          {currentPage < pages.length && (
            <button
              className="rounded-sm px-2 text-center hover:bg-black hover:text-white"
              onClick={() => handlePages(currentPage + 1)}
            >
              <ChevronRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
