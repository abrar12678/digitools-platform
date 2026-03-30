import { Suspense, useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Membership from './components/Membership/Membership'
import Navbar from './components/Navbar/Navbar'
import Rating from './components/Rating/Rating'
import Steps from './components/Steps/Steps'
import Tools from './components/Tools/Tools'
import Workflow from './components/Workflow/Workflow'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fetchProducts = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const productsPromise = fetchProducts();
  const [selectedCart, setSelectedCart] = useState([]);

  return (
    <>
      <Navbar cartCount={selectedCart.length} />
      <Hero />
      <Rating />
      <Suspense
        fallback={
          <div className="flex justify-center items-center py-20">
            <span className="loading loading-infinity loading-xl"></span>
          </div>
        }
      >
        <Tools
          productsPromise={productsPromise}
          selectedCart={selectedCart}
          setSelectedCart={setSelectedCart}
        />
      </Suspense>
      <Steps />
      <Membership />
      <Workflow />
      <Footer />

      <ToastContainer />
    </>
  )
}

export default App