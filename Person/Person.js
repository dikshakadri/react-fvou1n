import React from 'react';

const person = (props) => {
  return (
  <div>
  <p> My name is {props.name}. I'm {props.age} year old </p>
  <p>{props.children}</p>
  <input type="text" onChange={}/>
  </div>
  )
};

export default person;

///{Math.floor(Math.random()*30)}  to get random value
// const person = () => {
//   return <p> I'm a React Developer with {Math.floor(Math.random()*30)} years of experience </p>
// }



///Using props
// const person = (props) => {
//   return (
//   <div>
//   <p> My name is {props.name}. I'm {props.age} year old </p>
//   <p>{props.children}</p>
//   </div>
//   )
// };