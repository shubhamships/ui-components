import Button from "@/components/ui/personal/Button";
import { ChevronLeft, ChevronRight, Divide } from "lucide-react";
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
  };

  let pages = [];
  for (let i = 1; i <= Math.ceil(totalRecipe / totalRecipePerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className="mt-4 pb-10">
        <div className="flex justify-center items-center bg-white rounded-md p-1 mx-8 md:mx-16 lg:mx-96 ">
          {currentPage > 1 && (
            <Button
              title=""
              className="rounded-sm -px-2 text-center hover:bg-black hover:text-white"
              variant="ghost"
              onClick={() => handlePages(currentPage - 1)}
              iconName={<ChevronLeft />}
            />
          )}
          {pages.map((page, index) => (
            <span key={index} className="mx-1">
              <Button
                onClick={() => handlePages(index)}
                title={`${page}`}
                variant="ghost"
                size="xs"
                className="hover:bg-black hover:text-white text-xs"
              />
            </span>
          ))}
          <Button
            title=""
            className="rounded-sm -px-2 text-center hover:bg-black hover:text-white"
            variant="ghost"
            size="xs"
            onClick={() => handlePages(currentPage + 1)}
            iconName={
              <span className="-px-2">
                <ChevronRight />
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
};
