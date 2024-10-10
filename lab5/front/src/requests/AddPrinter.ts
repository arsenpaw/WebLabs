
import PrinterRequest, {PrinterResponce} from "../interfaces/PrinterRequest";

import axios from "axios";

export const AddPrinter = async (printer:PrinterRequest): Promise<PrinterResponce> => {
    const response = await axios.post<PrinterResponce>(`${process.env.BACKEND_URL}/api/Printers`,
        { printer });
    return response.data;
}
