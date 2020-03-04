import React, {Component} from 'react';
import './Login.css';
class Login extends Component {
	constructor() {
		super();
		this.default = {
			userid: "",
			password: "",
			userError: "",
			passError: ""
		}
		this.state = this.default
		this.userString = {
            id: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
            pass: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{4,})/

		}
	}

	handleIdChange = (event) => {
		this.setState({
			userid: event.target.value
		})
	}

	handlePassChange = (event) => {
		this.setState({
			password: event.target.value
		})
	}

	valid(field, regex) {
        console.log("userid",regex.test(field))
        return regex.test(field)
    }
  

	validate = () => {
		if (!this.valid(this.state.userid, this.userString.id) && !this.valid(this.state.password, this.userString.pass)){
            alert("Invalid ID and Password")
            this.setState(this.default)

        }
         else if (!this.valid(this.state.userid, this.userString.id)){
            alert("Invalid ID")
            this.setState(this.default)

        }
        else if(!this.valid(this.state.password, this.userString.pass)){
            alert("Invalid Password")
            this.setState(this.default)

        }
        else{
            return true;
        }
	}
	handleSubmit = () => {
		if (this.validate()) {
			console.log(this.state)
			alert("Logged in Successfully")
			this.setState(this.default)
		}
	}
	render() {
		return ( 
        <div className = "main" >
			<h1 className="head">Login Page</h1>
			<div className="main1"><label className = "id"> UserID: </label> 
			<input type = "text"
			value = {
				this.state.userid
			}
			onChange = {
				this.handleIdChange
			}
			/> 
            </div>
			<div className="main2">
                <label className = "pass" > Password: </label> 
			<input type = "password"
			value = {
				this.state.password
			}
			onChange = {
				this.handlePassChange
			}
			/> 
            </div>
			<button className = "button"
			type = "submit"
			onClick = {
				this.handleSubmit
			}> Login </button> 
			<button className="button1">Register</button>
            

			</div>
          
		)
	}
}

export default Login;