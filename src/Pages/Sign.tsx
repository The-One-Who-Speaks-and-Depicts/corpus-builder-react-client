import React, {useContext} from 'react';
//@ts-ignore
import {UserContext} from "../UserContext.tsx";
//@ts-ignore
import LoginForm from "../Components/LoginForm.tsx";
//@ts-ignore
import {login} from "../utils/login.tsx";

export function Sign() {
	const {user, setUser} = useContext(UserContext);
	return (<div>
		<h2>Sign in</h2>
		<form action="post">
			<LoginForm />
			<button onClick={async(e) => {e.preventDefault();const user = await login; setUser(user);}}>Submit</button>
		</form>
	</div>);
}
