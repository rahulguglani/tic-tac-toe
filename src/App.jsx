import './styles.scss'
import Board from './components/Board'
import StatusMessage from './components/StatusMessage';
import { useState } from "react";

function App() {
  const [squares,setSquares] = useState(Array(9).fill(null));
  const [isXNext,setisXNext] = useState(false);
    
  return (
    <div className='app'>
      <StatusMessage/>
      <Board squares={squares} setSquares={setSquares} isXNext={isXNext} setisXNext={setisXNext}/>
    </div> 
  )
}

export default App
