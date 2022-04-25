/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const result = parseInt(s) || 0;
    if ((-2)**31 <= result && result <= (2**31 - 1)) return result;
    else if (result < (-2)**31) return (-2)**31;
    return (2**31 - 1);
};