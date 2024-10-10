
import PrinterRequest, {PrinterResponce} from "../interfaces/PrinterRequest";

import axios from "axios";

export const EditPrinter = async (id: string,printer:PrinterRequest): Promise<PrinterResponce> => {
    const response = await axios.put<PrinterResponce>(`${process.env.BACKEND_URL}/api/Printers/${id}`,
        { printer });
    return response.data;
}
