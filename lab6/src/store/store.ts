import { configureStore } from "@reduxjs/toolkit";
import { IProductProps } from "components/ProductCard/types";
import { Actions, CartOperationEnum, State } from "./types";
import {TypedUseSelectorHook, useSelector} from "react-redux";

// Load initial state from localStorage if available
const savedState = localStorage.getItem("reduxState");
const initialState: State = savedState ? JSON.parse(savedState) : { shopCart: [] };

const reducer = (state = initialState, action: Actions): State => {
    let updatedState: State;
    switch (action.type) {
        case CartOperationEnum.ADD_TO_CART:
            const itemExists = state.shopCart.some(item => item.id === action.payload.id);
            if (itemExists) {
                return state;
            }
            updatedState = {
                ...state,
                shopCart: [...state.shopCart, action.payload]
            };
            break;
        case CartOperationEnum.REMOVE_FROM_CART:
            updatedState = {
                ...state,
                shopCart: state.shopCart.filter(x => x.id !== action.payload.id)
            };
            break;
        default:
            updatedState = state;
    }

    localStorage.setItem("reduxState", JSON.stringify(updatedState));
    return updatedState;
};

export const store = configureStore({
    reducer: reducer
});

store.subscribe(() => {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
