import React from 'react';
import './Person.css';


const person = (props) => {
  return (
    <div className="person">
      <p onClick={props.click}>I am {props.name}. My age is {props.age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change}/>

    </div>
  )
}

export default person;