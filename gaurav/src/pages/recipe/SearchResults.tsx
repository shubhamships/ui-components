import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { ChevronDown, Search } from "lucide-react";

export const SearchResults = () => {
  return (
    <>
      <div className="bg-[#083344]">
        <div className="px-4 md:px-20 lg:px-96">
          <Input
            type="text"
            id="recipe-input"
            placeholder="Search Your Favorite Recipe. . ."
            className="border-none focus:disabled outline-border-none"
          >
            <div className="px-2 cursor-pointer">
              <Search />
            </div>
          </Input>
        </div>

        <div className="flex gap-2 ">
          <Card className="w-auto flex justify-center items-center text-gray-500">
            <div>filter</div>
            <ChevronDown className="mt-1" />
          </Card>
          <Card className="w-auto flex justify-center items-center text-gray-500">
            <div>sort</div>
            <ChevronDown className="mt-1" />
          </Card>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mx-2 pb-16">
          <div className="flex justify-center items-center mt-10 pt-10 pb-20 m-2 hover:scale-105 duration-200">
            <div className="max-w-80 rounded-lg shadow-lg bg-recipeCardBg overflow-hidden">
              <div className="w-full">
                <img src="/recipe/pasta.jpg" alt="pasta" className="w-full h-40 object-cover" />
              </div>
              <div className="p-4">
                <div className="text-white font-semibold text-xl">Description</div>
                <p className="text-white mt-1">
                  Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook
                  according to the package instructions, about 9 minutes.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-10 pt-10 pb-20 m-2 hover:scale-105 duration-200">
            <div className="max-w-80 rounded-lg shadow-lg bg-recipeCardBg overflow-hidden">
              <div className="w-full">
                <img src="/recipe/pasta.jpg" alt="pasta" className="w-full h-40 object-cover" />
              </div>
              <div className="p-4">
                <div className="text-white font-semibold text-xl">Description</div>
                <p className="text-white mt-1">
                  Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook
                  according to the package instructions, about 9 minutes.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-10 pt-10 pb-20 m-2 hover:scale-105 duration-200">
            <div className="max-w-80 rounded-lg shadow-lg bg-recipeCardBg overflow-hidden">
              <div className="w-full">
                <img src="/recipe/pasta.jpg" alt="pasta" className="w-full h-40 object-cover" />
              </div>
              <div className="p-4">
                <div className="text-white font-semibold text-xl">Description</div>
                <p className="text-white mt-1">
                  Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook
                  according to the package instructions, about 9 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
