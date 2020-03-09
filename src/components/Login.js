import React, {Component} from 'react';
import './Login.css';
import ReactDOM from 'react-dom';

import {Link} from 'react-router-dom';

class Login extends Component {
	constructor() {
		super();
		this.default = {
			userid: "",
			password: "",
			userError: "",
			passError: "",
			disable: true
		}
		this.state = this.default
		this.userString = {
            id: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
            pass: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$&]).{4,8}$/

		}
	}

	handleIdChange = (event) => {
		this.setState({
			userid: event.target.value
		}, () => {
			if (!this.valid(this.state.userid, this.userString.id)){
				this.setState({userError:"Invalid Email"})
			} else {
				this.setState({userError:""})
			}
		})
	
	}

	handlePassChange = (event) => {
		this.setState({
			password: event.target.value
		})
		
		if(!this.valid(this.state.password, this.userString.pass)){
            this.setState({passError:"Invalid Password"})
        } else {
			this.setState({passError:"", disable: false})
		}
	}

	valid(field, regex) {
        console.log("userid",regex.test(field))
        return regex.test(field)
    }
  
	handleSubmit = (event) => {
		event.preventDefault();
		console.log("console.log state", this.state)
		this.setState(this.default)
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


			<Link to="/"><button disabled={this.state.disable} className = "btn"
			type = "submit"
			onClick = {
			this.handleSubmit
			}> Sign In </button>
			</Link><br/>
			<Link to="/register"><button  className="btn1">Sign Up</button>
            </Link>

			</div>
          
		)
	}
}

export default Login;