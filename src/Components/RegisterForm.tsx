import React, {useContext} from 'react';
//@ts-ignore
import {register} from "../utils/register.tsx";


export function RegisterForm() {
	return (
		<div>
			<form action="post">
				Login: <input id="register_login" type="text" required /><br />
				Password: <input id="register_password" type="password" required /><br />
				Repeat password: <input id="register_repeated_password" type="password" required /><br />
				<div id="response"></div>
				<button onClick={async(e) => {
					e.preventDefault(); 
					let login = (document.getElementById("register_login") as HTMLInputElement).value;
					let password = (document.getElementById("register_password") as HTMLInputElement).value;
					let repetition = (document.getElementById("register_repeated_password") as HTMLInputElement).value; 
					await register(login, password, repetition)
					.then((value : any) => console.log(value));
				}}>
				Register
				</button>
			</form>
			
		</div>
		);
}