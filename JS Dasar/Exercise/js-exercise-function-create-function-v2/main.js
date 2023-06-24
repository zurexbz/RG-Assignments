function checkDatatype(data){
    let type = '';

    if(data != null){
        if(typeof(data) === 'number'){
            type = 'number';
        }
        else if(typeof(data) === 'string'){
            type = 'string';
        }
        else if(typeof(data) === 'boolean'){
            type = 'boolean';
        }
        else if(Array.isArray(data) == true){
            type = 'array';
        }
        else if(typeof(data) === 'object'){
            type = 'object';
        }
        else if(typeof(data) === 'function'){
            type = 'function';
        }
    }
    else{
        type = 'null';
    }
    
    return type;
}

console.log(checkDatatype(['a', 'b', 'c']));

module.exports = { checkDatatype };
