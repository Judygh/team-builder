// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';
import Forms from './Forms';
import Team from "./Team.js";
import styled from "styled-components";

const H1 = styled.h1`
  font-family: 'Kanit', sans-serif;
  color:white;
  font-size: 3.5em;f
  border-bottom: 5px double orange;
`;
  const names = [
    {
      id:1,
      name:"Sara",
      email:"Sara@you.me",
      role: "Manager"
    },
    {
      id:2,
      name:"Lacey",
      email: "lacey@you.me",
      role: "UX Designer"
    },
    {
      id:3,
      name:"Latasha",
      email: "latasha@you.me",
      role: "Front-end"
    },
    {
      id:3,
      name:"James",
      email: "james@you.me",
      role: "Back-end"
    },

  ];

function App() {
  const[teamList, setTeamList] = useState(names);
  const addNewMemeber = person =>{
    const newMember = {
      id: Date.now(),
      name: person.name,
      email: person.email,
      role: person.role
    }
    setTeamList([...teamList, newMember])
  }
  


  return (
    <div className="App">
      <H1>The Team</H1>
    <Forms addNewMember={addNewMemeber}/>
    <Team teamList={teamList} />
    </div>
  );
}

export default App;