import React, {Component} from 'react';
import ContactForm from './Form';
import { loginUser } from '../actions';
import { connect } from 'react-redux';

class login extends Component{
	
	constructor(props){
		super(props);
	}

	clickHandler(){
		browserHistory.push('/search');
	}

	submit = (values)=>  {
		this.props.loginUser(values)
	}
	
	check_login_status(){
		if (this.props.is_logging) {
			return (
				<ContactForm onSubmit={this.submit} buttonText="VALIDATING..." />
			)
		}else{
			return (
				<ContactForm onSubmit={this.submit} buttonText="LOGIN" />
			)
		}
	}

	renderError(){
		if (this.props.login_error) {
			return(
				<div className="login_error shadow">Invalid username or password</div>
			)
		}
	}

	render(){
		return(
			<div className="login_wrapper">
				{ this.renderError() }
				{ this.check_login_status() }
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const { is_logging, login_error } = state.login;
	return { is_logging, login_error };
}


export default connect(mapStateToProps,{ loginUser })(login);