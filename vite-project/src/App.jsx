import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import Center from './components/Herotwo'
import Navbar from './components/navbar'
import Testimonials from './components/Testimonials'
function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='bg-gray-950'>

     <Navbar/>
     <Hero/>
     <Center/>
   <Card />
   <Testimonials/>
    </div>
  

   

)}

export default App
