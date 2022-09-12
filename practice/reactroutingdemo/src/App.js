import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Teams from './components/Teams';
import Players from './components/Players'
import {Link, Routes, Route} from 'react-router-dom';
import About from './components/About'

function App() {
  return (
    <div className="App">
      <h1>react routing</h1>
      <NavBar></NavBar>
      <Routes>
      <Route path='/' element={<h1>Hi, I'm Home</h1>}/>
      <Route path='/aboutus' element={<About/>}/>
      <Route path='/teams' element={<Teams/>}/>
      <Route path='/teams/:city' element={<Teams/>}/>
      <Route path='/teams/:city/:color1' element={<Teams/>}/>
      <Route path='/players' element={<Players/>}/>
      </Routes>
    </div>
  );
}

export default App;
