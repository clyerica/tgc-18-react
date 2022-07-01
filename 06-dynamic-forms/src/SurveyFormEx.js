import React from 'react'

export default class SurveyFormEx extends React.Component {
    // non-state variables
    countries = [
        {
            'display': 'Singapore',
            'value': 'singapore'
        },
        {
            'display': 'Malaysia',
            'value': 'malaysia'
        },
        {
            'display': 'Indonesia',
            'value': 'indonesia'
        }
    ]

    fruits = [
        {
            'display': 'Apple',
            'value': 'apple'
        },
        {
            'display': 'Banana',
            'value': 'banana'
        },
        {
            'display': 'Cherries',
            'value': 'cherries'
        }
    ]

    colours = [
        {
            'display': 'Red',
            'value': 'red'
        },
        {
            'display': 'Green',
            'value': 'green'
        },
        {
            'display': 'Blue',
            'value': 'blue'
        }
    ]

    renderColors() {
        let options = []
        for (let c of this.colours) {
            options.push(<React.Fragment>
                <input type='radio'
                    name='color'
                    className="form-check-input"
                    value={c.value}
                    key={c.value}
                    onChange={this.updateFormField}
                    checked={this.state.color === c.value} />
                <label className='form-check-label'>{c.display}</label>
            </React.Fragment>
            )
        }
        return options
    }


    state = {
        name: '',
        email: '',
        color: 'black',
        country: 'singapore',
        fruits: [],
        hasSubmitted: false
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
        else {
            let indexToRemove = this.state.fruits.indexOf(event.target.value);
            let cloned = [
                ...this.state.fruits.slice(0, indexToRemove),
                ...this.state.fruits.slice(indexToRemove + 1)
            ]
            this.setState({
                'fruits': cloned
            })
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
    getNameError() {
        if (this.state.name.length < 3) {
            return "Name must be 3 characters or more"
        }
        if (this.state.name.length > 20) {
            return "Name must be less than 20 characters"
        }
        else {
            return null
        }
    }
    getEmailError() {
        if (!this.state.email.includes('@')) {
            return "Please enter a valid email"
        }
        else {
            return null
        }
    }
    submit = () => {
        this.setState({
            hasSubmitted: true
        })
        if (!this.getNameError() && !this.getEmailError()) {
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
                    {this.getNameError() && this.state.hasSubmitted ? <span className="error">{this.getNameError()}</span> : ""}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text"
                        name="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.updateFormField}></input>
                    {this.getEmailError() && this.state.hasSubmitted ? <span className="error">{this.getEmailError()}</span> : ""}
                </div>
                <div>
                    <label>Favourite Colour:</label>
                    {this.renderColors()}
                </div>
                <div>
                    <label>Country</label>
                    <select className='form-control'
                        value={this.state.country}
                        name="country"
                        onChange={this.updateFormField}>
                        {this.countries.map(function (c) {
                            return <option key={c.value} value={c.value}>{c.display}</option>
                        })}
                    </select>
                </div>
                <div>
                    <label>Fruits:</label>
                    {this.fruits.map((f)=>(
                        <React.Fragment> 
                            <input type="checkbox"
                            name="fruits"
                            value={f.value}
                            key={f.value}
                            onChange={this.updateFruits}
                            />
                            {f.display} 
                        </React.Fragment>
                    ))}
                </div>
                <input type="submit" onClick={this.submit} className="btn btn-light" />
            </div >
        )
    }
}