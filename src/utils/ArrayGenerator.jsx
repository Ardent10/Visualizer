export default function generateArray(l){
    var randomArray = [];
    const min=50,max=500,length=l;

    for(let i = 0; i<length; i++) {
        randomArray.push(Math.floor(Math.random()*(max-min)+min))
    }
    return randomArray;
}