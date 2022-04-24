/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = 0;
    let current = '';
    while (true) {
        const limit = s.length;
        
        for(let i = 0; i < limit; i++) {
            const char = s[i];
            if (current.includes(char)) {
                result = Math.max(result, current.length);
                current = '';
                s = s.substring(s.indexOf(char) + 1);
                break;
            } else if (i === limit - 1) {
                current += char;
                result = Math.max(result, current.length);
                break; 
            } else {
                current += char;
            }
        }

        if (s.length <= result) break;
    }
    result = Math.max(result, current.length);
    return result;
};