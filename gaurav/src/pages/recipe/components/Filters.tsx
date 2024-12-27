import Select from "@/components/ui/Select";
import { ChevronDown } from "lucide-react";

interface IFiltersProps {
  categories: string[];
  selectedCategory: string;
  handleCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  areas: string[];
  selectedArea: string;
  handleAreaChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  categoryTitle: string;
  areaTitle: string;
}
export const Filters = ({
  categories,
  selectedCategory,
  handleCategoryChange,
  areas,
  selectedArea,
  handleAreaChange,
}: IFiltersProps) => {
  const iconStyle = "absolute right-0 top-1/2 transform -translate-y-1/2 h-5 w-5 pr-1 pointer-events-none";
  const selectStyle = "appearance-none pl-2 text-xs h-10";
  return (
    <div className="gap-1 flex justify-end items-center mt-2">
      <div className="relative w-full">
        <Select
          title="Select Category"
          id="category-select"
          options={[{ value: "all", label: "All Categories" }, ...categories.map((category) => ({ value: category, label: category }))]}
          value={selectedCategory === "all" ? "" : selectedCategory}
          onChange={handleCategoryChange}
          className={selectStyle}
          
        />
        <ChevronDown className={iconStyle} />
      </div>
      <div className="relative w-full">
        <Select
          title="Select Area"
          id="area-select"
          options={[{ value: "all", label: "All Areas" }, ...areas.map((area) => ({ value: area, label: area }))]}
          value={selectedArea === "all" ? "" : selectedArea}
          onChange={handleAreaChange}
          className={selectStyle}
        />
        <ChevronDown className={iconStyle} />
      </div>
    </div>
  );
};
