/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const stringFromNumber = '' + x;
    return stringFromNumber === stringFromNumber.split('').reverse().join('');
};