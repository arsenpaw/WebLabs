import ProductCard from "../../components/ProductCard";
import MainButton from "../../components/Button/MainButton";
import Heading from "../../components/Heading/Heading";
import { usePrinters } from "../../api/getPrinters";
import FilterSelectField from "../../components/Filter/FilterSelectField";

export default function Main() {
  const { data } = usePrinters();

  return (
    <>
      <div className="flex justify-center items-center my-8">
        <Heading />
      </div>

      <div className="flex justify-center items-center flex-wrap gap-4 my-4">
        {data?.slice(0, 3).map((item) => {
          return (
            <ProductCard
              key={item.id}
              id={item.id}
              pps={10}
              name={item.name || "HP Deskjet 3755"}
              price={item.price || 89.99}
              imageUrl={item.imageUrl || "https://m.media-amazon.com/images/I/61vKQj7oXsL._AC_SL1500_.jpg"}
            />
          );
        })}
      </div>
      <div className="flex justify-center items-center my-8">
        <MainButton
          text={"View All Printers"}
          buttonClassName="transform hover:scale-105 transition duration-300"
        />
      </div>
        <FilterSelectField options={['test','124']} title={'tt'} />
    </>
  );
}
