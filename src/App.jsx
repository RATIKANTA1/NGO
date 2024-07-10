import './App.css'
import About from './components/About'
import Blog from './components/Blog'
// import Footer from './components/MyFooter'
import Home from './components/Home'
// import Component from './components/Navbar'
import Newsletter from './components/Newsletter'
import Products from './components/Products'
import Services from './components/Services'
import Donate from './components/Donate'
import Gallery from './components/Gallery'
import Companies from './components/Companies'


function App() {
 
  return (
    <>
      {/* <Component/> */}
      <Home/>
      <About/>
      <Services/>
      {/* <Products/> */}
      <Blog/>
      <Donate/>
      <Companies/>
      <Gallery/>
      <Newsletter/>
      {/* <Footer/> */}
    </>
  )
}

export default App
