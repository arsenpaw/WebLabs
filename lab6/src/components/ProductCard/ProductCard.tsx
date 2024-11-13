import React from "react";
import { ProductCardProps } from "./types";

// Define a fallback image URL for broken or missing images
export const fallbackImage = "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg";

const ProductCard = ({ name, price, pps, imageUrl, id, onClick }: ProductCardProps) => {
  return (
    <div
      className="mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800
          shadow-md duration-300 hover:scale-105 hover:shadow-lg"
    >
      <img
        className="h-48 w-full object-cover object-center"
        src={imageUrl || fallbackImage}
        alt={name || "Product Image"}
        onError={(e) => {
          e.currentTarget.src = fallbackImage;
        }}
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{name}</h2>
        <p className="mb-2 text-base dark:text-gray-300 text-gray-700">PPS: {pps}</p>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">${price}</p>
        </div>
        <button
          onClick={() => onClick && onClick(id)}
          className="w-full mt-2 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg
              font-medium transition-colors duration-300"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
