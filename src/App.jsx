
import { Suspense, useState } from 'react'
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
     const [coin, setCoin] = useState(50000)
  return (
    <>

      
      <NavBar coin={coin}></NavBar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading   loading-spinner text-success"></span>
         }>
           <Players playersPromise={playersPromise}setCoin={setCoin} coin={coin}></Players>
      </Suspense>
      

    </>
  )
}

export default App
