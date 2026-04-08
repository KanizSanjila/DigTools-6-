import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Stats from './components/Stats/Stats'
import Premium from './components/Premium/Premium'
import { Suspense } from 'react'

const fetchData = async() =>{
  const res = await fetch('/Cards.json')
  return res.json();
}

function App() {
   const dataPromise = fetchData();

  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <Stats></Stats>
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
       <Premium dataPromise={dataPromise}></Premium>
    </Suspense>
     <Footer></Footer>
    </>
  )
}

export default App
