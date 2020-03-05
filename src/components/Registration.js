import React, {Component} from 'react';

class Registration extends Component {
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: "",
            userEmail: "",
            age: "",
            gender: "",
            pass:"",
            firstError:"",
            lastError: "",
            emailError: "",
            ageError: "",
            passError:""
        }
    }
    handleFirstNameChange = (event) => {
        this.setState({firstName:event.target.value})
    }
    handleLastNameChange = (event) => {
        this.setState({lastName:event.target.value})
    }
    handleIdChange = (event) => {
        this.setState({userEmail: event.target.value})
    }
    
    render(){
        return(
            <div>
            <h1>Register Yourself</h1>
            <input type="text" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstNameChange} />
            <input type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastNameChange} />
            <input type="text" placeholder="Email" value={this.state.userEmail} onChange={this.props.handleIdChange} />
            <input type="text" placeholder="Age" value={this.state.age} onChange="" />
            <input type="radio"  value={this.state.gender} onChange="" />
            <input type="password" placeholder="Password" value={this.state.pass} onChange="" />
            </div>
        )
    }
}

export default Registration;