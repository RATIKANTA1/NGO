import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/MyFooter'
  // import Aboutmore from './components/Aboutmore'
import Contact from './components/Contact us'
import App from './App'
// import RegisterIntern from './components/RegisterIntern'
// import RegisterVolunteer from './components/RegisterVolunteer'
import MoreGallery from './components/MoreGallery'
import MoreMember from './components/MoreMember'
const Routing = () => {
  return < Router>
<Routes>
   
   <Route path='/' element={<App/>}/>
   <Route path='/home' element={<App/>}/>
    
   {/* <Route path='/readmore' element={<Aboutmore/>}/> */}
    <Route path='/Contact' element={<Contact/>}></Route>
    {/* <Route path='/registerintern' element={<RegisterIntern></RegisterIntern>}></Route> */}

    {/* <Route path='/registervolunteer' element={<RegisterVolunteer></RegisterVolunteer>}></Route> */}
    <Route path='/moregallery' element={<MoreGallery></MoreGallery>}></Route>
    <Route path='/moremember' element={<MoreMember></MoreMember>}></Route>
    

</Routes>

</Router>
}

export default Routing
