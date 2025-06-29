
function linearSearch(arr,target) {
    let data=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]<target && arr[i]>30)
             {
            console.log(arr[i])
        }
        
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===target) {
            console.log(`your found data is ${arr[i]} index ${i}`)
        }
        if (arr[i]<target) {
            data +=arr[i];
        }
    }
    console.log(data)
    console.log(data/arr.length)

}

let arr2=[10,30,3,4,55,22,34,33,43,23,53,23,223];
let target=53;

linearSearch(arr2,target);







 [10,20,30,40,50,60,70,80,90,13,42,33,43,77,12,42];

// linear search start 


function linearSearch (arr,target)
{
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]===target) {
      return `the value of ${arr[i]} index ${i}`;
    }
    
  }
  return -1;
}

let arr=[10,4,29,43,100,42,23,652,104,212,44,11,411,211,25];

let data =linearSearch(arr,4377)
if (data===-1) {
  console.log("your data is not found")
}
else{
  console.log(data)
}
// linear search end


// bineary search start


function binearySearch(arr,target) {
  let start=0;
  let end=arr.length-1;

  while (start<=end) {
    let mid=Math.floor((start+end)/2);

    if (arr[mid]===target) {
       return ` your data is ${arr[mid]} and index ${mid}`
    }
    else if (arr[mid]<target){
       start=mid +1
    }
    else{
      end=mid-1
    }
  }

}


function Sorrted(arr){
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length-i-1; j++) {
      if (arr[j]>arr[j+1]) {
        let temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp
      }
      
    }
    
  }
  return arr;
}

let sortedArr=Sorrted(arr)
let binearyData=binearySearch(sortedArr,100)
console.log(binearyData);
// bineary search end



// selection sort start
//   function selectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }

//     if (minIndex !== i) {
//       let temp = arr[i];
//       arr[i] = arr[minIndex];
//       arr[minIndex] = temp;
//     }
//   }
//   return arr;
// }

// console.log(selectionSort(numbers)); // Output: [11, 12, 22, 25, 64]


function SelcetionSort(arr){
   
  for (let i = 0; i < arr.length-1; i++) {
    let minIndex =i;
 
     for (let j = i+1; j < arr.length; j++) {
       if (arr[j]<arr[minIndex]) {
         minIndex=j;
       }

     }

     if (minIndex !== i) {
        let temp=arr[i];
        arr[i]=arr[minIndex];
        arr[minIndex]=temp
     }
    
  }

  return arr;
}


 let numbers = [64, 25, 12, 22, 11,345,23,323,22,112,33,11,33,22,];


console.log(SelcetionSort(numbers));

// selection sort end


for (let  i = 0;  i < numbers.length;  i++) {
  let minIndex=i
  for (let j = 0; j < numbers.length; j++) {
    if (arr[j]<arr[minIndex]) {
      minIndex=j
    }
    
  }

  if (minIndex !==i) {
     let temp=arr[i];
     arr[i]=arr[minIndex];
     arr[minIndex]=temp;
  }
  
}

console.log( "dfdllfd", numbers)


// merge sort start 
  function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // বাকি উপাদান যোগ করো
  return result.concat(left.slice(i)).concat(right.slice(j));
}


console.log(mergeSort(arr));

// merge sort end
