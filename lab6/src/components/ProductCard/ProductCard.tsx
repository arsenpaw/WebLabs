/*
https://tinyurl.com/ffWishlistProductCard
*/
import React from "react";
import IPrinterReques, {IPrinterResponse} from "types/Printer";

const ProductCard = ({name,price,pps,imageUrl,id}: IPrinterResponse) => {
  return (
      <div
          className="mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800
          shadow-md duration-300 hover:scale-105 hover:shadow-lg">
          <img className="h-48 w-full object-cover object-center"

               src={"https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"}
               alt="Product Image"/>
          <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{name}</h2>
              <p className="mb-2 text-base dark:text-gray-300 text-gray-700">{pps}</p>
              <div className="flex items-center">
                  <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">{price}</p>
                  {/*<p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>*/}
                  {/*<p className="ml-auto text-base font-medium text-green-500">20% off</p>*/}
              </div>
          </div>
      </div>
  )
};


export default ProductCard;
