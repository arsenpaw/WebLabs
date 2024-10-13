import axios from "axios";
export const EditPrinter = async (id, printer) => {
    const response = await axios.put(`${process.env.BACKEND_URL}/api/Printers/${id}`, { printer });
    return response.data;
};
