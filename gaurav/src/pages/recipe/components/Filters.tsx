import Select from "@/components/ui/Select";
import { ChevronDown } from "lucide-react";

interface IFiltersProps {
  categories: string[];
  selectedCategory: string;
  handleCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  areas: string[];
  selectedArea: string;
  handleAreaChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const Filters = ({
  categories,
  selectedCategory,
  handleCategoryChange,
  areas,
  selectedArea,
  handleAreaChange,
}: IFiltersProps) => {
  return (
    <div className="gap-2 flex justify-end items-center mt-2">
      <div className="relative w-full">
        <Select
          title="Select Category"
          id="category-select"
          options={categories.map((category) => ({ value: category, label: category }))}
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="appearance-none px-1 text-xs h-8"
        />
        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 pr-1 pointer-events-none" />
      </div>
      <div className="relative w-full">
        <Select
          title="Select Area"
          id="area-select"
          options={areas.map((area) => ({ value: area, label: area }))}
          value={selectedArea}
          onChange={handleAreaChange}
          className="appearance-none px-2 text-xs h-8"
        />
        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 pr-1 pointer-events-none" />
      </div>
    </div>
  );
};
