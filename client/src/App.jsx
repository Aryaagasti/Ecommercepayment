import Header from './components/Header'
import './App.css'
import CartDetails from './components/CartDetails'
import {Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import Success from './components/Success'
import Cancel from './components/Cancel'


function App() {
 

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<CartDetails/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path='/cancel' element={<Cancel/>}/>
    </Routes>
    
    </>
  )
}

export default App
