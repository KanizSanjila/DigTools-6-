import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Stats from './components/Stats/Stats'
import Premium from './components/Premium/Premium'
import { Suspense, useState } from 'react'
import Steps from './components/Steps/Steps'
import Pricing from './components/Pricing/Pricing'
import Ready from './components/Ready/Ready '

const fetchData = async() =>{
  const res = await fetch('/Cards.json')
  return res.json();
}
const fetchSteps = async() =>{
  const res = await fetch('/steps.json')
  return res.json();
}
const fetchPricing = async() =>{
  const res = await fetch('/Pricing.json')
  return res.json();
}

function App() {
  const [count,setCount] = useState(0)
   const dataPromise = fetchData();
   const stepPromise = fetchSteps()
   const PricingPromise = fetchPricing()

  return (
    <>
     <Navbar count={count}></Navbar>
     <Banner></Banner>
     <Stats></Stats>
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
       <Premium dataPromise={dataPromise} count={count} setCount={setCount}></Premium>
    </Suspense>
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Steps stepPromise={stepPromise}></Steps>
    </Suspense>
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Pricing PricingPromise ={PricingPromise }></Pricing>
    </Suspense>
   <Ready></Ready>
     <Footer></Footer>
    </>
  )
}

export default App
