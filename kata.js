function moveZeros (a) {
    
    for(let i = 0; i<(a.length-1); i++){
      if(a[i] === 0){
        for(let j=i; j<(a.length-1); j++){
          a[j] = a[j+1]
        }
        a.push(0)
      }
    }
    return a  
}

// im mad
const netta = (nums)=>{
    let countZero = 0
    let pointer = 0;
    while(pointer<nums.length){
        if(nums[pointer]===0){
            nums.splice(pointer,1)
            countZero++
        }
        else{
            pointer++
        }
    }
    for(let i=0;i<countZero;i++){
        nums.push(0)
    }
    return nums
}

console.log(netta([0,0,9,0,0,0,0,0,0,0]))





const validWord = function(dictionary, word) {
    const wordArray = word.split('') //h,e,l,l,o,w,o,r,l,d
    
    for(let i=0; i<dictionary.length, i++){
        const diArray = dictionary[i].split('') //h,e,l,l,o

        for(let j=0; j<diArray.length; j++){
            if(diArray[j].includes(wordArray)){
                
            }
        }
    }

    // for(let i=0; i<dictionary.length, i++){
    //     const diArray = dictionary.split('')
    //     for(let j=0; j<diArray.length; i++){
    //         if(diArray[i].includes(wordArray)){
    //             return true
    //         }
    //     }
    //     return false
    // }
};

// const nettaIsBadGirlandIdontLikeHer = (arr,str) =>{
//     arrStr = arr.join('')
    
//     return arrStr===str
// }
console.log(validWord(["hello", "world"], "helloworld"))
