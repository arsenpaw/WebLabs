import { useMutation } from "react-query";
import IPrinterReques from "../types/Printer";
import { createPrinter } from "../api/createPrinter";
import IPrinterRequest from "../types/Printer";

interface UsePrinterOptions extends IPrinterRequest{
    onSuccess?: () => void;
    onError?: (error: any) => void;
    // Add other react-query options as needed
}

const useCreatePrinter = (options?: UsePrinterOptions) => {
    return useMutation(createPrinter, {

    });
};

export default useCreatePrinter;
