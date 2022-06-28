import React from 'react'

export default class SurveyForm extends React.Component{
    //SEIPO
    // state - what are the state variables of the component?
        // ie what data is the component in charge of?
    // 

    state={
        name:'',
        email:'',
        color:'black',
    }

    updateName=(event)=>{
        //event will always refer to the element which the event is happening on 
        this.setState({
            name: event.target.value
        })
    }
    updateEmail=(event)=>{
        //event will always refer to the element which the event is happening on 
        this.setState({
            email: event.target.value
        })
    }
    updateColor=(event)=>{
        this.setState({
            color: event.target.value
        })
    }

    render(){
        return(
            <div style={{
                color:this.state.color
            }}>
                <h1>Survey</h1>
                <div>
                    <label>Name:</label>
                    <input type="text" 
                        className="form-control" 
                        value={this.state.name} 
                        onChange={this.updateName}></input>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" 
                        className="form-control" 
                        value={this.state.email} 
                        onChange={this.updateEmail}></input>
                </div>
                <div>
                    <label>Favourite Colour:</label>
                    <input type='radio'
                         name='colors' 
                         className="form-check-input" 
                         value="red"
                         onChange={this.updateColor}
                         checked={this.state.color==='red'}/>
                    <label className='form-check-label'>Red</label>
                    <input type='radio' 
                        name='colors' 
                        className="form-check-input" 
                        value="green"
                        onChange={this.updateColor}
                        checked={this.state.color==='green'}/>
                    <label className='form-check-label'>Green</label>
                    <input type='radio' 
                        name='colors' 
                        className="form-check-input" 
                        value="blue"
                        onChange={this.updateColor}
                        checked={this.state.color==='blue'}/>
                    <label className='form-check-label'>Blue</label>
                </div>
            </div>
        )
    }
}