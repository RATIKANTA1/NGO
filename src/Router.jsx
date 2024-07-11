import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
 import Footer from './components/MyFooter'
  import Aboutmore from './components/Aboutmore'
   import Contact from './components/Contact us'
  import App from './App'
const Routing = () => {
  return < Router>
  {/* <Navbar/> */}
<Routes>
   
   <Route path='/' element={<App/>}/>
    
   <Route path='/readmore' element={<Aboutmore/>}/>
    <Route path='/Contact' element={<Contact/>}></Route>
    

</Routes>

< Footer/>


</Router>
}

export default Routing
