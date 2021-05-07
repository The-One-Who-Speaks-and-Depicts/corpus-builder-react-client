import React, {useContext} from 'react';
//@ts-ignore
import {UserContext} from "../UserContext.tsx";
//@ts-ignore
import {login} from "../utils/login.tsx";


export function LoginForm() {
	const {user, setUser} = useContext(UserContext);
	return (
		<div>
			<form action="post">
				Login: <input type="text" required /><br />
				Password: <input type="password" required /><br />
				<button onClick={async(e) => {e.preventDefault();const user = await login; setUser(user);}}>Submit</button>
			</form>
			
		</div>
		);
}