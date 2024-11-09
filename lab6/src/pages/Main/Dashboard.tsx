import {usePrinters} from "../../api/getPrinters";
import Filter from "../../components/Filter/Filter";
import FilterButton from "../../components/Button/FilterButton";
import React from "react";
import filterData from "../../components/Filter/FilterData";
import ProductCard from "../../components/ProductCard";


const Dashboard =  () => {
// src/filterData.js
    const {data,error,isLoading} =  usePrinters();
    const handleItemClick = (id: string) => {
        console.log('Item clicked', id);
    }

    return (
        <div className={'flex flex-col items-center'}>
            <div className="p-6 w-full max-w-screen-lg ">
                <div className={'flex flex-row gap-10 justify-center text-xl'}>
                    <Filter title={filterData.price.title} options={filterData.price.options}/>
                    <Filter title={filterData.pps.title} options={filterData.pps.options}/>
                    <Filter title={filterData.sorting.title} options={filterData.sorting.options}/>
                    <FilterButton onClick={() => {
                    }} label={'Apply'} className={'mt-7'}/>
                </div>

            </div>
            <div className="flex justify-center items-center my-8">
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-6 w-full max-w-screen-lg">
                    {data?.map(x => (
                        <ProductCard
                            key={x.id}
                            price={x.price}
                            pps={x.pps}
                            name={x.name}
                            id={x.id}
                            imageUrl={x.imageUrl}
                            onClick={handleItemClick}
                        />
                    ))}
                </div>
            </div>
        </div>

    )
}
export default Dashboard;