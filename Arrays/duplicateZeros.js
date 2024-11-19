// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

let arr = [1,0,2,3,0,4,5,0];

for(let i=0; i<arr.length; i++){
    if(arr[i] === 0){
        for(let j=arr.length-1; j>i; j--){
            arr[j] = arr[j-1]
        }
        arr[i]=0
        i++;
    }
}

console.log(arr);