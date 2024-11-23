import {IProductProps} from "../components/ProductCard/types";
import {IPrinterResponse} from "../types/Printer";


export enum CartOperationEnum {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART'

}
export type State = {
    shopCart: IProductProps[];
}
export type AddAction = {
    type: CartOperationEnum.ADD_TO_CART;
    payload: IPrinterResponse;
}
export type RemoveAction = {
    type: CartOperationEnum.REMOVE_FROM_CART;
    payload: IPrinterResponse;
}
export type Actions = AddAction | RemoveAction;
