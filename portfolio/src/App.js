import Navbar from "./components/navbar/Navbar";
import Intro from "./components/Intro/Intro";
import './app.css';
import Skill from "./components/Skills/Skill";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Skill/>
     <Works/>
     <Contact/>
    </div>
  );
}

export default App;
