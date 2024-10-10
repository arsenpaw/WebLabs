
import PrinterRequest, {PrinterResponce} from "../interfaces/PrinterRequest";

import axios from "axios";

export  const GetPrinter = async (id: string): Promise<PrinterResponce> => {
    const response = await axios.get<PrinterResponce>(
        `${process.env.BACKEND_URL}/api/Printers/${id}`);
    return response.data;
}
