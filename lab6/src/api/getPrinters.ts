import IPrinterRequest, {IPrinterResponse} from "../types/Printer";
import {apiClient} from "./api-client";

export const getPrinters = async  () => {
   const resp = await apiClient.get<IPrinterResponse[]>(`/printers`);
   return resp.data;
};