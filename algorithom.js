function linearSearch(arr,target) {
     arr.sort((a,b)=>b-a);
     console.log(arr)
     let len =arr.length;
     for (let i = 0; i < len; i++) {
          if (arr[i]===target) {
             console.log(arr[i],i)
             return;
          }
        
     }

}
let arr=[10,34,53,34,3,233,44,22,4,13,12,343,223,12,54,23,50];
let target=233
linearSearch(arr,target)


 
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid; // index return করছে
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1; // খুঁজে পাওয়া যায়নি
}

let arr2 = [10, 20, 30, 40, 50, 60, 70];
let target2 = 50;
let result = binarySearch(arr2, target2);
console.log(result); // Output: 4



function binarySearch(arr,target){
  arr.sort((a,b)=>a-b);

  let low=0;
  let high=arr.length-1;

  while (low<=high) {
     let mid=Math.floor((high+low)/2);

     if (arr[mid]===target) {
          return `your find data is ${arr[mid]} index is ${mid}`
     }
     else if(arr[mid]<target){
          low=mid+1
     }
     else{
          high= mid-1
     }
  }


    
}
let arr22=[];
arr.push(10);
arr.push(1);
arr.push(40);
arr.push(55);
arr.push(44);
arr.push(11);
arr.push(32);
arr.push(12);
arr.push(23);
let target22=55;
let data=binarySearch(arr22,target22)
console.log(data)
