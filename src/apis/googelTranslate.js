import axios from "axios";

const KEY  = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';


export default axios.create({
    baseURL: 'https://translation.googleapis.com/language/translate/v2',
    params: {
        format: 'string',
        key: KEY
    },
    headers: {
        Authorization: 'Client-ID dRVYI8QlCuwug-owr9rFhaW5PakqPDZGeE3gTtE9ABo'
    }
})