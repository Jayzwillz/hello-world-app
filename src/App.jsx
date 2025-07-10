import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    setCount(count + 1)
  }

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className="counter-app">
      <h1>Click Counter App</h1>
      <div className="counter-display">
        <h2>{count}</h2>
        {count >= 10 && (
          <p className="threshold-message">You've reached the limit!</p>
        )}
      </div>
      <div className="button-group">
        <button 
          onClick={handleDecrease} 
          className="decrease-btn"
          disabled={count === 0}
        >
          Decrease
        </button>
        <button onClick={handleReset} className="reset-btn">
          Reset
        </button>
        <button onClick={handleIncrease} className="increase-btn">
          Increase
        </button>
      </div>
    </div>
  )
}

export default App
