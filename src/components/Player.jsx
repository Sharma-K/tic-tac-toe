import { useState } from "react"
export default function Player({initialName, symbol}){
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(initialName);
    function clickHandler(){
        setIsEditing(isEditing => !isEditing); // it is used for dynamically change
        // setIsEditing(!isEditing)  -> this will have the older state and not dynamic

    }
    function handleChange(e){
        setName(e.target.value);
    }
    const field = <input type="text" value={name} required onChange={handleChange}/>
    return (
        <li>
        <span className="player">
      {isEditing ? field :  <span className="player-name">{name}</span> }
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={clickHandler}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}