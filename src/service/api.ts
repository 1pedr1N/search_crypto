import { API_LINK } from "./api.config";
import axios from "axios";


export const GetCoins = async () => {
    const response = await axios.get(API_LINK)
    
    return response.data;
}



