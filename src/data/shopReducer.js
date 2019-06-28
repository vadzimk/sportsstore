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