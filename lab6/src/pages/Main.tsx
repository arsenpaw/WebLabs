import ProductCard from "../components/ProductCard";
import MainButton from "../components/Button/MainButton";
import Heading from "../components/Heading/Heading";
import { usePrinters } from "../api/getPrinters";
import Filter from "../components/Filter/Filter";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Main() {
  const { data } = usePrinters({});
  const [showedItem, setShowedItem] = useState<number>(3)
  const nav = useNavigate()
      const handleItemClick = (id: string) => {
        nav(`/dashboard/${id}`)
    }

  return (
    <>
      <div className="flex justify-center items-center my-8">
        <Heading />
      </div>

      <div className="flex justify-center items-center flex-wrap gap-4 my-4">
        {data?.slice(0, showedItem).map((item) => {
          return (
            <ProductCard
              key={item.id}
              id={item.id}
              pps={10}
              name={item.name || "HP Deskjet 3755"}
              price={item.price || 89.99}
              imageUrl={item.imageUrl || "https://m.media-amazon.com/images/I/61vKQj7oXsL._AC_SL1500_.jpg"}
              onClick={handleItemClick}
            />
          );
        })}
      </div>
      <div className="flex justify-center items-center my-8">
          {data && data.length > showedItem ?
          <MainButton
              text={"View More"}
              buttonClassName="transform hover:scale-105 transition duration-300"
              onClick={() => setShowedItem((prev) => prev + 3)}
            /> :
              <MainButton
              text={"View Less"}
              buttonClassName="transform hover:scale-105 transition duration-300"
              onClick={() => setShowedItem(3) }
            /> }

      </div>
    </>
  );
}
