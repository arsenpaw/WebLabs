import PrinterRequest, {PrinterResponce} from "../interfaces/PrinterRequest";
import axios from "axios";
import apiClient from "./apiClient";
export const RemovePrinter = async (id: string) => {
    const response = await apiClient.delete<PrinterResponce>(`Printers/${id}`);
    return response.data;
}
