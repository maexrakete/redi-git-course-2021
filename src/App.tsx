import React from 'react';
import './App.css';

const attendees = [{
  name: "Maex",
  role: "Instructor"
}]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ReDi Git Course 2021</h1>
        <h2>Attendees</h2>
        <ul>
          {attendees.map( ({name, role}) => <li>{name} ({role})</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
