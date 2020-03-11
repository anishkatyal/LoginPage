import React, {Component} from 'react';
import './Login.css';
import ReactDOM from 'react-dom';

import {Redirect, Link} from 'react-router-dom';

class Login extends Component {
	constructor() {
		super();
		this.default = {
			userid: "",
			password: "",
			userError: "",
			passError: "",
			loginError:"",
			direct: false
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
		}, () =>{
			if(this.state.password == "oneofakind"){
				this.setState({passError:"" })
			}
			else if(!this.valid(this.state.password, this.userString.pass)){
				this.setState({passError:"Invalid Password"})
			} 
				
			else {
				this.setState({passError:"" })
			}
		})
		
		
	}

	valid(field, regex) {
        console.log("userid",regex.test(field))
        return regex.test(field)
    }
  
	handleSubmit = (event) => {
		if(this.state.userid===""||this.state.password===""){
			return this.setState({loginError:"Please enter the Username and Password"})
		}
		else{
		for( let i=0;i<localStorage.length;i++){
			let c = localStorage.key(i)
			console.log(c)
			console.log(localStorage.getItem(c),"value")
			console.log(localStorage)
			console.log((JSON.parse(localStorage.getItem(c)).pass))
			if((this.state.userid===c && this.state.password===JSON.parse(localStorage.getItem(c)).pass)){
					console.log("Success")
				return	this.setState({direct: true})

			}
			else if(this.state.userid === "admin@cart.com" && this.state.password === "oneofakind"){
				console.log("Successful Admin Login")
				return this.setState({direct: true})
			}
			else{
				return this.setState({loginError:"User not found!!! Please register yourself"})			
			}
		}
	}
		event.preventDefault();
		console.log("console.log state", this.state)
		this.setState(this.default)
	}
	render() {
		if(this.state.direct=== true){
			return <Redirect to="/" />
		}
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


			<button className = "btn"
			type = "submit"
			onClick = {
			this.handleSubmit
			}> Sign In </button>
			<span className="error">{this.state.loginError}</span>
			<Link to="/register"><button  className="btn1">Sign Up</button>
            </Link>

			</div>
          
		)
	}
}

export default Login;