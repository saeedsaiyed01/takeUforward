import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/navbar'
import Testimonials from './components/Testimonials'
function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='bg-gray-950'>
  
     <Navbar/>
     <Hero/>
   <Card />
   <Testimonials/>
    </div>
  

   

)}

export default App
