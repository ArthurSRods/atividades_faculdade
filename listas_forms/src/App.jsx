import { useState } from 'react'
import CompGaragem from './components/CompGaragem'
import CompFormulario from './components/CompFormulario'
import CompMochila from './components/CompMochila'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CompGaragem/>
    <CompFormulario/>
    <CompMochila/>
    </>
  )
}

export default App
