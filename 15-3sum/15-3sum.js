/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	nums.sort((a,b) => a-b);
	const result=[];
    const limit=nums.length;

	if(limit < 3) return result;

	for(let i=0; i<limit; i++){
		let left = i+1;
		let right = limit-1;
        if(nums[i] > 0) break;
		if(i > 0 && nums[i] === nums[i-1]) continue;
		while(left < right){
			let sum = nums[i] + nums[left] + nums[right];

			if(sum===0){
				let arr=[nums[i], nums[left], nums[right]];
				result.push(arr);
				left++;
				while(nums[left] === nums[left-1] && left < right) left++;
			}else if(sum > 0){
				right--;
			}else{
				left++;
			}
		}
	}

	return result;
};