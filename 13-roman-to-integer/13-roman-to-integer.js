/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const result = [];
    const dictionary = {
        'I': 1,
        'A': 4,
        'V': 5,
        'B': 9,
        'X': 10,
        'E': 40,
        'L': 50,
        'F': 90,
        'C': 100,
        'G': 400,
        'D': 500,
        'H': 900,
        'M': 1000
    }

    s = s.replaceAll('IV', 'A');
    s = s.replaceAll('IX', 'B');
    s = s.replaceAll('XL', 'E');
    s = s.replaceAll('XC', 'F');
    s = s.replaceAll('CD', 'G');
    s = s.replaceAll('CM', 'H');
    
    s.split('').map((char) => {
        result.push(dictionary[char]);
    });
    
    const sum = result.reduce((acc, el) => {
        return acc + el;
    }, 0);
    
    return sum;
};