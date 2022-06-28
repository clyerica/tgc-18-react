import React from 'react'

export default class Dice extends React.Component{
    state={
        number: parseInt(Math.random()*6+1)
    }

    click = () =>{
        this.setState({
            number:parseInt(Math.random()*6+1)
        })
    }

   changeColor = () => {
    if (this.state.number===1){
        return "red"
    }
    if (this.state.number===6){
        return "green"
    }
    else{
        return "white"
    }
   }

    render(){
        return(
            <div onClick={this.click} style={{
                border: "3px solid black",
                padding:"10px",
                width:"20px",
                textAlign:"center",
                backgroundColor: this.changeColor()
            }}>
                {this.state.number}
            </div>
        )
    }
}