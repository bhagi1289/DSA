let longestValue = (s)=>{

    let longestValue=0;
    let leftIndex=0;
    let rightIndex=0;

    const hashTable = {};
    
    const it = s[Symbol.iterator]();

    let myS = it.next();

    while(!myS.done){
        const count = rightIndex+1;
        if(hashTable[myS.value] && hashTable[myS.value] > leftIndex){
            leftIndex = hashTable[myS.value]; 
        }

        const nextValue = count - leftIndex;
        console.log(hashTable)
        if(nextValue > longestValue){
            longestValue = count - leftIndex;
        }

        // console.log(myS.value, leftIndex, rightIndex, longestValue)
        hashTable[myS.value] = count;
        rightIndex++;
        myS = it.next();
    }
    console.log(longestValue);
}

longestValue("abcabcbb")