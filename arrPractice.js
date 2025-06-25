// // five away of array writing in js 
// // array litaral 
// let arr=[10,20,50,100,200,33,23,54,323,432,43,21,3450,];// 1:
// // array constructor in js
// let arrConstructor=new Array(10);
// let arrayConstructor2= new Array(10,20,30,534,312,543,33);

// // dynamic assinment
// let dynamicAssinment=[];

// // nested array
// let matrix=[
//     [1,2,4,3,2],
//     [3,4,5,3,4,5],
// ];
// let ArrayObj=[
//     {name:"Foridul islam",email:"foridulislamdise880@gmail.com",password:"3123123"},
//     {prodcutsName:"sell Phone",conditon:"new",brand:"samsung",Picture:"fldsjfldsjflds"}
// ];


// // pracitce array,searching,sorting, leanear search,bineary search,bubble sort, start

//   function leanearSearch(arr2,target){

//     let data;
//      for (let i = 0; i < arr2.length; i++) {
//         if (arr2[i]=== target) {
//             data=arr2[i];
//         }

//         if (40<arr2[i] && 67>arr2[i]) {
//             console.log(arr2[i]);
//         }
//      }
//      return data;
//   }

//   let arr2=[10,30,44,53,22,4,23,44,23,44,34,75,42,67,11,23,43,93,123,64,];
//    let target=43;

//   let data=leanearSearch(arr2,target);
//    if (data) {
//     console.log(data)
//    } else {
//     console.log("data not found")
//    }
 

// function binarySearch(arr2,target) {
//     let low = 0;
//     let high = arr2.length - 1;
//     arr2.sort((a,b)=>a-b);
//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if (arr2[mid] === target) {
//             return `✅ Your data is ${arr2[mid]}, index is ${mid}`;
//         } else if (arr2[mid] < target) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }

//     return "❌ Data not found.";
// }

// let arr4 = [12, 5, 7, 22, 1, 9, 18];
// let target4 = 22;

// let data2 = binarySearch(arr4, target4);
// console.log(data2);
  

 // bubble sort start 
 
 function bubbleSort (arr3) {
   let len=arr3.length;

   for (let i = 0; i < len; i++) {
     for (let j = 0; j < len-1-i; j++) {
        if (arr3[j]>arr3[j+1]) {
            let team=arr3[j];
            arr3[j]=arr3[j+1];
            arr3[j+1]=team;
        }
        
     }
    
   }
  return arr3;
 }

 let arr3=[1,53,44,66,33,22,32,54,11,43,634,]
 let data3=bubbleSort(arr3);
 console.log( "this is my data okey", data3);
//  bubble sort end

// pracitce array,searching,sorting, leanear search,bineary search,bubble sort, end


// quicksort start
// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr; 
//   }

//   let pivot = arr[arr.length - 1]; 
//   let left = [];
//   let right = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]); 
//     } else {
//       right.push(arr[i]); 
//     }
//   }

//   // 
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// let array = [7, 2, 1, 6, 8, 5, 3, 4];
// let sorted = quickSort(array);
// console.log(sorted);


function quickSort(arr){
if (arr.length <= 1) {
  return arr;
}

let pivot=arr[arr.length-1];
let left=[];
let right=[];

for (let i = 0; i < arr.length-1; i++) {
  
  if (arr[i]<pivot) {
    left.push(arr[i])
  }
  else{
    right.push(right)
  }
  
}

return[...quickSort(left),pivot,...quickSort(right)];
}
let arr=[10,4,6,22,43,13,53,33,15,44];
 let sorted=quickSort(arr)
console.log( "start this", sorted,"this  project is sorted okey")
// quicksort end






