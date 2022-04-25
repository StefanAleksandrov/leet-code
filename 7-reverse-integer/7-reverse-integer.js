/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const sign = x < 0 ? -1 : 1;
    const result = Number(('' + Math.abs(x)).split('').reverse().join('')) * sign;
    if ((-2)**31 <= result && result <= (2**31 - 1)) return result;
    return 0;
};