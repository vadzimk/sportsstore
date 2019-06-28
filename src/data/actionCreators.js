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