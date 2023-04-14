import https from 'https';
import { getKeyValue, TOKEN_DICTIONARY} from './storage.service.js';
import { response } from 'express';

const getWeather = async (city) => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error('Не задан ключ API, чтобы задать его используйте команду -t [API_KEY]');
    }

    const url = new URL('https://api.openweathermap.org/data/2.5/weather'); 
    url.searchParams.append('q', city);
    url.searchParams.append('appid', token);
    url.searchParams.append('lang', 'ru');
    url.searchParams.append('units', 'metric'); 

    https.get(url, (response) => { 
        let reslt = '';

        response.on('data', (chunk) => { 
            reslt += chunk;
        });
         
        response.on('end', () => { 
            console.log(reslt); 
        }); 

        response.on('error', () => {

        });

    })
}  

export { getWeather }