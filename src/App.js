import "./index.css";
import Intro from './components/Intro';
import Current from "./components/Current.jsx";
import Featured from "./components/Featured/index";
import ProjectList from "./components/ProjectList.jsx";
import About from './components/About';
import Skills from "./components/Skills.jsx";
import Nav from "./components/Nav/index.jsx";
import Education from "./components/Education.jsx";
import Work from "./components/Work.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import UserInput from "./components/Input/index.jsx";
import { Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero.jsx";
import Latest from "./components/Latest";
import HomeIntro from "./components/HomeIntro";
import HomeProjectList from "./components/HomeProjectList";
import HomeContact from "./components/HomeContact";

function App() {
  return (
    <>
      <Nav />
      <div className="App" id="app">
        {/* <Contact /> */}
        {/* <Current /> */}
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Latest />
              <HomeIntro />
              <HomeProjectList />
              <HomeContact />
              {/* <Intro homepage={true}/>
              <UserInput homepage={true}/> */}
            </>
          }/>
        
        <Route path="/about" element={
          <>
            {/* <About/>
            <Skills />
            <Education />
            <Work />
            <Intro />
            <UserInput /> */}
          </>
        }/>

        <Route path="/projects" element={
          <>
          {/* <ProjectList />
          <Intro />
          <UserInput /> */}
          </>
        }/>
       
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
