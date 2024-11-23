// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

let nums = [0,0,1,1,1,2,2,3,3,4]

let index = 1;

for(let i=0; i<nums.length-1; i++){
    if(nums[i] !== nums[i+1]){
        nums[index] = nums[i+1];
        index++
    }
}

console.log(index);
console.log(nums);