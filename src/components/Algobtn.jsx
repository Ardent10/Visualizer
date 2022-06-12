import React from 'react'

const Algobtn = ({onChange, disabled}) => {

    
    // const btnClass = "transition all ease delay-100 p-3 m-2 text-white rounded hover:rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-red-500 hover:to-purple-500";
    const optionClass = 'border-2 rounded bg-gradient-to-r from-green-400 to-blue-500'
    return (
        <div class="flex flex-row pr-4 bg-gradient-to-r from-green-400 to-blue-500 rounded">
       <h3 class='text-white p-4 pr-2 text-xl'>Algorithm: </h3>
            <select class='mx-1 w-40 h-7 m-4 border-solid border-2 rounded' onChange={onChange} disabled={disabled}>
                <option value="Bubble Sort" class={optionClass}>Bubble Sort</option>
                <option value="Selection Sort" class={optionClass}>Selection Sort</option>
                <option value="Insertion Sort" class={optionClass}>Insertion Sort</option>
                <option value="Quick Sort" class={optionClass}>Quick Sort</option>
                <option value="Merge Sort" class={optionClass}>Merge Sort</option>
            </select>
                {/* <button type="button" class={btnClass}>Bubble Sort</button>
                <button type="button" class={btnClass}>Selection Sort</button>
                <button type="button" class={btnClass}>Insertion Sort</button>
                <button type="button" class={btnClass}>Quick Sort</button>
                <button type="button" class={btnClass}>Merge Sort</button> */}
    </div>
  )
}

export default Algobtn;