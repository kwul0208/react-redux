import logo from './logo.svg';
import './App.css';
import Counter from './component/counter';
import Result from './component/result';
import { useState } from 'react';

function App() {
  let [res, setRes] = useState(0);

  function handleAdd() {
    
    setRes(res+=1);
  }
  return (
    <>
    <Result result={res}/>
    <br />
    <Counter add={handleAdd}/>
    </>
  );
}

export default App;
