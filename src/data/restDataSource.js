import Axios from 'axios';
import {restUrls} from "./urls";

export class restDataSource {

    sendRequest =(method, url)=>Axios.request({method, url});

    //the result of getData is a promise
    getData=(dataType)=>
        this.sendRequest("get", restUrls[dataType]);

}