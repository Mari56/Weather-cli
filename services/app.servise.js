import https from 'https';
import { getKeyValue, TOKEN_DICTIONARY} from './storage.service.js';
import { response } from 'express';
import axios from 'axios';

const getWeather = async (city) => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error('Не задан ключ API, чтобы задать его используйте команду -t [API_KEY]');
    }
    // const url = new URL('https://api.openweathermap.org/data/2.5/weather'); 
    // url.searchParams.append('q', city);
    // url.searchParams.append('appid', token);
    // url.searchParams.append('lang', 'ru');
    // url.searchParams.append('units', 'metric');  
    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: { 
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    }); 
    //console.log(data);   
    return data;  
}  

export { getWeather }