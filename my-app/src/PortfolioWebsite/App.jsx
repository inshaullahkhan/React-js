import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Intro from './Components/Intorduction/Intro'
import Services from './Components/Services/Services'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Intro/>
    <Services/>
    </div>
  )
}
export default App