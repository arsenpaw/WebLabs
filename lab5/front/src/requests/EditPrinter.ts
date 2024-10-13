
import PrinterRequest, {PrinterResponce} from "../interfaces/PrinterRequest";

import axios from "axios";
import apiClient from "./apiClient";

export const EditPrinter = async (id: string,printer:FormData): Promise<PrinterResponce> => {
    const response = await apiClient.put<PrinterResponce>(`Printers/${id}`,
         printer,{
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        } );
    return response.data;
}
