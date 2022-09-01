import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <>
      <PersonCard person_name = {"Doe, Jane"} person_age = {45} person_hair_color = {"Black"}/>
      <PersonCard person_name = {"Smith, John"} person_age = {88} person_hair_color = {"Brown"}/>
      <PersonCard person_name = {"Fillmore, Millard"} person_age = {50} person_hair_color = {"Brown"}/>
      <PersonCard person_name = {"Smith, Maria"} person_age = {62} person_hair_color = {"Brown"}/>
    </>
  );
}

export default App;
