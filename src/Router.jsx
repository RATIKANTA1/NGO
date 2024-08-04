import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './components/Contact us'
import App from './App'
import MoreGallery from './components/MoreGallery'
import MoreMember from './components/MoreMember'


const Routing = () => {
  return < Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/home' element={<App />} />
      <Route path='/Contact' element={<Contact />}></Route>
      <Route path='/moregallery' element={<MoreGallery></MoreGallery>}></Route>
      <Route path='/moremember' element={<MoreMember></MoreMember>}></Route>
    </Routes>
  </Router>
}

export default Routing
