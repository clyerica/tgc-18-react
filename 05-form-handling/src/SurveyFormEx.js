import React from 'react'

export default class SurveyFormEx extends React.Component {
    //SEIPO
    // state - what are the state variables of the component?
    // ie what data is the component in charge of?
    // 

    state = {
        name: '',
        email: '',
        color: 'black',
        country: 'singapore',
        fruits: [],
        hasSubmitted:false
    }

    //name all input types matching their associated state key 
    updateFormField = (event) => {
        let stateVariable = event.target.name
        this.setState({
            // square brackets allows javascript to evaluate the variable instead of taking it as a string.
            [stateVariable]: event.target.value
        })
    }

    updateFruits = (event) => {
        //check for value in array
        if (!this.state.fruits.includes(event.target.value)) {
            //1. clone original array
            let cloned = this.state.fruits.slice();
            // 2. update clone
            cloned.push(event.target.value)
            // 3. set cloned array into state, 
            this.setState({
                fruits: cloned
            })
        }
        else{
            let indexToRemove = this.state.fruits.indexOf(event.target.value);
            let cloned = [
                ...this.state.fruits.slice(0, indexToRemove),
                ...this.state.fruits.slice(indexToRemove+1)
            ]
            this.setState({
                'fruits':cloned})
            // this.setState({
            //     fruits:this.state.fruits.filter(function(i){return i!==event.target.value})
            // })
            //filtering not good for large arrays -> must filter through each item in the array 
        }
    }

    //or
    updateFruits2 = (event) => {
        this.setState({
            //... is a spread operator -> clones the HIGHEST level of array/object key-value pairs 
            //-> does not clone nested arrays etc
            'fruits': [...this.state.fruits, event.target.value]
        })
    }
    getNameError(){
        if (this.state.name.length<3){
            return "Name must be 3 characters or more"
        }
        if (this.state.name.length>20){
            return "Name must be less than 20 characters"
        }
        else{
            return null
        }
    }
    getEmailError(){
        if (!this.state.email.includes('@')){
            return "Please enter a valid email"
        }
        else{
            return null
        }
    }
    submit=()=>{
        this.setState({
            hasSubmitted:true
        })
        if (!this.getNameError() && !this.getEmailError()){
            alert('data is ok!')
        }
    }

    render() {
        return (
            <div style={{
                color: this.state.color
            }}>
                <h1>Survey</h1>
                <div>
                    <label>Name:</label>
                    <input type="text"
                        name="name"
                        className="form-control"
                        value={this.state.name}
                        onChange={this.updateFormField}>
                    </input>
                    {this.getNameError() && this.state.hasSubmitted ?<span className="error">{this.getNameError()}</span>:""}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text"
                        name="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.updateFormField}></input>
                    {this.getEmailError() && this.state.hasSubmitted ?<span className="error">{this.getEmailError()}</span>:""}
                </div>
                <div>
                    <label>Favourite Colour:</label>
                    <input type='radio'
                        name='color'
                        className="form-check-input"
                        value="red"
                        onChange={this.updateFormField}
                        checked={this.state.color === 'red'} />
                    <label className='form-check-label'>Red</label>
                    <input type='radio'
                        name='color'
                        className="form-check-input"
                        value="green"
                        onChange={this.updateFormField}
                        checked={this.state.color === 'green'} />
                    <label className='form-check-label'>Green</label>
                    <input type='radio'
                        name='color'
                        className="form-check-input"
                        value="blue"
                        onChange={this.updateFormField}
                        checked={this.state.color === 'blue'} />
                    <label className='form-check-label'>Blue</label>
                </div>
                <div>
                    <label>Country</label>
                    <select className='form-control'
                        value={this.state.country}
                        name="country"
                        onChange={this.updateFormField}>
                        <option value="singapore">Singapore</option>
                        <option value="malaysia">Malaysia</option>
                        <option value="indonesia">Indonesia</option>
                    </select>
                </div>
                <div>
                    <label>Fruits:</label>
                    <input type="checkbox" name="fruits" value="apple" onChange={this.updateFruits} />Apple
                    <input type="checkbox" name="fruits" value="orange" onChange={this.updateFruits} />Orange
                    <input type="checkbox" name="fruits" value="pineapple" onChange={this.updateFruits} />Pineapple
                    <input type="checkbox" name="fruits" value="durian" onChange={this.updateFruits} />Durian
                </div>
                <input type="submit" onClick={this.submit} className="btn btn-light"/>
            </div >
        )
    }
}