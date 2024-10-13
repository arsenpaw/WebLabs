import axios from "axios";
export const AddPrinter = async (printer) => {
    const response = await axios.post(`${process.env.BACKEND_URL}/api/Printers`, { printer });
    return response.data;
};
