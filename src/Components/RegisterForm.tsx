import React from 'react';
//@ts-ignore
import {register} from "../utils/register.tsx";


export function RegisterForm() {
	return (
		<div>
			<form action="post">
				Login: <input id="register_login" type="text" required /><br />
				Password: <input id="register_password" type="password" required /><br />
				Repeat password: <input id="register_repeated_password" type="password" required /><br />
				<div id="register_response"></div><br />
				<button onClick={async(e) => {
					e.preventDefault(); 
					let login = (document.getElementById("register_login") as HTMLInputElement).value;
					let password = (document.getElementById("register_password") as HTMLInputElement).value;
					let repetition = (document.getElementById("register_repeated_password") as HTMLInputElement).value; 
					await register(login, password, repetition)
					.then((value : any) => {
						let response = document.getElementById("register_response");
						if (response != null) {
							response.innerText = "";
						}
						if (value) {
							if (response != null) {
								response.innerText = "Successfully signed up!";
							}
						}
						else {
							if (response != null) {
								response.innerText = "Some error occurred, please, try again";
							}							 
						}
						let loginField = document.getElementById("register_login") as HTMLInputElement;
						if (loginField != null) {
							loginField.value = "";
						}
						let passwordField = document.getElementById("register_password") as HTMLInputElement;
						if (passwordField != null) {
							passwordField.value = "";
						}
						let repetitionField = document.getElementById("register_repeated_password") as HTMLInputElement;
						if (repetitionField != null) {
							repetitionField.value = "";
						}
					});
				}}>
				Register
				</button>
			</form>
			
		</div>
		);
}