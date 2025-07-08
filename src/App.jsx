import './App.css'
import ComparisonTable from './components/ComparisonTable'
import CourseFeatures from './components/CourseFeatures'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/navbar'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
function App() {
 
  return (

    <div className='bg-gray-950'>

     <Navbar/>
     <Hero/>
    <CourseFeatures/>
    
    <Pricing/>

   <Testimonials/>
   <ComparisonTable/>
   <Footer/>
    </div>
  

   

)}

export default App
