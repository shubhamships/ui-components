import { useState } from "react";

interface IPagination {
  totalRecipe: number;
  totalRecipePerPage: number;
  setCurrentPages : React.Dispatch<React.SetStateAction<number>>
}
export const Pagination = ({ totalRecipe, totalRecipePerPage, setCurrentPages }: IPagination) => {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePages = (page: number) => {
    setCurrentPage(page);
    setCurrentPages(page);
  }
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalRecipe / totalRecipePerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className="flex justify-center items-center mt-10 pb-10">
        {currentPage > 1 && <button className="bg-gray-300 px-3 py-1 rounded-lg mx-1" onClick={() => handlePages(currentPage - 1)}>Prev</button>}
        {pages.map((page, index) => (
          <span key={index} className="mx-1">
            <button onClick={() => handlePages(index)}>{page}</button>
          </span>
        ))}
        <button className="bg-gray-300 px-3 py-1 rounded-lg mx-1" onClick={() => handlePages(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
};
