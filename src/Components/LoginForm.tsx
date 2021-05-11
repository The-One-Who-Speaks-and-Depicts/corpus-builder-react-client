import React, {useContext} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
//@ts-ignore
import {UserContext} from "../UserContext.tsx";
//@ts-ignore
import {login} from "../utils/login.tsx";
//@ts-ignore
import Main from "../Pages/Main.tsx";

export function LoginForm() {
	const {user, setUser} = useContext(UserContext);
	return (
		<div>
			{user 
				? 
					<Redirect to="/" />			
				:
					<form action="post">
						Login: <input id="login" type="text" required /><br />
						Password: <input id="password" type="password" required /><br />
						<div id="login_response"></div><br />
						<button onClick={async(e) => {
							e.preventDefault();
							let loginField = document.getElementById("login") as HTMLInputElement;
							let passwordField = document.getElementById("password") as HTMLInputElement;
							let response = document.getElementById("login_response");
							if (response != null) {
								response.innerText = "";
							}					
							const user = await login(loginField.value, passwordField.value); 
							if (user != null) {
								setUser(user);
								if (response != null) {
									response.innerText = "Sucessfully logged in!";
								}
							}
							else {
								if (response != null) {
									response.innerText = "Error occured, please, try again";
								}
							}
						}}
						>Submit</button>
					</form>	
			}				
		</div>		
	);
}