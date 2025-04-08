import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0) //useState

  const increment = () => {
    setCount(countActual => countActual + 1);
  }

  useEffect(() => {
    console.log("Count aumentou");

    return () => {
      console.log("Destruído")
    }
  }, [count]);

  return (
    <>

      <h1>UseSate e UseEffect</h1>
      <div className="card">
        <button onClick={increment}>
          {count}
        </button>
      </div>
    </>
  )
}

export default App
