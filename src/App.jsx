import { useState } from 'react';
import emoji from './assets/emoji.svg';
import './App.css';
let nextId = 0;

export function App() {
  const [target, setTarget] = useState('');
  const [arr, setArr] = useState([]);

  return (
    <div>
      <h1>To do's:</h1>
      <input onChange={(x) => setTarget(x.target.value)} type="text" id='text'></input>
      <button onClick={() => {setArr([...arr, { id: nextId++, name: target }
      ]);
      }}>Add</button>
      <ul>
        {arr.map((item) => (
          <div key={item.id}>
            <li>{item.name}{' '}</li>
            
            <button onClick={() => {
              setArr(arr.filter(a => a.id !== item.id));
            }}>Delete</button>

          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
