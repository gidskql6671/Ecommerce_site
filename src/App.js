import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
	state = {
		username: null,
		number: 0,
		login: false
	}

	handleIncrease = () => {
		this.setState({
		  number: this.state.number + 1
		});
	}

	handleDecrease = () => {
		this.setState({
		  number: this.state.number - 1
		});
	}
	
	handleChangeName = (e) => {
		this.setState({
			username: e.target.value
		});
	}
	
	handleSendNumber = () => {
		axios.post('https://nodejs-server.run.goorm.io/api/write',{
			username: this.state.username,
			number: this.state.number
		});
	}
	  
	handleSendName = (e) => {
		if (!this.state.username){
			console.log("이름 입력");
			return;
		}
		
		axios.post('https://nodejs-server.run.goorm.io/api/read',{
			username: this.state.username
		})
		.then((res) => {
			console.log(res.data);
			this.setState({
				username: res.data.username,
				number: res.data.number,
				login: res.data.login
			});
		})
		.catch(err => {console.log(err)});
	}
	
	render(){
		  const {username} = this.state;
		  return (
			<div className="App">
				<header className="App-header">
					{this.state.login ? `Hello ${username}` : 'Hello World!!'}
				</header>
				<section className="App-section">
					{
						this.state.login
						? 
							<div> {this.state.username} </div>
						: 
						<form className="Name-form" onSubmit = {(e) => {e.preventDefault();}}>
							<input 
								placeholder="이름"
								onChange={this.handleChangeName}/>
							<button onClick={this.handleSendName}> submit </button>
						</form>
					}
					{this.state.login && <div className="User-value">
						<div>값 : {this.state.number} </div>
						<button onClick={this.handleIncrease}> + </button>
						<button onClick={this.handleSendNumber}> Send </button>
						<button onClick={this.handleDecrease}> - </button>
					</div>}
				</section>
				<footer className="App-footer">
					<div> asd </div>
				</footer>
			</div>
			  );
			}
}

export default App;
