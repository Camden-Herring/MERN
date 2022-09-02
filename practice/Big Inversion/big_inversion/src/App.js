
import './App.css';

import PersonCard from './components/person_card';

function App() {
  return (
    <div>
      <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
      <PersonCard firstName="Jackson" lastName="Smith" age={ 9 } hairColor="Red" /> 
      <PersonCard firstName="Michael" lastName="Smith" age={ 10 } hairColor="White" /> 
      <PersonCard firstName="Molly" lastName="Smith" age={ 11 } hairColor="Green" /> 
    </div>
  );
}

export default App;
