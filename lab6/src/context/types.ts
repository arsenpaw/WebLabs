export interface FilterContextType {
  orderingByPps: number
  setOrderingByPps: (value: number) => void
  filterByMoney: number
  setFilterByMoney: (value: number) => void;
  search: string;
  setSearch: (value: string) => void;
}