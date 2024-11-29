import React from "react";

interface CardItemsProps {
  type: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
}

export const CardItems = ({ type: Type, title, subtitle, description, image }: CardItemsProps) => {
  return (
    <div className="mx-40 pt-20">
      <div className="relative group hover:bg-black/50 hover:backdrop-blur-xs">
        <div className="w-full h-2/4 overflow-hidden relative">
          <Type image={image} />
        </div>
        <div className="absolute inset-0 bg-transparent group-hover:bg-black/20 group-hover:backdrop-blur-xs transition-all duration-300"></div>
        <div className="absolute bottom-0 left-0 w-full flex items-center justify-center bg-orange-100/50 backdrop-blur-xs text-black text-center p-4">
          <div>
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <p className="text-lg">
              <span>
                {subtitle}
                <br />
              </span>
              <span>{description}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
