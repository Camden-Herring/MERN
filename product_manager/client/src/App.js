import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route} from "react-router-dom";
import HomePage from './components/HomePage';
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element={<HomePage/>}/>
        <Route path = "/product/:id" element={<OneProduct/>}/>
        <Route path = "/product/edit/:id" element={<EditProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
