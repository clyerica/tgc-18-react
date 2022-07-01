import React from 'react'

export default class ContactForm extends React.Component{
    //SEIPO
    // state - what are the state variables of the component?
        // ie what data is the component in charge of?
    // 

    state={
        firstName:'',
        lastName:'',
        enquiry:'',
        country:'singapore',
        contact:[]
    }

    // updateFirstName=(event)=>{
    //     //event will always refer to the element which the event is happening on 
    //     this.setState({
    //         firstName: event.target.value
    //     })
    // }
    // updateLastName=(event)=>{
    //     //event will always refer to the element which the event is happening on 
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }
    // updateEnquiry=(event)=>{
    //     this.setState({
    //         enquiry: event.target.value
    //     })
    // }

    // updateCountry=(event)=>{
    //     this.setState({
    //         country:event.target.value
    //     })
    // }
    updateFormfield=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    updateContact=(event)=>{
        if (this.state.contact.includes(event.target.value)){
            let indexToRemove=this.state.contact.indexOf(event.target.value)
            this.setState({
                contact: [
                    ...this.state.contact.slice(0,indexToRemove),
                    ...this.state.contact.slice(indexToRemove+1)
                ]
            })
        }
        else{
            this.setState({
                contact:[...this.state.contact, event.target.value]
            })
        }
    }

    getFirstNameError(){

    }
    getLastNameError(){
    
    }
    
    
    render(){
        return(
            <div>
                <h1>Contact</h1>
                <div>
                    <label>First Name:</label>
                    <input type="text" 
                        className="form-control" 
                        name='firstName'
                        value={this.state.firstName} 
                        onChange={this.updateFormfield}></input>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" 
                        className="form-control" 
                        name='lastName'
                        value={this.state.lastName} 
                        onChange={this.updateFormfield}></input>
                </div>
                <div>
                    <label>Type of enquiry:</label>
                    <input type='radio'
                         name='enquiry' 
                         className="form-check-input" 
                         value="support"
                         onChange={this.updateFormfield}
                         checked={this.state.enquiry==='support'}/>
                    <label className='form-check-label'>Support</label>
                    <input type='radio' 
                        name='enquiry' 
                        className="form-check-input" 
                        value="sales"
                        onChange={this.updateFormfield}
                        checked={this.state.enquiry==='sales'}/>
                    <label className='form-check-label'>Sales</label>
                    <input type='radio' 
                        name='enquiry' 
                        className="form-check-input" 
                        value="marketing"
                        onChange={this.updateFormfield}
                        checked={this.state.enquiry==='marketing'}/>
                    <label className='form-check-label'>Marketing</label>
                </div>
                <div>
                    <label>Country</label>
                    <select className='form-control'
                        value={this.state.country}
                        name="country" 
                        onChange={this.updateFormfield}>
                        <option value="singapore">Singapore</option>
                        <option value="malaysia">Malaysia</option>
                        <option value="thailand">Thailand</option>
                        <option value="vietnam">Vietnam</option>
                    </select>
                </div>
                <div>
                    <label>Method of Contact:</label>
                    <input type="checkbox" value="phone" name="contact" onChange={this.updateContact} checked={this.state.contact.includes("phone")}/>Phone
                    <input type="checkbox" value="email" name="contact" onChange={this.updateContact} checked={this.state.contact.includes("email")}/>Email
                    <input type="checkbox" value="slow-mail" name="contact" onChange={this.updateContact} checked={this.state.contact.includes("slow-mail")}/>Slow mail
                </div>
                <input type="submit" className="btn btn-dark mt-3" value="Submit" disabled={!this.state.firstName||!this.state.lastName||!this.state.enquiry||this.state.contact.length===0}/>
            </div>
        )
    }
}