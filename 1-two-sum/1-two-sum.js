/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const result = {};
    nums.map((elementA, indexA) => {
        nums.map((elementB, indexB) => {
            if (indexA !== indexB && elementA + elementB === target) {
                result.indexA = indexA;
                result.indexB = indexB;
            }
        });
    });

    return [result.indexA, result.indexB].sort((a, b) => a - b);
};