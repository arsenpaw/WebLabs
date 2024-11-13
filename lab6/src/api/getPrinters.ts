import { IPrinterResponse } from "../types/Printer";
import { apiClient } from "./api-client";
import { useQuery } from "@tanstack/react-query";

// Function to fetch printer data
export const getPrinters = async (filter: IPrinterFilter): Promise<IPrinterResponse[]> => {
   const resp = await apiClient.get<IPrinterResponse[]>(`/printers`,
       { params: filter });
   return resp.data;
};
export const getPrinter = async (id:string): Promise<IPrinterResponse> => {
   const resp = await apiClient.get<IPrinterResponse>(`/printers/${id}`, );

   return resp.data;
};

interface IPrinterFilter {
    search?: string;
    PpsOrderBy?: number;
    MoneyFilter?: number;

}

export const usePrinters = (filter: IPrinterFilter) => {
   return useQuery<IPrinterResponse[], Error>({
      queryKey: ['printers'],
      queryFn: () => getPrinters(filter),
   });
};

export const usePrinter = (id:string) => {
   return useQuery<IPrinterResponse, Error>({
      queryKey: ['printer'],
      queryFn: () => getPrinter(id),
      staleTime: 25,
      refetchOnWindowFocus: false,
   });
};
