import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './components/Contact us'
import App from './App'
import MoreGallery from './components/MoreGallery'
import MoreMember from './components/MoreMember'
import DonatePage from './components/DonatePage'
import DonatePage2 from './components/DonatePage2'
import DonatePage3 from './components/DonatePage3'


const Routing = () => {
  return < Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/home' element={<App />} />
      <Route path='/Contact' element={<Contact />}></Route>
      <Route path='/moregallery' element={<MoreGallery></MoreGallery>}></Route>
      <Route path='/moremember' element={<MoreMember></MoreMember>}></Route>
      <Route path='/Donate' element={<DonatePage></DonatePage>}></Route>
      <Route path='/Donate2' element={<DonatePage2/>}></Route>
      <Route path='/Donate3' element={<DonatePage3/>}></Route>
      

    </Routes>
  </Router>
}

export default Routing
