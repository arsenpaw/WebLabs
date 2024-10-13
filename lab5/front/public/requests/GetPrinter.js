import axios from "axios";
export const GetPrinter = async (id) => {
    const response = await axios.get(`${process.env.BACKEND_URL}/api/Printers/${id}`);
    return response.data;
};
