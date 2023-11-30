import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import { Route, BrowserRouter as router, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='About' element={<Header />}/>
        <Route path='About' element={<Deshboard />}/>
        <Route path='Desbo' element={<Header/>}/>
        <Route path='Home' element={<Header/>}/>
        <Route path='Home' element={<Deshboard />}/>
        <Route path='Desbo' element={<Deshboard />}/>



    </Routes>

    </>
  )
}

export default App
