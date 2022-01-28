const sumAll = function(a, b) {
    if(a < 0 || b < 0)
        return 'ERROR';
        
    if(!Number.isInteger(a) || 
       !Number.isInteger(b))
        return 'ERROR';

    const numTerms = Math.abs(b-a) + 1;
    return numTerms * (a+b)/2;
};

// Do not edit below this line
module.exports = sumAll;
