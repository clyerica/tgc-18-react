import React from 'react'; //eqv to const React=require('react')
import logo from './logo.svg'
import './style.css'



//app.js is the default entry point to all react applications
function App(){ //creates a react component
  //react components MUST always return JSX
  return(
    //React.Fragment created single invisible parent f=div
    <React.Fragment> 
      <h1 style={{color:'green'}}>Hello World</h1>
      <p>Lorem Ipsum etc etc blah blah talking a lot of nonsense wheeeee</p>
      <img src={logo}/>
      <img src={require('./heh.png')} style={{height:'150px'}} alt/>
    </React.Fragment>
  )
}

//export the component
export default App //eqv to module.exports = App