/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort((a, b) => a.length - b.length);
    const base = strs[0];
    let result = '';
    
    for (let i = 0; i < base.length; i++) {
        if (strs.every((el) => el.startsWith(base.substring(0, i + 1)))) result = base.substring(0, i + 1);
        else break;
    }
    
    return result;
};