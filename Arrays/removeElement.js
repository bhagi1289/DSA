// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).


let nums = [3,2,2,3];
let val = 3;

let count =0;

for(let i=0; i < nums.length; i++){
    if(nums[i] !== val){
        nums[count] = nums[i];
        count++
    }
}

console.log(nums)
console.log(count)