import React from 'react';
import './App.css';

const attendees = [
  {
    name: "Maex",
    dreamjob: "Makerspace-Owner"
  },
  {
    name: "Tiago",
    dreamjob: "Synthesizer Creator"
  },
 // "Tiago Rezende",
 {
     name: "Niyat",
     dreamjob: "Astrophysicst"
 }, 
 // "Saerom",
 // "Matt",
 // "Christophe"
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ReDi Git Course 2021</h1>
        <h2>Attendees</h2>
        <ul>
          {attendees.map( ({name, dreamjob}) => <li>{name} wants to be a {dreamjob}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
