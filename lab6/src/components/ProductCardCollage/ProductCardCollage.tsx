import React from 'react';
import {IPrinterResponse} from "../../types/Printer";
import ProductCard from "../ProductCard";


interface ProductCardCollageProps {
    data: IPrinterResponse[];
}

function ProductCardCollage(props: ProductCardCollageProps) {
    return (
        <>
            {props.data.map(x =>
            <ProductCard price={x.price} pps={x.pps} name={x.name} id={x.id} imageUrl={x.imageUrl}/>)}
        </>
    );
}

export default ProductCardCollage;