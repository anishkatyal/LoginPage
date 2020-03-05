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
			this.setState(
				{userError:"Invalid UserId", passError:"Invalid Password"})

        }
         else if (!this.valid(this.state.userid, this.userString.id)){
            this.setState({userError:"Invalid Email"})

        }
        else if(!this.valid(this.state.password, this.userString.pass)){
            this.setState({passError:"Invalid Password"})

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
        <div className = "login" >
			<h1>Login Page</h1>
		
			<input type = "text" placeholder="Email" className="main1"
			value = {
				this.state.userid
			}
			onChange = {
				this.handleIdChange
			}
			/> 
			<span className="error">{this.state.userError}</span>
			<input type = "password" placeholder="Password" className="main1"
			value = {
				this.state.password
			}
			onChange = {
				this.handlePassChange
			}
			/> 
			<span className="error">{this.state.passError}</span>

			<button className = "btn btn-primary btn-block btn-large"
			type = "submit"
			onClick = {
				this.handleSubmit
			}> Sign In </button> 
			<br/>
			<button className="btn1 btn1-primary btn1-block btn1-large">Sign Up</button>
            

			</div>
          
		)
	}
}

export default Login;