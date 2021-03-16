// Write your Character component here
import styled from 'styled-components'
import axios from "axios"
import React, {useState, useEffect} from 'react'

export default function Character(props){ //cld be bananas, props === object to access keys passed down

const [characterData, setCharacterData] = useState('')

// useEffect (()=>{
//     axios.get('https://swapi.dev/api/people')
//           .then(res => console.log(res.data[i].name))
//         //setCharacterData(res.data.name))
//         //  
//     return () => console.log("over here", setCharacterData)
// }, [characterData]) //elevating the state

// const characterCards = characterId => {
//     setPosts(posts.map((character) =>{ //same as without ()
//       return posts.id === characterId //dummyData.post.id?
//       ? {...post, likes: post.likes + 1}
//       : post
//     }))
//     }

return (
    <div className = 'setCharacterData'>
        {console.log('characterDivIsHere')}
        <div>
            <h4>{props.name}</h4> 
            <p>{props.birth_year}</p>
 {/* again, only strings work without {} */}
        </div>
    </div>
)
}