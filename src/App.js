import "./index.css";
import Nav from "./components/Nav/index.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero.jsx";
import Latest from "./components/Latest";
import HomeIntro from "./components/HomeIntro";
import HomeProjectList from "./components/HomeProjectList";
import HomeBackground from "./components/HomeBackground";
import { ProjectProvider } from "./ProjectContext";
import HomeSkillsCarousel from "./components/HomeSkillsCarousel";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <ProjectProvider>
      <>
        <Nav />
        <div className="App" id="app">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Latest />
                <HomeIntro />
                <HomeProjectList />
                <HomeBackground />
                <HomeSkillsCarousel />
              </>
            }/>
          
          <Route path="/about" element={
            <About/>
          }/>

          <Route path="/projects" element={
            <Projects/>
          }/>
        
          </Routes>
        </div>
        <Footer />
      </>
    </ProjectProvider>
  );
}

export default App;
