import React, { useState } from 'react'
import { MdOutlineBackspace } from "react-icons/md";
import { PiDivideLight } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

function App() {

  const[value,setValue] = useState("");
 const[output, setOutput] = useState("")
 const[isSee,setIsSee] = useState(false)

  const handleClick = (e) =>{
    setValue((prevValue) => prevValue + e);
  }
 const prevHandle = () =>{
  setValue((prevValue) => prevValue.slice(0, -1));
 }
 const handleOutput = () => {
  try {
    setOutput(eval(value));
    setIsSee(true);
  } catch (error) {
    setOutput("Error");
  }
};
  const handleClear = () =>{
    setValue("")
    setOutput("")
    setIsSee(false)
  }

  return (
    <div  className='bg-slate-800 min-h-screen flex justify-center items-center flex-col gap-2'>
      <h1 className='font-bold text-2xl tracking-wide text-yellow-300 uppercase'>Calculator</h1>
      <div className='bg-[#EBEBEB] w-[22rem] rounded-lg p-1 shadow-2xl'>
      <div className='h-28 w-[90%] max-w-[100%] rounded-md shadow-sm border border-yellow-900 m-3 mx-auto flex justify-end items-end text-3xl font-semibold overflow-y-scroll scrollbar-hide'>
  <span className='break-all'>{isSee ? `${output}` : `${value}`}</span>
</div>



        <div className='p-2 mb-2 flex items-center justify-between'>
          <button className='px-12 py-4  rounded-lg shadow-xl text-lg transition duration-100  bg-yellow-400 hover:bg-yellow-500 text-gray-600 font-black'
          onClick={handleClear}>AC</button>
          <button className='px-12 py-5  rounded-lg shadow-xl text-lg transition duration-100  bg-gray-700 hover:bg-gray-500 text-gray-600 text-white'
          onClick={prevHandle}
          ><MdOutlineBackspace size={20}/></button>
          <button className='px-7 py-4  rounded-lg shadow-xl transition duration-100  bg-yellow-400 hover:bg-yellow-500 text-lg text-gray-600 font-black'
          onClick={() => handleClick("%")}>%</button>
        </div>
        <div className='p-2 mb-2 flex items-center justify-between'>
          <button className='px-7 py-4 rounded-lg shadow-xl text-lg text-gray-600 font-black'
          onClick={() => handleClick("7")}>7</button>
          <button className='px-7 py-4 border-red-700 rounded-lg shadow-xl text-lg text-gray-600 font-black'
          onClick={() => handleClick("8")}>8</button>
          <button className='px-7 py-4 border-red-700 rounded-lg shadow-xl text-lg text-gray-600 font-black'
          onClick={() => handleClick("9")}>9</button>
          <button className='px-7 py-5  rounded-lg shadow-xl transition duration-100  bg-yellow-400 hover:bg-yellow-500 text-lg text-gray-600 font-black'
          onClick={() => handleClick("*")}><RxCross2 /></button>
        </div>
        <div className='p-2 mb-2 flex items-center justify-between'>
          <button className='px-7 py-4 border-red-700 rounded-lg shadow-xl text-lg text-gray-600 font-black'
          onClick={() => handleClick("4")}>4</button>
          <button className='px-7 py-4 border-red-700 rounded-lg shadow-xl text-lg text-gray-600 font-black'
          onClick={() => handleClick("5")}>5</button>
          <button className='px-7 py-4 border-red-700 rounded-lg shadow-xl text-lg text-gray-600 font-black'
          onClick={() => handleClick("6")}>6</button>
          <button className='px-7 py-4 border-red-700 transition duration-100  bg-yellow-400 hover:bg-yellow-500 rounded-lg shadow-xl text-lg text-gray-600 font-black'
          onClick={() => handleClick("-")}>-</button>
        </div>
        <div className='p-2 mb-2 flex items-center justify-between'>
          <button className='px-7 py-4 border-red-700 rounded-lg shadow-xl text-lg text-gray-600 font-black'
          onClick={() => handleClick("1")}>1</button>
          <button className='px-7 py-4 border-red-700 rounded-lg shadow-xl text-lg text-gray-600 font-black'
          onClick={() => handleClick("2")}>2</button>
          <button className='px-7 py-4 border-red-700 rounded-lg shadow-xl text-lg text-gray-600 font-black'
          onClick={() => handleClick("3")}>3</button>
          <button className='px-7 py-4 border-red-700 transition duration-100  bg-yellow-400 hover:bg-yellow-500 rounded-lg shadow-xl text-lg text-gray-600 font-black'
          onClick={() => handleClick("+")}>+</button>
        </div>
        <div className='p-2 mb-2 flex items-center justify-between'>
          <button className='px-8 py-4 border-red-700 rounded-lg shadow-xl text-lg text-gray-600 font-black'
          onClick={() => handleClick("0")}>0</button>
          <button className='px-8 py-4 border-red-700 rounded-lg shadow-xl text-lg text-gray-600 font-black'
          onClick={() => handleClick(".")}>.</button>
          <button className='px-16 py-4 border-red-700 rounded-lg shadow-xl text-lg text-gray-600 font-black transition duration-100  bg-yellow-400 hover:bg-yellow-500'
          onClick={handleOutput}>=</button>
         
        </div>
      </div>
      
    </div>
  )
}

export default App