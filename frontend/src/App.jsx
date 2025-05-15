import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Pages & Components
import Home from './pages/Home'
import Navbar from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <BrowserRouter>
        <Navbar/>
          <div className='pages'>
            <Routes>
              <Route
                path = "/"
                element = {<Home/>}

              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
