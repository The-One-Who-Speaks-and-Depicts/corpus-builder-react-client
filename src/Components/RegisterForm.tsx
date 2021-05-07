import React, {useContext} from 'react';
//@ts-ignore
import {register} from "../utils/register.tsx";


export function RegisterForm() {
	return (
		<div>
			<form action="post">
				Login: <input type="text" required /><br />
				Password: <input type="password" required /><br />
				Repeat password: <input type="password" required /><br />
				<button onClick={async(e) => {e.preventDefault(); await register();}}>Register</button>
			</form>
			
		</div>
		);
}