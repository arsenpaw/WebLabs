export default interface IPrinterRequest {
    name: string;
    price: number;
    pps: number;
    imageUrl: string;
}

 export interface IPrinterResponse extends  IPrinterRequest{
    id: string
}