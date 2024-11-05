import ProductCard from "../../components/ProductCard";
import MainButton from "../../components/Button/MainButton";
import Heading from "../../components/Heading/Heading";
import {useQuery} from "react-query";


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
                            id={'t'}
                            pps={10}
                            name="HP Deskjet 3755"
                            price={89.99}
                            imageUrl="https://m.media-amazon.com/images/I/61vKQj7oXsL._AC_SL1500_.jpg"
                        />
                    );
                })}
            </div>
            <div className="flex justify-center items-center my-8">
                <MainButton
                    text={"View All Printers"}
                    buttonClassName= "transform hover:scale-105 transition duration-300"
                ></MainButton>
            </div>
        </>
    );
}
