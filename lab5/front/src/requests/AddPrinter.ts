import PrinterRequest, { PrinterResponce } from "../interfaces/PrinterRequest";
import axios from "axios";
import apiClient from "./apiClient";

export const AddPrinter = async (printer: FormData): Promise<PrinterResponce> => {
    const response = await apiClient.post<PrinterResponce>(
        `Printers`,
        printer,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }
    );
    return response.data;
}
