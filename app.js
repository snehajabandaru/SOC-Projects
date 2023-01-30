/*import App2 from './app2.js';

function App() {
    let handleclick = () =>{
        console.log("click");
    };
    let msg="new tab app.js";
    return (
        <div>
        <h2>App2</h2>
        <App2 message={msg}/>
        <button onclick={handleclick}>click</button>

        </div>
    );
}
export default App;*/

import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton /><br></br>
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
