import axios from 'axios';
import { BASE_URL } from '../../api';


export const login = async (email: string, password: string) => {
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    return response.data;
}