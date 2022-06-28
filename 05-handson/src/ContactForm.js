import React from 'react'

export default class SurveyForm extends React.Component{
    //SEIPO
    // state - what are the state variables of the component?
        // ie what data is the component in charge of?
    // 

    state={
        firstName:'',
        lastName:'',
        enquiry:'',
    }

    updateFirstName=(event)=>{
        //event will always refer to the element which the event is happening on 
        this.setState({
            firstName: event.target.value
        })
    }
    updateLastName=(event)=>{
        //event will always refer to the element which the event is happening on 
        this.setState({
            lastName: event.target.value
        })
    }
    updateEnquiry=(event)=>{
        this.setState({
            enquiry: event.target.value
        })
    }

    render(){
        return(
            <div>
                <h1>Survey</h1>
                <div>
                    <label>First Name:</label>
                    <input type="text" 
                        className="form-control" 
                        value={this.state.firstName} 
                        onChange={this.updateFirstName}></input>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" 
                        className="form-control" 
                        value={this.state.lastName} 
                        onChange={this.updateLastName}></input>
                </div>
                <div>
                    <label>enquiry:</label>
                    <input type='radio'
                         name='enquiries' 
                         className="form-check-input" 
                         value="red"
                         onChange={this.updateEnquiry}
                         checked={this.state.enquiry==='support'}/>
                    <label className='form-check-label'>Support</label>
                    <input type='radio' 
                        name='enquiries' 
                        className="form-check-input" 
                        value="green"
                        onChange={this.updateEnquiry}
                        checked={this.state.enquiry==='sales'}/>
                    <label className='form-check-label'>Sales</label>
                    <input type='radio' 
                        name='enquiries' 
                        className="form-check-input" 
                        value="blue"
                        onChange={this.updateEnquiry}
                        checked={this.state.enquiry==='marketing'}/>
                    <label className='form-check-label'>Marketing</label>
                </div>
            </div>
        )
    }
}