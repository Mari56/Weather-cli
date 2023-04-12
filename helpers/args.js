
const getArgs = (args) => { 
    const res = {};
    const [executer, file, ...rest] = args; 
    rest.forEach((value, index, array) => { 
        let nextElement = array[index + 1];
        let nextChar = value.substring(1);
        if (value.charAt(0) == '-'){ 
            if (index == array.length - 1) { 
                res[nextChar] = true; 
            } else if (nextElement.charAt(0) != '-') {
                res[nextChar] = nextElement;
            } else {
                res[nextChar] = true;
            } 
        } 
    }); 
    return res;
} 

export { getArgs }