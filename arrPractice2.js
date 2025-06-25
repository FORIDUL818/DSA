// leaneerSearch start

  function leanearSearch (arr) {
    
    for (let i = 0; i < arr.length; i++) {

        if (arr[i]===target) {
            console.log(`the target data ${arr[i]}`)
        }
       
        if (arr[i]>target) {
           console.log( "upper data", arr[i])
        }
        if (arr[i]<target) {
            console.log( `loyer data`, arr[i])
        }
        
    }

  }

  let arr=[10,4,2,13,66,323,3,43,23,12,56,20,23,4,33,353,12,32,123,];
  let target=56;

  let result=leanearSearch(arr,target);
  

// leaneerSearch end

// binearySearch start
// ✅ Step 1: Quicksort function
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// ✅ Step 2: Binary Search function
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return `✅ আপনার ডাটা ${arr[mid]}, ইনডেক্স ${mid}`;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return `❌ ডাটা ${target} খুঁজে পাওয়া যায়নি`;
}

// ✅ Step 3: Call the functions properly
let arr2 = [10, 4, 2, 13, 66, 323, 3, 43, 23, 12, 56, 20, 23, 4, 33, 353, 12, 32, 123];
let target2 = 353;

let sortedArr = quickSort(arr2);        // প্রথমে sort করলাম
let result2 = binarySearch(sortedArr, target2); // তারপর binary search চালালাম

console.log(result2);

// binearySearch end