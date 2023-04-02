import "./index.css";
import { Routes, Route } from 'react-router-dom';
import { ProjectProvider } from "./ProjectContext";
import NewHome from "./components/NewHome";

function App() {
  return (
    <ProjectProvider>
      <div className="App" id="app">
        <Routes>
          <Route path="/" element={
            <NewHome />
          } />
        </Routes>
      </div>
    </ProjectProvider>
  );
}

export default App;
