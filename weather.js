#!/usr/bin/env node  
import { getArgs } from "./helpers/args.js"; 
import { printHelp, printSuccess, printError } from "./services/log.service.js";
import { TOKEN_DICTIONARY, saveKeyValue } from "./services/storage.service.js"; 
import { getWeather } from "./services/app.servise.js"

const keepToken = async (token) => {  // переименнованный  saveToken - чтоб не путать  с saveKeyValue
    if (!token.length) {
        printError('Хде токен!? передайть забыл, да!');
    }
    try { 
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Токен сохранен');
    } catch (e) {
        printError(e.message); 
    }     
}

const initCLI = () => { 
    const args = getArgs(process.argv);
    //console.log(args); 
    if (args.h) { 
        printHelp();
    }
    if (args.s) {
        // сохранить город
    } 
    if (args.t) {
        return keepToken(args.t); 
    }     
    getWeather('moscow');
    // вывести погоду
}; 

initCLI();

