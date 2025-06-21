// five away of array writing in js 
// array litaral 
let arr=[10,20,50,100,200,33,23,54,323,432,43,21,3450,];// 1:
// array constructor in js
let arrConstructor=new Array(10);
let arrayConstructor2= new Array(10,20,30,534,312,543,33);

// dynamic assinment
let dynamicAssinment=[];

// nested array
let matrix=[
    [1,2,4,3,2],
    [3,4,5,3,4,5],
];
let ArrayObj=[
    {name:"Foridul islam",email:"foridulislamdise880@gmail.com",password:"3123123"},
    {prodcutsName:"sell Phone",conditon:"new",brand:"samsung",Picture:"fldsjfldsjflds"}
];


// pracitce array,searching,sorting, leanear search,bineary search,bubble sort, start

  function leanearSearch(arr2,target){

    let data;
     for (let i = 0; i < arr2.length; i++) {
        if (arr2[i]=== target) {
            data=arr2[i];
        }

        if (40<arr2[i] && 67>arr2[i]) {
            console.log(arr2[i]);
        }
     }
     return data;
  }

  let arr2=[10,30,44,53,22,4,23,44,23,44,34,75,42,67,11,23,43,93,123,64,];
   let target=43;

  let data=leanearSearch(arr2,target);
   if (data) {
    console.log(data)
   } else {
    console.log("data not found")
   }
 
   
 function binarySearch(target,arr2) {
    let low=0;
    let high=arr2.length-1;
    arr2.sort((a,b)=>a-b);
    while (low<=high) {
        let mid=Math.floor((low+high)/2);

        if (arr2[mid]===target) {
            return ` your data is ${arr2[mid]} index is ${mid}`
        }
        else if (arr2[mid]<target){
            low=mid+1;
        }
        else{
            high=mid-1;
        }
    }
 }
 let data2=binarySearch(target,arr2);
 console.log(data2);
  

// pracitce array,searching,sorting, leanear search,bineary search,bubble sort, end







