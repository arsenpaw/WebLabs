import {usePrinters} from "../api/getPrinters";
import Filter from "../components/Filter/Filter";
import FilterButton from "../components/Button/FilterButton";
import React, {useContext} from "react";
import filterData from "../components/Filter/FilterData";
import ProductCard from "../components/ProductCard";
import {FilterContext} from "../context/FindContext";
import {useNavigate} from "react-router-dom";
import Spinner from "../components/Spinner";
import SearchInput from "../components/SearchInput";


const Dashboard =  () => {
    const nav = useNavigate()
    const context = useContext(FilterContext);
    const {data,refetch, isLoading, isError } =  usePrinters(context ?
        {PpsOrderBy: context.orderingByPps, MoneyFilter: context.filterByMoney, search: context.search} :
        {PpsOrderBy: 0, MoneyFilter: 0, search: ""});

    const handleItemClick = (id: string) => {
        nav(`/dashboard/${id}`)
    }
    const onFilterApply = () => {
        console.log(context)
       refetch();
    }
      if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Spinner />
            </div>
    );
    }
    return (
        <div className={'flex flex-col items-center'}>
            <div className="p-6 w-full max-w-screen-lg ">
                <div className={'flex flex-row gap-10 justify-center text-xl'}>
                    <Filter title={filterData.pps.title} options={filterData.pps.options} onChange={(s) =>
                    {context?.setOrderingByPps(s)}}/>
                    <Filter title={filterData.sorting.title} options={filterData.sorting.options}
                            onChange={(s) => context?.setFilterByMoney(s)}/>
                    <FilterButton onClick={onFilterApply} label={'Apply'} className={'mt-7'}/>
                    <SearchInput onClick={onFilterApply}/>
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