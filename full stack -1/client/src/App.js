import './App.css';
import AllHeroes from './components/AllHeroes';
import {Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddHero from './components/AddHero';
import EditHero from './components/EditHero';
import OneHero from './components/OneHero';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path = "/" element = {<AllHeroes/>}/>
      <Route path = "/hero/new" element = {<AddHero/>}/>
      <Route path = "/hero/edit/:id" element = {<EditHero/>}/>
      <Route path='/hero/display/:id' element = {<OneHero/>}/>
      </Routes>
    </div>
  );
}

export default App;
