import React from 'react'

import BorderedImageFrame from './BorderedImageFrame';
import SumOfTwo from './SumOfTwo';
import Alert from './Alert';

function sayHello(){
  return "Hello"
}

function sayGoodbye(){
  let g=<p>Goodbye World</p>;
  // JSX = javascript objects so they can be assigned to variables
  return g
}

function foobar(){
  return <h3>Foobar!</h3>
}

// a component is 
  // 1. a function
  // 2. returns JSX
  // 3. first alphabet is uppercase
  // 4. can be used in JSX as if it is a HTML element

export default function App(){
  return(
    <React.Fragment>
      {/* <h1>Hello World</h1>
      {sayHello()}
      {sayGoodbye()}
      {foobar()} */}
      {/* create and render an instance of the alert component */}
      <BorderedImageFrame imageFile="klee.png"/>
      <SumOfTwo integer1={3} integer2={65}/>
      <Alert bgColor="red" message="Collision imminent"/>
      <Alert bgColor="salmon" message="Puppy power"/>
    </React.Fragment>
  )
}