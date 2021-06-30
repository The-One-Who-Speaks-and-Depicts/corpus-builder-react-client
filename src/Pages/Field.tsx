import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
//@ts-ignore
import {UserContext} from "../UserContext.tsx";
// @ts-ignore
import FieldForm from '../Components/FieldForm.tsx';
// @ts-ignore
import FieldsList from '../Components/FieldsList.tsx';
//@ts-ignore
import Main from "./Main.tsx";

const postField = async() => {
	document.getElementById("message")!.innerText = "";
	let fieldName: string = (document.getElementById("FieldName")! as HTMLInputElement).value;
	let fieldDesc: string = (document.getElementById("FieldDesc")! as HTMLInputElement).value;
	let fieldRestricted: string = (document.getElementById("restricted")! as HTMLInputElement).checked ? "restricted" : "non-restricted";
	let fieldVals: string = (document.getElementById("FieldVals")! as HTMLInputElement).value.replace("\n", "<br />");
	let fieldMultiply: string = (document.getElementById("multiplied")! as HTMLInputElement).checked ? "multiplied" : "non-multiplied";
	let fieldHost: string = (document.getElementById("host")! as HTMLSelectElement).options[(document.getElementById("host")! as HTMLSelectElement).selectedIndex].value;
	let fieldPossessed: string = (document.getElementById("possessed")! as HTMLSelectElement).options[(document.getElementById("possessed")! as HTMLSelectElement).selectedIndex].value;
	const res : boolean = await fetch("http://localhost:5000/api/v1/Field/?" + new URLSearchParams({name: fieldName, description: fieldDesc, multiplied: fieldMultiply, restricted: fieldRestricted, host: fieldHost, possessed: fieldPossessed, values: fieldVals}), {method: 'POST'})
		.then(response => response.text())
		.then(response => {
			if (response === "Success") {
				(document.getElementById("FieldName")! as HTMLInputElement).value = "";
				(document.getElementById("FieldDesc")! as HTMLInputElement).value = "";
				(document.getElementById("restricted")! as HTMLInputElement).checked = false;
				(document.getElementById("multiplied")! as HTMLInputElement).checked = false;
				(document.getElementById("FieldVals")! as HTMLInputElement).value = "";
				(document.getElementById("host")! as HTMLInputElement).value = "";
				(document.getElementById("possessed")! as HTMLInputElement).value = "";
				ReactDOM.render(<FieldsList />, document.getElementById("fieldsList"));
				return true;
			}
			return false;
		});
	let message : string = res ? "Успешно!" : "Произошла ошибка" ;
	document.getElementById("message")!.innerText = message;
				
};


export function Field() {
	const {user} = useContext(UserContext);
	return (<div>
	{user ?
			<div>
				<h2>Fields page</h2>
				<div id="fieldsList"><FieldsList /></div><button id="editField">Изменить поле</button><button id="deleteField">Удалить поле</button>
				<FieldForm />
				<button id="changeField" onClick={() => postField()}>Внести изменения в базу данных</button><br />
				<div id="message"></div>
			</div>
			:
			<Main />}</div>);
}