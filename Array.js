
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




// sorting algorithom 

// bubble sort 

function bubbleSort (arr){
  
    for (let i = 0; i < arr.length-1; i++) {
        
   for (let j = 0; j < arr.length-i-1; j++) {
    
    if (arr[j]>arr[j+1]) {
        let teamp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=teamp;
    }
    
   }
        
    }
}

let arr3=[10,403,33,55,22,55,99,13,523,99,231,332,22,233,23];

bubbleSort(arr3)
console.log(arr3);



// insertion sort 

function  InsertionSort(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        let current=arr[i];
        let j=i-1;
        while (j>=0 && arr[j]>current) {
            arr[j+1]=arr[j];
            j--
        }
        arr[j+1]=current;
        
    }

}
let arr4=[3,2,55,22,434,111,54,63,12,392,34,234,];
InsertionSort(arr4);
console.log(arr4);

// selection sort 

function SelectionSort(arr){
 
    for (let i = 0; i < arr.length; i++) {
        let minIndex=i;

        for (let j = i+1; j < arr.length; j++) {
            if (arr[j]<arr[minIndex]) {
                minIndex=j;
            }
            
        }
        if (minIndex !== i) {
        let teamp=arr[i];
        arr[i]=arr[minIndex];
        arr[minIndex]=teamp
        }
    }

}

let arr5=[40,53,53,12,11,42,12,563,99,1123,42,13,4421,423];
SelectionSort(arr5);
console.log(arr5);


function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

let arr6 = [100, 400, 11, 332, 52, 23, 5, 22, 11, 1, 4, 3, 43];
console.log( mergeSort(arr6)); // ✅ assign the sorted array

// quickSort 

function quickSort(arr7) {

      if (arr7.length <= 1) {
        return arr7; // Base case: 0 বা 1 element হলে সরাসরি return
    }

    let pivot=arr7[arr7.length-1];
    let left=[];
    let right=[];

    for (let i = 0; i < arr7.length-1; i++) {
        if (arr7[i]<pivot) {
            left.push(arr7[i])
        }else{
            right.push(arr7[i])
        }
        
    }
    return [...quickSort(left),pivot,...quickSort(right)];
}
let arr7=[333,23,53,23,534,34,235,22,5322,52,1,22,32];
console.log(quickSort(arr7))


// countingSort 

// function countingSort(arr) {
//     if (arr.length === 0) return arr;

//     // Step 1: Find min and max value
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);

//     // Step 2: Create count array
//     let count = new Array(max - min + 1).fill(0);

//     // Step 3: Count occurrences
//     for (let i = 0; i < arr.length; i++) {
//         count[arr[i] - min]++;
//     }

//     // Step 4: Build sorted array
//     let sortedArr = [];
//     for (let i = 0; i < count.length; i++) {
//         while (count[i] > 0) {
//             sortedArr.push(i + min);
//             count[i]--;
//         }
//     }

//     return sortedArr;
// }

// let arr8 = [4, 2, 2, 8, 3, 3, 1];
// console.log(countingSort(arr8)); // [1, 2, 2, 3, 3, 4, 8]


function countingSort(arr){
    if (arr.length===0) {
        return arr;
    }

    let max=Math.max(...arr);
    let min=Math.min(...arr);
    
     let count = new Array(max - min + 1).fill(0);

    for (let i = 0; i < arr.length; i++) {
        count[arr[i]-min]++
        
    }

    let sortedArr=[];

    for (let i = 0; i < count .length; i++) {
        while (count[i]>0) {
            sortedArr.push(i+min);
            count[i]--
        }
        
    }
    return sortedArr

}

let arr8=[20,33,44,22,53,22,42,4,11,4,221,23,23];
console.log(countingSort(arr8));