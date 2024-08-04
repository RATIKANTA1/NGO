import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ConnectUs from './components/ConnectUs';
import BestVolunteer from './components/BestVolunteer'
import Services from './components/Services';
// import Donate from './components/Donate';
import Gallery from './components/Gallery';
import Scrolltop from './components/Scrolltop';
import MyFooter from './components/MyFooter';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';
import Groupmember from './components/Groupmember';
import Location from './components/Location';
import Review from './components/Review';

function App() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');

    if (section) {
      scroller.scrollTo(section, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -100,
      });
    } else {
      scroll.scrollToTop({
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id='member'><Groupmember/></section>
      <section id="services"><Services /></section>
      <section id='bestvolunteer'><BestVolunteer/></section>
      <section id="blog"><Blog /></section>
      {/* <section id="donate"><Donate /></section> */}
      <section id="gallery"><Gallery /></section>
      <section id='connectus'><ConnectUs /></section>
      <section id='review'><Review/></section>
      <section id='location'><Location/></section>
      <Scrolltop/>
      <MyFooter />
    </>
  );
}

export default App;
