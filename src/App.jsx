
import {BrowserRouter} from 'react-router-dom';
// import { About , Contact , Experience , Feedbacks , Hero , Navbar , Tech , Works , Starcanvas } from './components';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Feedbacks from "./components/Feedbacks";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Starcanvas from "./components/canvas/Stars";

const App = () => {
  

  return (
    <>
      <BrowserRouter>
      <div className="relative z-0 bg-primary"> 
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          {<Navbar/>}
          { <Hero/> }
          </div>
          {<About/>}
          {<Experience/>}
          <Works/>
          <Tech/>
          <Feedbacks/>
          <div className="relative z=0">
          <Starcanvas/>
          
          
          <Contact/>
         </div>
      </div>
      </BrowserRouter>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
