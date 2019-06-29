import {ACTION_TYPES} from "./types";
import {data as phData} from "./placeholderData";

export const loadData=(dataType)=>(
    {type: ACTION_TYPES.DATA_LOAD,
        payload: {
            dataType: dataType,
            data: phData[dataType],
        }
    }
);

export const addToCart = (product, quantity=1)=>{
    return{
        type: ACTION_TYPES.CART_ADD,
        payload: {
            product,
            quantity: quantity,
        }
    };
};

export const updateCartQuantity=(product, quantity)=>{
    return{
        type: ACTION_TYPES.CART_UPDATE,
        payload: {
            product,
            quantity
        }

    }
};

export const removeFromCart=(product)=>{
    return{
        type: ACTION_TYPES.CART_REMOVE,
        payload: product
    }
};

export const clearCart=()=>{
    return{
        type: ACTION_TYPES.CART_CLEAR
    }
};