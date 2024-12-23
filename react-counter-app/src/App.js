import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const decreaseHandler = () => {
    if(counter > 0) {
      setCounter(counter - 1);
    }
  }

  const increaseHandler = () => {
    setCounter(counter + 1);
  }

  const resetHandler = () => {
    setCounter(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#32d823d3] flex-col gap-10">
      <div className="text-[#ba1dd6] font-medium text-2xl">React Counter App</div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#473f3fb0]">

        <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
         -
        </button>
        <div className="font-bold gap-12 text-5xl">
          {counter}
        </div>

        <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
          +
        </button>
      </div>
    
      <button onClick={resetHandler} className="bg-[#c32323fb] text-white px-5 py-2 rounded-sm border-r-amber-950 text-lg capitalize">reset</button>
    </div>
  );
}

export default App;
