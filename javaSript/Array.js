 // array writing process start
 let arr=[]
 arr[0]="Hello";
 arr[1]=1;
 arr[2]=true;
 arr[3]=null;
 arr[4]=undefined;
 arr[5]=function(){
     console.log("Hello World");
    }
    arr[6]={
        name:"John",
        age:23
    } 
    let newArray=arr[6].name;
    console.log(newArray);
    
    let arr2=[1,2,3,4,5,6,7,8,9,10]
    
    let myarr=new Array(10,20,40,34,33,434,222,443,443,23,23);
    console.log(myarr);
    
    let myarr2=Array(12,44, 4444, 44, 44, 44, 44, 44, 44, 44, 44, 44);
    console.log(myarr2);
    
    let myarr3=Array.of(1,2,3,4,5,6,7,8,9,10);
console.log(myarr3);

let myarr4=Array.from("Hello World"); //convert string to array
console.log(myarr4);

let myarr5=Array.from([1,2,3,4,5,6,7,8,9,10],x=>x*x); //convert array to array 
// array writing process end

// let arr6=[1,2,3,4,5,6,7,8,9,10];

// let data  = arr6[0];
// let data1 = arr6[1];
// let data2 = arr6[2];
// let data3 = arr6[3];
// let data4 = arr6[4];

// console.log(data)
// console.log(data1)
// console.log(data2)
// console.log(data3)
// console.log(data4)

// arr6[0]=100;
// arr6[1]=200;
// arr6[2]=300;
// arr6[3]=400;
// arr6[4]=500;


// console.log(arr6);

let arr6 = [10, 20, 30, 40, 20, 50, 60, 70]; // Sample array
let originalValue = arr6[4];

for (let i = 0; i < arr6.length; i++) {
    if (arr6[i] === originalValue) {
        arr6[i] = arr6[i + 3];
        delete arr6[i + 3]; // This will leave undefined
        break; // Exit the loop after the first match
    }
}

console.log(arr6); // Log the array with potential undefined values

// Remove undefined values
arr6 = arr6.filter(element => element !== undefined);

console.log(arr6); // Log the cleaned array
for (let i = 0; i < arr6.length; i++) {
    const element = arr6[i];
    console.log(element); // Log each element
}