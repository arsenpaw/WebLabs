import {IPrinterResponse} from "types/Printer";

export interface IProductProps extends IPrinterResponse {
  onClick?: (id:string) => void;
}