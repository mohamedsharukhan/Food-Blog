import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SliderComponent from './SliderComponent'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Owlpage from './Owlpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='app'>

      <BrowserRouter>
        <Routes>
          <Route path='' element={(<SliderComponent />)}/>
          
          <Route path='home' element={(<SliderComponent />)}/>  

          <Route path='Owlpage' element={(<Owlpage/>)}/>

         
        </Routes>
      </BrowserRouter>







    </div>
  )
}

export default App
