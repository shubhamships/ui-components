import { Carousel } from "@/components/Carousel";
import { Card } from "../components/Card";

export const Dashboard = () => {
  return (
    <div>
      <div className="text-3xl font-bold mb-4 text-white">Dashboard</div>
      <Carousel />
      <div className="">
        <div className="flex gap-4">
          <div className="w-44">
            <Card
              image="src/assets/img1.jpg"
              title="Movie 1"
              buttonProps={{
                label: "Watch Now",
                bgColor: "bg-gray-500",
                textColor: "text-white",
                hoverColor: "pink-600",
                transitions: "inline-flex items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all duration-500 border-2 border-double border-black-900 px-2 py-1 ease-in-out transform group-hover:scale-110 group-hover:opacity-90",
                animations:
                  "transform opacity-0 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:opacity-100 transition-all duration-400 ease-in-out",
              }}
            />
          </div>

          <div className="w-44 ">
            <Card
              image="src/assets/img2.jpg"
              title="Movie 2"
              buttonProps={{
                label: "Watch Now",
                bgColor: "bg-purple-300",
                textColor: "text-white",
                hoverColor: "green-600",
                transitions:
                  "group-hover:scale-125 group-hover:opacity-80 transition-all duration-500 ease-out inline-block rounded border-4 border-double border-purple-900 px-2 py-1 font-medium",
                animations:
                  "top-0 left-0 mb-0  h-full w-0  transform bg-purple-600 opacity-90 transition-all duration-300 ease-out group-hover:w-full",
              }}
            />
          </div>

          <div className="w-44">
            <Card
              image="src/assets/img3.jpg"
              title="Movie 3"
              buttonProps={{
                label: "Watch Now",
                bgColor: "bg-red-600",
                textColor: "text-white",
                hoverColor: "yellow-600",
                transitions:
                  "group-hover:scale-110 transition-all duration-700 ease-in-out inline-block rounded-lg border-2  px-2 py-1 font-bold ",
                animations:
                  "translate-x-0 translate-y-0 opacity-0 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:opacity-100 transition-all duration-400 ease-in-out",
              }}
            />
          </div>

          <div className="w-44 ">
            <Card
              image="src/assets/img4.jpg"
              title="Movie 4"
              buttonProps={{
                label: "Watch Now",
                bgColor: "bg-yellow-600",
                textColor: "text-white",
                hoverColor: "blue-600",
                transitions:
                  "group-hover:scale-110 transition-all duration-700 ease-in-out inline-block rounded-lg border-2 px-2 py-1 font-bold inline-flex items-center justify-start overflow-hidden bg-white hover:bg-white",
                animations:
                  "bottom-0 left-0 mb-9 ml-9 h-48 w-48 -translate-x-full translate-y-full rotate-[-40deg] rounded bg-gradient-to-br from-orange-500 via-pink-500 to-pink-600 transition-all duration-500 ease-out group-hover:mb-32 group-hover:ml-0 group-hover:translate-x-0",
              }}
            />
          </div>

          <div className="w-44">
            <Card
              image="src/assets/img5.jpg"
              title="Movie 5"
              buttonProps={{
                label: "Watch Now",
                bgColor: "bg-yellow-600",
                textColor: "text-white",
                hoverColor: "red-600",
                transitions:
                  "group-hover:scale-110 group-hover:opacity-90 transition-all duration-500 ease-in-out inline-flex items-center justify-center overflow-hidden rounded-md border-4 border-double border-black px-2 py-1 font-bold text-black shadow-2xl hover:border-transparent hover:text-white",

                animations:
                  "inset-0 h-full w-full bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 opacity-0 transition duration-300 ease-out group-hover:opacity-100",
              }}
            />
          </div>

          <div className="w-44 ">
            <Card
              image="src/assets/img6.jpg"
              title="Movie 6"
              buttonProps={{
                label: "Watch Now",
                bgColor: "bg-yellow-600",
                textColor: "text-white",
                hoverColor: "purple-600",
                transitions: "group relative inline-flex items-center justify-center border-4 border-double border-purple-900 px-2 py-1 overflow-hidden bg-gray-800 text-white shadow-2xl transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:opacity-90 hover:shadow-orange-600 before:absolute before:inset-0 before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:transition-all before:duration-500 before:ease-out group-hover:before:h-56 group-hover:before:w-56"

              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
