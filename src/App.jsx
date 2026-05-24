
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/HomePage/Banner/Banner'
import Players from './Components/HomePage/Players/Players'
import NavBar from './Components/NavBar/NavBar'

const fetchPlayer = async()=>{
     const res = await fetch("/data.json")
     return res.json();
}

function App() {
 
     const playersPromise = fetchPlayer();
  return (
    <>

      
      <NavBar></NavBar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading   loading-spinner text-success"></span>
         }>
           <Players playersPromise={playersPromise}></Players>
      </Suspense>
      

    </>
  )
}

export default App
