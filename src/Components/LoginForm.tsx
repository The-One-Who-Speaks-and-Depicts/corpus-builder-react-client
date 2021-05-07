import React from 'react';

class LoginForm extends React.Component {

	
	render(){
		return (
		<div>
			Login: <input type="text" required /><br />
			Password: <input type="password" required /><br />
		</div>
		);
	}
}

export default LoginForm;