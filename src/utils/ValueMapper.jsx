export default function ValueMapper(minArrayLength, maxArrayLength, minColumnHeight, maxColumnHeight){
    let ArrayLength = getRandomInt(minArrayLength,maxArrayLength);
    let arr = new Array(ArrayLength);

    for(let i=0; i<arr.length;i++){
        arr[i] = getRandomInt(minColumnHeight,maxColumnHeight);
    }
    return arr;
}

function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1))+min;
}
