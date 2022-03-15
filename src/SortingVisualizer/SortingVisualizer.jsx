import React from 'react'; 
import * as sortingAlgorithms from "../SortingAlgorithm/mergeSort";
import "./SortingVisualizer.css";

export default class SortingVisualizer extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      array:[],
    };
  }

  componentDidMount(){
    this.resetArray();
  }

  resetArray(){
    const array = [];
    
    for(let i=0; i<310;i++){
      array.push(randomIntFromIntervals(5,730));
    }
      this.setState({array});
  }

  mergeSort(){
    const javaScriptSortedArray = this.state.array.slice().sort((a,b)=>a-b);
    const sortedArray = sortingAlgorithms.mergeSort(this.state.array);

    // console.log(sortedArray);
    console.log(EqualArray(javaScriptSortedArray,sortedArray));
  }

  quickSort(){

  }

  headpSort(){

  }

  bubbleSort(){

  }



  render(){
    const {array} = this.state;

    return (
      <div className='array-container'>
        {array.map((value,idx) => (
          <div 
            className='array-bar' 
            key={idx}
            style={{height: `${value}px`}}
            >
          </div> 
        )) }
        <button onClick={()=> this.resetArray()}>Generate New Array</button>
        <button onClick={()=> this.mergeSort()}>Merge Sort</button>
        <button onClick={()=> this.quickSort()}>Quick Sort</button>
        <button onClick={()=> this.headpSort()}>Heap Sort</button>
        <button onClick={()=> this.bubbleSort()}>Bubble Sort</button>
      </div>
    );
  }

}

function randomIntFromIntervals(min,max){
  return Math.floor(Math.random()* (max-min+1)+min);
}

function EqualArray(arrayOne, arrayTwo){
  if(arrayOne.length !== arrayTwo.length) return false;

  for(let i = 0; i<arrayOne.length;i++){
    if(arrayOne[i] !==arrayTwo[i]) return false;
  }
  return true;
}
