export default function generateArray(){
    var randomArray = [];
    for(let i = 0; i<45; i++) {
        randomArray.push(Math.floor(Math.random()*500+1))
    }
    return randomArray;
}