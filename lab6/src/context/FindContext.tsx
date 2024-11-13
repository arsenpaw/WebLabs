import {FilterContextType} from "./types";
import {createContext, ReactNode, useEffect, useState} from "react";

export const FilterContext = createContext<FilterContextType | undefined>(undefined);


type FilterProviderProps = {
  children: ReactNode;
};



export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [orderingByPps, setOrderingByPps] = useState<number>(0);
  const [filterByMoney, setFilterByMoney] = useState<number>(0);
  const [search, setSearch] = useState<string>("");

  return (
    <FilterContext.Provider
      value={{ orderingByPps, setOrderingByPps, filterByMoney, setFilterByMoney, search, setSearch }}
    >
      {children}
    </FilterContext.Provider>
  );
};