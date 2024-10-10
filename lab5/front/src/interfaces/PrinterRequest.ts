export default interface PrinterRequest {
  Id?: string;
  name: string;
  pps: number;
  imageUrl: string;
  price: number;

}
export  interface PrinterResponce {
  Id: string;
  name: string;
  pps: number;
  imageUrl: string;
  price: number;

}
