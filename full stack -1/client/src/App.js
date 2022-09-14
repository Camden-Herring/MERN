import './App.css';
import AllHeroes from './components/AllHeroes';
import {Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddHero from './components/AddHero';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path = "/" element = {<AllHeroes/>}/>
      <Route path = "/hero/new" element = {<AddHero/>}/>
      </Routes>
    </div>
  );
}

export default App;
