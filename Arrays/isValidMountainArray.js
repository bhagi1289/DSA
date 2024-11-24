// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// Example 1:

// Input: arr = [2,1]
// Output: false
// Example 2:

// Input: arr = [3,5,5]
// Output: false
// Example 3:

// Input: arr = [0,3,2,1]
// Output: true

function isValidMountainArray(arr) {

    if (arr.length < 3) return false;

    let i = 0;
    let j = arr.length - 1;

    for(let k = 0; k<arr.length; k++){
        if(arr[i] < arr[i+1]){
            i++
        }
        if(arr[j]<arr[j-1]){
            j--
        }
        if(i===0 || j===arr.length-1)
            return false

        if(i===j)
            return true
    }
    return false;

}


let arr = [0, 3, 2, 1];
// let arr = [2, 1];
// let arr = [3,5,5];

console.log(isValidMountainArray(arr));