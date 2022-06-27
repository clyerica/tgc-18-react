import React from 'react'

export default function BorderedImageFrame(props){
    return <img src={require('./'+props.imageFile)} style={{border: '4px solid red', height: '300px'}}/>
  }