import React from 'react';
import './App.css';

const attendees = [
  "Maex",
  "Tiago"
  "Kristo"
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ReDi Git Course 2021</h1>
        <h2>Attendees</h2>
        <ul>
          {attendees.map( name => <li>{name}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
