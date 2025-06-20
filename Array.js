
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

let arr=[10,30,3,4,55,22,34,33,43,23,53,23,223];
let target=53;

linearSearch(arr,target);



function minMaxValue (arr,target){
   let min=arr[0];
   let max=arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]<min) {
            min=arr[i]
        }
        if (arr[i]>max) {
            max=arr[i];
        }
        
    }
    console.log(`minimum number is ${min}`)
    console.log(`maximum number is ${max}`)

}
minMaxValue(arr,target);