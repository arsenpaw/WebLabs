import IPrinterRequest, { IPrinterResponse } from "../types/Printer";
import { apiClient } from "./api-client";
import { useQuery } from "@tanstack/react-query";

// Function to fetch printer data
export const getPrinters = async (): Promise<IPrinterResponse[]> => {
   const resp = await apiClient.get<IPrinterResponse[]>(`/printers`);
   return resp.data;
};


export const usePrinters = () => {
   return useQuery<IPrinterResponse[], Error>({
      queryKey: ['printers'],
      queryFn: getPrinters,
      staleTime: 25,
      refetchOnWindowFocus: false,
   });
};
