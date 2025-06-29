

function AlgorithomPracitce (target,arr) {
    
    for (let i = 0; i < arr.length; i++) {
      
        for (let j = 0; j < arr.length-1-i; j++) {
            
          if (arr[j]<arr[j+1]) {
             let temp=arr[j];
             arr[j]=arr[j+1];
             arr[j+1]=temp
          }
            
        }
        
    }

   

    let low=0;
    let high=arr.length-1;

    while (low <=high) {
        let mid= Math.floor((high+low)/2);

        if (arr[mid]===target) {
            console.log(arr[mid]);
            break;
        }
        else if(arr[mid]>target){
           low = mid+1
        }
        else{
            high = mid-1
        }
    }

}


let target=54;
let arr=[3,54,34,33,55,223,42,324,212,42,13,34,231,523,223,11,22,44,212];
 AlgorithomPracitce(target,arr);
 AlgorithomPracitce(target,arr);
