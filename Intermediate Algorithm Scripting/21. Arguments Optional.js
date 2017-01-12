/*
Arguments optional

1. How to return a function
2. How to check if an argument is strictly number?
3. How to store the value of the first argument in the function when the second argument is passed?

*/

function addTogether(arg1) {    
    
    if (Array.from(arguments).length === 2) {                
        if ((typeof arg1) === 'number' & (typeof arguments[1]) === 'number') {            
            return arg1 + arguments [1];
        } else return undefined;
    } else if (Array.from(arguments).length === 1) {
        if ((typeof arg1) === 'number') {
        return function(arg2) {
            if ((typeof arg2) === 'number') {
                return arg1 + arg2;
            } else return undefined;    
        };
    }
    } else return undefined;
}

addTogether("http://bit.ly/IqT6zt");
