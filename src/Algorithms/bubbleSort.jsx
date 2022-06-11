import {swap} from "./sortingUtils";


const bubbleSort = (array) => {

    for(let i=0;i<array.length-1;i++){
        for(let j=0;i<array.length-i-1;j++){
            if(array[j]>array[i]){
                array = swap(array,j,j+1);
            }
        }
    }
  
    return
}

export default bubbleSort

