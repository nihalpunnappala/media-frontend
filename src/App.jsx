
import { Route,  Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './pages/Home'
import Watchhistory from './pages/Watchhistory'
import Landingpage from './pages/Landingpage'

function App() {
  
  return (
    <>
     <Header/>
    <Routes>
      <Route path='/'  element={<Landingpage/>}/>
      <Route path='/home'  element={<Home/>}/>
      <Route path='/watch-history'  element={<Watchhistory/>}/>
    </Routes> 
     <Footer/>
    </>
  )
}

export default App
