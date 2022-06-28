import './App.css';
import { Button } from './components/button';
import { Counter } from './components/counter';
import logo from "./img/freecodecamp-logo.png";
import {useState} from 'react';

function App() {
  const [clicks, setClicks] = useState(0);

  const onAdd = () =>{
    setClicks(clicks + 1)
  }
  const onRestart = () =>{
    setClicks(0)
  }
  
  return (
    <div className="App">
      <img
      src={logo}
      alt='freeCodeCamp logo'
      />
      {/* <h1 style={'color: white'}>Humble Counter</h1> */}
      <Counter
      count={clicks}
      />
      <Button
      label='Add'
      add={true}
      onClick={onAdd}
      />
      <Button
      label='Restart'
      add={false}
      onClick={onRestart}
      />
     </div>
  );
}

export default App;
