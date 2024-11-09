import {IPrinterResponse} from "types/Printer";

export interface ProductCardProps extends IPrinterResponse {
  onClick?: (id:string) => void;
}