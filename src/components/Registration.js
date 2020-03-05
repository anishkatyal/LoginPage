import React, {Component} from 'react';

class Registration extends Component {
    constructor(){
        super();
        this.default = {
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
    render(){
        return(
            <div>
            <h1>Register Yourself</h1>
            </div>
        )
    }
}

export default Registration;