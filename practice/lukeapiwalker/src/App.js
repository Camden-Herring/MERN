import {Route, Routes} from 'react-router-dom';
import './App.css';
import Form from './components/Form'
import PeopleComponent from './components/PeopleComponent';
import PlanetComponent from './components/PlanetComponent';

function App() {
  return (
    <div className="App">
      <h1>Star Wars</h1>
      <Form></Form>
      <Routes>
        <Route path='/people/:id/' element={<PeopleComponent/>} />
        <Route path='/planets/:id' element={<PlanetComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
