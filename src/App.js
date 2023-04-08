import "./index.css";
import { Routes, Route } from 'react-router-dom';
import NewHome from "./components/NewHome";

function App() {
  return (
    <div className="App" id="app">
      <Routes>
        <Route path="/" element={
          <NewHome />
        } />
      </Routes>
    </div>
  );
}

export default App;
