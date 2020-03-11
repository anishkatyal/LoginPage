import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';

var currDate = new Date();
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
            passError:"",
            genError:"",
            direct: false,
        }
       
        this.state = this.default
        
        this.pattern = {
            id: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
            pass: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$&]).{4,8}$/,
            fName: /^[a-z]{2,}$/i


		}
    }
    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value}
        , () => {
            if(!this.valid(this.state.firstName, this.pattern.fName)){
                this.setState({firstError:"Invalid Name"})
            }
            else{
                this.setState({firstError:""})
            }
        })
    }
    handleLastNameChange = (event) => {
        this.setState({lastName:event.target.value}
        , () => {
            if(!this.valid(this.state.lastName, this.pattern.fName)){
                this.setState({lastError:"Invalid LastName"})
            }
            else{
                this.setState({lastError:""})
            }
        })
    }
    handleEmailChange = (event) => {
        this.setState({
            userEmail: event.target.value
    }, () => {
        if (!this.valid(this.state.userEmail, this.pattern.id)){
            this.setState({emailError:"Invalid Email"})
        } else {
            this.setState({emailError:""})
        }
    })

}
    handleAge = (event) =>{
        this.setState({age: event.target.value})
        var difference = currDate.getUTCFullYear() - new Date(event.target.value).getUTCFullYear() ;
        console.log("age", difference)

            if(difference < 18 || difference > 50){
                this.setState({ageError:"Age should be between 18 to 50"})
            }
            else{
                this.setState({ageError:""})
            }
        
    }
    // handleGender = (event) => {
    //     this.setState({gender: event.currentTarget.value}
    //     , () => {
    //         if(this.gender == false) {
    //             this.setState({genError:"Please select your gender"})
    //         }
    //         else{
    //             this.setState({genError:""})
    //         }
    //     })
    // }
    handlePassword = (event) => {
        this.setState({pass: event.target.value}
        , () => {
            if (!this.valid(this.state.pass, this.pattern.pass)){
                this.setState({passError:"Invalid Password"})
            } else {
                this.setState({passError:"" })
            }
        })
    }
    valid(field, regex) {
        console.log("userEmail",regex.test(field))
        return regex.test(field)
    }
     
      
	handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.firstName === "" || this.state.lastName === "" || this.state.userEmail=== "" || this.state.age==="" || this.state.pass === ""){
            alert("Please enter all the fields")
        }
        else{

            console.log("console.log state", this.state)

            let key = this.state.userEmail;
            // localStorage.clear();
            localStorage.setItem(key, JSON.stringify(this.state))
            console.log(localStorage)
            this.setState({direct:true})
        }
           
        
        

	}
    render(){
        if(this.state.direct===true){
         return   <Redirect to="/login" />
        }
        

        
        return(
            <div className="login">
            <h1>Register Yourself</h1>
            <input className="main1" type="text" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstNameChange} />
            <span className="error">{this.state.firstError}</span>
            <input className="main1" type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastNameChange} />
            <span className="error">{this.state.lastError}</span>
            <input className="main1" type="date" placeholder="Age" onChange={this.handleAge}/>
            <span className="error">{this.state.ageError}</span>
            <input className="main1" type="text" placeholder="Email" value={this.state.userEmail} onChange={this.handleEmailChange} />
            <span className="error">{this.state.emailError}</span>
            <input className="main1" type="password" placeholder="Password" value={this.state.pass} onChange={this.handlePassword} />
            <span className="error">{this.state.passError}</span>
            {/* <div class="main1">Gender: <input value="Male" onChange={this.handleGender} type="radio"  /> Male
            <input value="Female" onChange={this.handleGender}  type="radio" /> Female
            <input value="Other" onChange={this.handleGender}  type="radio"  /> Other
            </div><span className="error">{this.state.genError}</span> */}
            <button className="btn" type="submit" onClick={this.handleSubmit}>Register</button>
            </div>
            
        )
    }
}

export default Registration;