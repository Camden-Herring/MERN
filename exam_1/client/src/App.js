
import './App.css';
import {Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AllPets from './components/AllPets';
import CreatePet from './components/CreatePet';
import OnePet from './components/OnePet';
import UpdatePet from './components/UpdatePet';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path = "/" element = {<AllPets/>}/>
      <Route path = "/pet/new" element = {<CreatePet/>}/>
      <Route path = "/pet/display/:id" element = {<OnePet/>}/>
      <Route path = "/pet/update/:id" element = {<UpdatePet/>}/>
      </Routes>
    </div>
  );
}

export default App;
