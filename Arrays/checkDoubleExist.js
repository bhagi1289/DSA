// Input: arr = [10,2,5,3]
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]

function checkDoubleExist(arr){
    let count = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(i!==j && arr[i] === 2*arr[j]){
                count++;
                break
            }
        }
    }
    if(count)
        return true
    else
        return false
}
let arr = [10,2,5,3];
// let arr = [3,1,7,11];

console.log(checkDoubleExist(arr))