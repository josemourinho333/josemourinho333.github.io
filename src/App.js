import "./scss/styles.js";
import Intro from './components/Intro';
import Current from "./components/Current.jsx";
import Featured from "./components/Featured/index";
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Intro />
      <Current />
      <About/>
      <Featured />
    </div>
  );
}

export default App;
