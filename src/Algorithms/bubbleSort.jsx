const bubbleSort = `
function* BubbleSort(array){
    const n = array.length;
    let swapped;
  
    for (let i = 0; i < n - 1; i++) {
      swapped = false;
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          const tmp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = tmp;
          swapped = true;
        }
  
        yield {i, j1: j, j2: j+1};
      }
  
      if (swapped == false) break;
    }
  };`
;

export default bubbleSort

