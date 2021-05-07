import React, {useContext} from 'react';
//@ts-ignore
import {UserContext} from "../UserContext.tsx";
//@ts-ignore
import {LoginForm} from "../Components/LoginForm.tsx";
//@ts-ignore
import {RegisterForm} from "../Components/RegisterForm.tsx";

export function Sign() {
	const {user, setUser} = useContext(UserContext);
	return (<div>
		<h2>Sign in</h2>
		<LoginForm />	
		<h2>Sign up</h2>
		<RegisterForm />
	</div>);
}
