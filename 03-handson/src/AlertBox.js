

import React from 'react'

export default class AlertBox extends React.Component{
    state={
        "count":this.props.initialValue,
        "message": ""
    }

    increase = () =>{
        this.setState({
            count: this.state.count +1
        })
    }

    decrease =() =>{
        this.setState({
            count: this.state.count -1
        })
    }

    hover = () =>{
        this.setState({
            message:"that tickles!"
        })
    }
    unhover = () =>{
        this.setState({
            message:""
        })
    }
    
    render(){
        return (
           <div>
            <div style={{
                display:"flex",
                justifyContent:'center'
            }}>
                <button onClick={this.decrease}>-</button>
            <div onMouseEnter={this.hover} onMouseLeave={this.unhover} style={{
                backgroundColor: "salmon",
                color:"white",
                border: "3px solid red",
                margin: "5px",
                padding: "3px"
            }}>
            this alert has been clicked {this.state.count} times
            </div>
            <button onClick={this.increase}>+</button>
            </div>
            <div style={{textAlign:"center"}}>{this.state.message}</div>
            </div>
        )
    }
}