
// linearSearch start practice 

function linearSearch(target,arr) {
    
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i]===target) {
            console.log(` your found data is ${arr[i]} index is ${i}`)
        }
    }
    
}
let arr=[10,20,44,33,55,22,442,4,3,322,3];
let target=44;
linearSearch(target,arr)

// linearSearch end practice 

//  bineary Search start

function binearySearch(target2,arr2){
    let start=0;
    let end=arr2.length-1;
 arr2.sort((a,b)=>a-b);
let result;
    while (start <= end) {
        let mid=Math.floor((start+end))
        if (arr2[mid]===target2) {
             result= arr2[mid];
            break;
        }
        else if (arr2[mid]<target2) {
            start=mid +1;
        }
        else{
            end=mid-1;
        }
    }
    return result
}

 let arr2=[10,44,22,55,332,22,45,22,33,44];
 let target2=44;

let data= binearySearch(target2,arr2);
console.log(data)
//  bineary Search end