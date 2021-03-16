import './App.css';
import Character from './components/Character';
import styled from 'styled-components'
import axios from "axios"
import React, {useState, useEffect} from 'react'
import Button from './components/Button';

const App = () => {
  // Try to think through what state 
  //you'll need for this app before starting. Then build out
  // the state properties here.
  // Fetch characters from the API in an effect hook. 
  //Remember, anytime you have a 
  // side effect in a component, you want to think about 
  //which state and/or props it should
  // sync up with, if any.

  const [characterData, setCharacterData] = useState([]) // must be
  //inside or: react.development.js:1465 Uncaught Error: Invalid hook call. Hooks can only be called inside of the body of a function

  //initalize state with same value; here: array (....cuz arr still has .map method)

  useEffect (()=>{ //effects are great for sideeffect like stuff e.g. retr. data
    axios.get('https://swapi.dev/api/people')
         .then(res => setCharacterData(res.data))
        // console.log(res.data[i].name))
        //setCharacterData(res.data.name))
        //  
    return () => console.log("over here", setCharacterData)
  }, []) //elevating the state [sth] = runs whenever sth changes

//[] dep arr. = no reliance, runs once

  return (
    <div className="App">
      <h1 className="Header">React Wars ></h1>

      {characterData.map((character)=>{ //character = currentValue != *C*haracter
        return <Button><Character name={character.name} birth_year={character.birth_year} /> </Button> 
        // name/birth_year = prop
      })}

      {/* <Character/> */}
      {/* <Character>
        This where the characters should render</Character>  */}
        {/* access this with props.children */}
      <p>Test</p>

    </div>
  );
}

export default App;
