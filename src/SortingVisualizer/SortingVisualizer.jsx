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
    
    for(let i=0; i<175;i++){
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

  testSortingAlgorithms(){
    for(let i=0; i<100;i++){
      const array  = [];
      const length = randomIntFromIntervals(1,1000); 
      
      for(let i=0;i<length;i++){
        array.push(randomIntFromIntervals(-1000,1000));
      }

      const javaScriptSortedArray = array.slice().sort((a,b)=>a-b);
      const mergeSortedArray      = sortingAlgorithms.mergeSort(array.slice());
      console.log(EqualArray(javaScriptSortedArray,mergeSortedArray)); 
    }
  }


  render(){
    const {array} = this.state;

    return (
      <div className='container'>
      <div className='sidebar'>
        <div className='logo'>
          <h1>Visualizer</h1>
        </div>

       <div className='btn-container'>
        <button className='btn' onClick={()=> this.resetArray()}>Generate New Array</button>
        <button className='btn' onClick={()=> this.testSortingAlgorithms()}>Test Algorithms</button>
        <button className='btn' onClick={()=> this.mergeSort()}>Merge Sort</button>
        <button className='btn' onClick={()=> this.quickSort()}>Quick Sort</button>
        <button className='btn' onClick={()=> this.headpSort()}>Heap Sort</button>
        <button className='btn' onClick={()=> this.bubbleSort()}>Bubble Sort</button>
       </div>       
      </div>

      <div className='array-container'>
        
        {array.map((value,idx) => (
          <div 
            className='array-bar' 
            key={idx}
            style={{height: `${value}px`}}
            >
          </div> 
        )) }
      </div>
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
