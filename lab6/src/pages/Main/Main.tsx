import ProductCard from "../../components/ProductCard";
import {Button} from "@mui/material";
import MainButton from "../../components/Button/MainButton";
import Heading from "../../components/Heading/Heading";


export default function Main() {
    return (
        <>
            <div className="flex justify-center items-center my-8">
            <Heading/>
            </div>
            <div className="flex flex-wrap gap-4">
                {[1, 2, 3].map((item) => {
                    return (
                        <ProductCard
                            key={item}
                            pps={10}
                            name="HP Deskjet 3755"
                            price={89.99}
                            imageUrl="https://m.media-amazon.com/images/I/61vKQj7oXsL._AC_SL1500_.jpg"
                        />
                    );
                })}
            </div>
            <div className="flex justify-center items-center my-8">
                <MainButton/>
            </div>
        </>
    );
}
