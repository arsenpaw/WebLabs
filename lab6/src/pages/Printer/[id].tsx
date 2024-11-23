import React from 'react';
import {useParams} from 'react-router-dom';
import {usePrinter} from "../../api/getPrinters";
import {fallbackImage} from "../../components/ProductCard/ProductCard";
import {AddAction, State, store} from "store";
import {CartOperationEnum} from "../../store/types";
import {useDispatch} from "react-redux";
import {IProductProps} from "../../components/ProductCard/types";

export default function PrinterDetail() {
  const { id } = useParams<string>();
  const { data, isLoading, error } = usePrinter(id ?? '');
  const dispatch = useDispatch();

  const onAddToCart = () => {
    if (!data)
        return;
    const action: AddAction = { type: CartOperationEnum.ADD_TO_CART, payload: data };
    dispatch(action);
  }
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg overflow-hidden">
        {isLoading ? (
          <div className="flex justify-center items-center py-10">
            <div className="loader">Loading...</div>
          </div>
        ) : error ? (
          <div className="p-6 text-center text-red-500">
            <p>Error loading printer details. Please try again.</p>
          </div>
        ) : (
          data && (
            <div>
              <img
                        className="h-48 w-full object-cover object-center"
                    src={data.imageUrl || fallbackImage}
                    onError={(e) => {
                      e.currentTarget.src = fallbackImage;
                    }}
              />
              <div className="p-6">
                <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                  {data.name}
                </h1>
                <p className="text-gray-500 mb-4">Printer ID: <span className="font-semibold">{data.id}</span></p>

                <div className="mb-4">
                  <p className="text-lg font-medium text-gray-700">
                    Price: <span className="text-blue-600">${data.price}</span>
                  </p>
                  <p className="text-lg font-medium text-gray-700">
                    PPS: <span className="text-gray-800">{data.pps}</span>
                  </p>
                </div>

                <div className="flex justify-end">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={onAddToCart}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
