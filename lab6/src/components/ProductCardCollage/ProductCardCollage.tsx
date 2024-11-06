import React from 'react';
import { IPrinterResponse } from "../../types/Printer";
import ProductCard from "../ProductCard";

interface ProductCardCollageProps {
    data?: IPrinterResponse[];
}

function ProductCardCollage(props: ProductCardCollageProps) {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-6 max-w-screen-lg">
               {props.data?.map(x => (
                <ProductCard
                    key={x.id}
                    price={x.price}
                    pps={x.pps}
                    name={x.name}
                    id={x.id}
                    imageUrl={x.imageUrl}
                />
            ))}
            </div>
        </div>
    );
}

export default ProductCardCollage;
