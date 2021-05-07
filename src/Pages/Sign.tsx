import React, {useContext} from 'react';
//@ts-ignore
import {UserContext} from "../UserContext.tsx";
//@ts-ignore
import {LoginForm} from "../Components/LoginForm.tsx";

export function Sign() {
	const {user, setUser} = useContext(UserContext);
	return (<div>
		<h2>Sign in</h2>
		<LoginForm />	
	</div>);
}
