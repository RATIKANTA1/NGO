import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Component from './components/Navbar'
 import Footer from './components/MyFooter'
  import Aboutmore from './components/Aboutmore'
  import App from './App'
const Routing = () => {
  return < Router>
  {/* <Component/> */}
<Routes>
   
   <Route path='/' element={<App/>}/>

   <Route path='/readmore' element={<Aboutmore/>}/>
   
    

</Routes>

< Footer/>


</Router>
}

export default Routing
