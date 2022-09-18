import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Homepage from './components/Homepage';
import "bootstrap/dist/css/bootstrap.min.css";
import AddAuthor from './components/AddAuthor';
import UpdateAuthor from './components/UpdateAuthor';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path = "/" element={<Homepage/>}/>
      <Route path = "/author/new" element={<AddAuthor/>}/>
      <Route path = "/author/update/:id" element={<UpdateAuthor/>}/>
      </Routes>
    </div>
  );
}

export default App;
