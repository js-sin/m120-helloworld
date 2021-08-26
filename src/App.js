import './App.css';
import {useState} from "react";

export default function App() {
    const [counter, setCounter] = useState(0)
    function buttonHandler() {
        console.log("Button was clicked")
    }

    function counterPlus() {
       setCounter(counter+1)
        console.log(counter)
    }

    return (
    <div className="App">
      <header className="App-header">
       Hello World
          <button onClick={ buttonHandler }>click me</button>
          <p>{counter}</p>
          <button onClick={ counterPlus }>counterPlus</button>
      </header>
    </div>
  );
}

