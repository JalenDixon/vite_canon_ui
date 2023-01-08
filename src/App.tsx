import { createContext } from 'react'
import './App.css'
import { MainGrid } from "./Components/MainGrid"
function App() {
  return (
    <div className="App">
      <div style={{
        height: '1000px'
      }}>
        <MainGrid />
      </div>
    </div>
  )
}

export default App
