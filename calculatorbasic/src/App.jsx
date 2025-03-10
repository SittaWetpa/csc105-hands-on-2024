import { useState } from 'react'
import './App.css'

function App() {
  
  const [result, setResult] = useState(0);
  const [number, setNumber] = useState("");
  function add(){
    setResult(number+Number(result));
  }
  
  return (
    <div className="calWrapper">
      <h1>Simple Calculator</h1>
      <p>Result: {result}</p>
      <form>  
        <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} placeholder="Enter the number"/>
      </form>
      <div className="buttonGroup">
        <button type="submit" onClick={add} >Add</button>
        <button type="submit" onClick={()=> setResult(Number(result)-number)}>Subtract</button>
        <button type="submit" onClick={() => setResult(Number(result)*number)}>Multiply</button>
        <button type="submit" onClick={() => setResult(Number(result)/number)}>Divide</button>
        <button type="submit" onClick={() => setNumber("")}>Reset Input</button>
        <button type="submit" onClick={() => setResult(0)}>Reset Result</button>
      </div>  
    </div>
  )
}

export default App
