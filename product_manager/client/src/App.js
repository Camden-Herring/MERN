import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route} from "react-router-dom";
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
