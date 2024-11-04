import  {IPrinterResponse} from "../types/Printer";
import {apiClient} from "./api-client";
import IPrinterRequest from "../types/Printer";

export const createPrinter = async  (payload: IPrinterRequest) => {
   const resp = await apiClient.post<IPrinterResponse>(`/printers`,
        {
            printer: payload
        });
   return resp.data;
};