import React from 'react'
import DisplaySignupForm from './DisplaySignUpForm'

export default class SignupForm extends React.Component {
    state = {
        email: '',
        password: '',
        submitted: false
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    displaySignupSuccess = () => {
        return (
            <React.Fragment>
                Thank you for signing up. Please check your email at {this.state.email} for a verification link.
            </React.Fragment>
        )
    }

    render() {

        if (this.state.submitted == false) {
            return <DisplaySignupForm
                email={this.state.email}
                password={this.state.password}
                updateFormField={this.updateFormField}
                register={()=>this.setState({submittted:true})}
            />
        } else {
            return this.displaySignupSuccess();
        }

    }
}