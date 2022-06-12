const insertionSort = (array) => {
    
    let key,i,j;
    for(i=1; array.length-1;i++){
        key = array[i];
        j=i-1;
        while(j>=0  && array[j]>key){
            array[j+1] = array[j];
        }
        array[j+1]=key;
    }
}

export default insertionSort;