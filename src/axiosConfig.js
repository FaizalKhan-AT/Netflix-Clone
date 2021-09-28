import axios from 'axios'
import {base_Url} from './constants/constants'

const instance = axios.create({
    baseURL: base_Url
});
export default instance