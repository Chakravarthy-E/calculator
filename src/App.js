import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handler = (e) => {
    setInput(e.target.value);
  };


  return (
    <div>
    <h1>Calculator</h1>
    <div className="container">
    <input type="text" name="input" value={input} onChange={handler} />
    <br />
    <h4 className="result">{result}</h4>
       <div className="buttons">
       <button onClick={()=>setInput((" "))}>clr</button>
       <button onClick={()=>setInput(input+"/")}>/</button>
       <button onClick={()=>setInput(input.slice(0,-1))}>←</button>
       <button onClick={()=>setInput(input+"1")}>1</button>
       <button onClick={()=>setInput(input+"2")}>2</button>
       <button onClick={()=>setInput(input+"+")}>+</button>
       <button onClick={()=>setInput(input+"3")}>3</button>
       <button onClick={()=>setInput(input+"4")}>4</button>
       <button onClick={()=>setInput(input+"-")}>-</button>
       <button onClick={()=>setInput(input+"5")}>5</button>
       <button onClick={()=>setInput(input+"6")}>6</button>
       <button onClick={()=>setInput(input+".")}>.</button>
       <button onClick={()=>setInput(input+"7")}>7</button>
       <button onClick={()=>setInput(input+"8")}>8</button>
       <button onClick={() => setResult(eval(input))}>=</button>
       <button onClick={()=>setInput(input+"9")}>9</button>
       <button onClick={()=>setInput(input+"0")}>0</button>
       <button onClick={()=>setInput(input+"00")}>00</button>
       </div>
      </div>
    </div>
  );
};

export default App;
