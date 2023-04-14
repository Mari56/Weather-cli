import { homedir } from 'os'; 
import { join } from 'path';  
import { promises } from 'fs'; 


const filePath = join(homedir(), 'weather-data.json'); 

const TOKEN_DICTIONARY = {
    token: 'token',
    city:'city'
}
 
const saveKeyValue = async (key, value) => {   
    let data = {};   
    let issExist = await isExist(filePath);
    if (issExist) {
        const file = await promises.readFile(filePath);
        data = JSON.parse(file);
    }

    data[key] = value; 
    await promises.writeFile(filePath, JSON.stringify(data));

    // console.log(basename(filePath)); 
    // console.log(dirname(filePath));
    // console.log(extname(filePath)); 
    // console.log(relative(filePath, dirname(filePath)));  
    // console.log(isAbsolute(filePath, dirname(filePath)));  
    // console.log(resolve('..'));
    // console.log(sep);
    }; 
    
    const getKeyValue = async (key) => { 
        let issExist = await isExist(filePath);
        if (issExist) { 
            const file = await promises.readFile(filePath);
            const data = JSON.parse(file); 
            return data[key]; 
        } 
        return undefined;
    }

    const isExist = async (path) => {
        try {
            await promises.stat(path);
            return true;
        } catch (e) { 
            return false; 
        }
    }

export { saveKeyValue, getKeyValue, TOKEN_DICTIONARY }  




