import { Suspense } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Membership from './components/Membership/Membership'
import Navbar from './components/Navbar/Navbar'
import Rating from './components/Rating/Rating'
import Steps from './components/Steps/Steps'
import Tools from './components/Tools/Tools'
import Workflow from './components/Workflow/Workflow'

// const fetchProducts = async () => {
//   const res = await fetch("/data.json");
//   return res.json();
// };

function App() {
  // const productsPromise = fetchProducts();

  return (
    <>
      <Navbar />
      <Hero />
      <Rating />
      {/* <Suspense> */}
        {/* <Tools productsPromise={productsPromise} /> */}
      {/* </Suspense> */}
      <Steps />
      {/* <Membership /> */}
      {/* <Workflow /> */}
      {/* <Footer /> */}
    </>
  )
}

export default App