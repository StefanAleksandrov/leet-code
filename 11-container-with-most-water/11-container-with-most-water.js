/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let limit = height.length
    
    for (let i = 0; i < limit; i++) {
        if (height[i] * (limit - i) <= maxArea) continue;
        for (let j = i + 1; j < limit; j++) {
            maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j - i));
        }
    }
    
    return maxArea;
};