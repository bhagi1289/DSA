// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.

// let nums = [12, 345, 2, 6, 7896];
let nums = [555,901,482,1771];

let evenOrOddCount = 0;

for(let i=0; i<nums.length; i++){
    let number = nums[i];
    let count = 0;
    if(number===0){
        count++
    }
    while(number>0){
        number = Math.floor(number/10)
        count++;
    }
    if(count%2 === 0){
        evenOrOddCount++;
    }
}

console.log(evenOrOddCount)


// Second approach
function withJsToStringMethod(nums) {
    let evenOrOddCount = 0;

    for (let i = 0; i < nums.length; i++) {
        let count = nums[i].toString().length; // Get the number of digits by converting to string
        if (count % 2 === 0) {
            evenOrOddCount++;
        }
    }

    console.log(evenOrOddCount);
}

withJsToStringMethod(nums);