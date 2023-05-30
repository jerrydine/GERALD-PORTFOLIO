import './App.css';
// import About from './COMPONENTS/About.jsx'
import Nav from './COMPONENTS/Nav.js';
import About from './COMPONENTS/About.js';
import Skill from './COMPONENTS/Skill.js';
import Contact from './COMPONENTS/Contact';
import Projects from './COMPONENTS/Projects';
import Footer from './COMPONENTS/Footer';


function App() {
  return (
    <div className="App">
     <Nav/>
     <About/>
     <Skill/>
     <Projects/>
     <Contact/>
     <Footer/>
     
    </div>
  );
}

export default App;
