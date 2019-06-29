import {ACTION_TYPES} from "./types";

//storeData is the state of redux store
export const shopReducer = (storeData={}, action)=>{
    switch (action.type) {
        case ACTION_TYPES.DATA_LOAD:
            return {
                ...storeData,
                [action.payload.dataType]: action.payload.data
            }; //[] is a computed property name of ES6
        default:
            return storeData;
    }
};


//storeData is the state of redux store
export const cartReducer=(storeData={}, action)=>{
    let newStore = {
        cart: [], //array of objects: {product, quantity}
        cartItems: 0,
        cartPrice: 0,
        ...storeData
    };

    switch(action.type){

        case ACTION_TYPES.CART_ADD:
            const {product, quantity}=action.payload;
            //find will return the value of the item of the array for which the callback function returned true
            let existing= newStore.cart.find(item=>item.product.id===product.id);
            if (existing){
                existing.quantity+=quantity;
            } else {
                newStore.cart=[...newStore.cart, action.payload]; //creating a new array copy all items form newStore.cart and pushing action.payload as a new item
            }
            newStore.cartItems += quantity;
            newStore.cartPrice += product.price * quantity;
            return newStore;

        case ACTION_TYPES.CART_UPDATE:
            newStore.cart = newStore.cart.map(item => {
                if(item.product.id === action.payload.product.id){
                    const diff = action.payload.quantity - item.quantity;
                    newStore.cartItems += diff;
                    newStore.cartPrice += (item.product.price * diff);
                    return action.payload;
                } else {
                    return item;
                }
            });
            return newStore;

        case ACTION_TYPES.CART_CLEAR:
            return {
                ...storeData,
                cart: [],
                cartItems: 0,
                cartPrice: 0
            };
        default:
            return storeData;

    }
};