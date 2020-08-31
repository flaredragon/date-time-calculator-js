import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [options, setOptions] = useState(null);
  const [date, setDate] = useState(null);
  const [operation, setOperation] = useState('Today');
  const [n, setN] = useState(null);
  const [ans, setAns] = useState('');
  
  useEffect(() => {
    async function loadOptions() {
      const res = await fetch('http://localhost:3000/operations');
      const option = await res.json();
      setOptions(option);
    };
    loadOptions();
  }, []);

  useEffect(()=>{
    if(options){
      console.log('woo');
      console.log(document.querySelector("#options"));
      
      document.querySelector("#options").selectedIndex = "0";
    }
  },[options]);

  const selectOptions =
    options ? Object.keys(options.operations).map(key => 
    <option key={key} value={options.operations[key]}>{options.operations[key]}</option>
  ) : null;

  const changeDate = (e) => {
    setDate(e.target.value);
  }

  const changeN = (e) => {
    setN(e.target.value);
  }

  const findDate = async(e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/operations', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({date,val:n,operation})
    }).then((res) => res.json());
    console.log(res);
    setAns(res.result);
  }

  const changeOperation = (e) =>{
    setOperation(e.target.value);
  }
  

  return (
    <div className="App">
      <select id="options" onChange={changeOperation}>
        {selectOptions}
      </select>
      <input type="date" onChange={changeDate}/>
      <input type="number" onChange={changeN}/>
      <button onClick={findDate}>Submit</button>
      <div>Answer - {ans}</div>
    </div>
  );
}

export default App;
