import PrinterRequest, {PrinterResponce} from "../interfaces/PrinterRequest";
import {PrinterFilter} from "../interfaces/PrinterFilter";
import apiClient from "./apiClient";

export const GetPrintersList = async (filters?: PrinterFilter,
                                      searchWord?:string): Promise<PrinterResponce[]> => {

  const queryParams: any = {};
    if (filters) {
        queryParams.ppsOrderBy = filters.ppsOrderBy;
    }
    if (searchWord) {
        queryParams.searchWord = searchWord;
    }

     try {
        const response = await apiClient.get(`Printers`, { params: queryParams });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch printers');
    }

}