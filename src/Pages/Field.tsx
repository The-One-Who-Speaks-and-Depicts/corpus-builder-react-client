import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
//@ts-ignore
import {UserContext} from "../UserContext.tsx";
// @ts-ignore
import FieldForm from '../Components/FieldForm.tsx';
// @ts-ignore
import FieldsList from '../Components/FieldsList.tsx';
// @ts-ignore
import FieldConnections from '../Components/FieldConnections.tsx';
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
	let message : string = res ? "??????????????!" : "?????????????????? ????????????" ;
	document.getElementById("message")!.innerText = message;
				
};

const deleteField = async() => {
	document.getElementById("message")!.innerText = "";
	let fieldHost: string = (document.getElementById("dbFields")! as HTMLSelectElement).options[(document.getElementById("dbFields")! as HTMLSelectElement).selectedIndex].value;
	const res : boolean = await fetch("http://localhost:5000/api/v1/Field/?" + new URLSearchParams({id: fieldHost}), {method: 'DELETE'})
		.then(response => response.text())
		.then(response => {
			if (response === "Success") {
				ReactDOM.render(<FieldsList />, document.getElementById("fieldsList"));
				return true;
			}
			return false;
		});
	let message : string = res ? "??????????????!" : "?????????????????? ????????????" ;
	document.getElementById("message")!.innerText = message;
};

const editField = async() => {
	let fieldHost: string = (document.getElementById("dbFields")! as HTMLSelectElement).options[(document.getElementById("dbFields")! as HTMLSelectElement).selectedIndex].value;
	var res = await fetch("http://localhost:5000/api/v1/Field/one/?" + new URLSearchParams({name: fieldHost}), {method: 'GET'})
		.then(response => response.json())
		.then(response => {
			return response;
		});
	ReactDOM.render(<div><button id="changeField" onClick={() => patchField()}>???????????? ?????????????????? ?? ???????? ????????????</button><button onClick={() => getBackToPost()} id="returnToPost">?????????????????? ?? ???????????????? ??????????</button></div>, document.getElementById("insertionButton"));
	(document.getElementById("FieldName")! as HTMLInputElement).value = (document.getElementById("dbFields")! as HTMLSelectElement).options[(document.getElementById("dbFields")! as HTMLSelectElement).selectedIndex].value;
	(document.getElementById("FieldDesc")! as HTMLInputElement).value = res.description;
	(document.getElementById("restricted")! as HTMLInputElement).checked = res.isUserFilled ? false : true;
	(document.getElementById("FieldVals")! as HTMLInputElement).value = res.isUserFilled? "" : res.values.join("\n");
	(document.getElementById("multiplied")! as HTMLInputElement).checked = res.isMultiple ? true : false;
	(document.getElementById("host")! as HTMLSelectElement).value = res.host;
	(document.getElementById("possessed")! as HTMLSelectElement).value = res.possessed;
};

const patchField = async() => {
	document.getElementById("message")!.innerText = "";
	let fieldName: string = (document.getElementById("FieldName")! as HTMLInputElement).value;
	let fieldDesc: string = (document.getElementById("FieldDesc")! as HTMLInputElement).value;
	let fieldRestricted: string = (document.getElementById("restricted")! as HTMLInputElement).checked ? "restricted" : "non-restricted";
	let fieldVals: string = (document.getElementById("FieldVals")! as HTMLInputElement).value.replace("\n", "<br />");
	let fieldMultiply: string = (document.getElementById("multiplied")! as HTMLInputElement).checked ? "multiplied" : "non-multiplied";
	let fieldHost: string = (document.getElementById("host")! as HTMLSelectElement).options[(document.getElementById("host")! as HTMLSelectElement).selectedIndex].value;
	let fieldPossessed: string = (document.getElementById("possessed")! as HTMLSelectElement).options[(document.getElementById("possessed")! as HTMLSelectElement).selectedIndex].value;
	const res : boolean = await fetch("http://localhost:5000/api/v1/Field/?" + new URLSearchParams({name: fieldName, description: fieldDesc, multiplied: fieldMultiply, restricted: fieldRestricted, host: fieldHost, possessed: fieldPossessed, values: fieldVals}), {method: 'PATCH'})
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
	let message : string = res ? "??????????????!" : "?????????????????? ????????????" ;
	document.getElementById("message")!.innerText = message;
};

const getBackToPost = async() => {
	(document.getElementById("FieldName")! as HTMLInputElement).value = "";
	(document.getElementById("FieldDesc")! as HTMLInputElement).value = "";
	(document.getElementById("restricted")! as HTMLInputElement).checked = false;
	(document.getElementById("multiplied")! as HTMLInputElement).checked = false;
	(document.getElementById("FieldVals")! as HTMLInputElement).value = "";
	(document.getElementById("host")! as HTMLInputElement).value = "";
	(document.getElementById("possessed")! as HTMLInputElement).value = "";				
	ReactDOM.render(<button id="changeField" onClick={() => postField()}>???????????? ?????????????????? ?? ???????? ????????????</button>, document.getElementById("insertionButton"));
};

const addConnection = async() => {
	let checkboxes : NodeListOf<Element> = document.querySelectorAll('#fieldConnector input');
	let fieldMother : HTMLSelectElement = document.getElementById("fieldMother") as HTMLSelectElement;
	let valueMother : HTMLSelectElement = document.getElementById("valueMother") as HTMLSelectElement;
	let selectedKey : string = fieldMother.options[fieldMother.selectedIndex].text;
	let selectedValue : string = valueMother.options[valueMother.selectedIndex].text;
	for (let i = 0; i < checkboxes.length; i++)
	{
		if ((checkboxes[i] as HTMLInputElement).checked)
		{
			let conn : string = selectedKey + ":" + selectedValue + "=>" + checkboxes[i].id + ";\n";
			let connectionsArea : HTMLElement = document.getElementById("connectionsArea") as HTMLElement;
			if (!connectionsArea.innerText.includes(conn))
			{
				connectionsArea.innerText += conn;
			}
		}
	}
}

const insertConnections = async() => {
	document.getElementById("connMessage")!.innerText = "???????????????? ??????????????...";
	let conns : string = (document.getElementById("connectionsArea") as HTMLElement).innerText;
	const res : boolean = await fetch("http://localhost:5000/api/v1/Field/connection?" + new URLSearchParams({conns: conns}), {method: 'POST'})
		.then(response => response.text())
		.then(response => {
			if (response === "Success") {
				(document.getElementById("connectionsArea")! as HTMLElement).innerText = "";
				ReactDOM.render(<FieldsList />, document.getElementById("fieldsList"));
				return true;
			}
			return false;
		});
	let message : string = res ? "??????????????!" : "?????????????????? ????????????" ;
	document.getElementById("connMessage")!.innerText = message;
}

const deleteConnections = async() => {
	document.getElementById("connMessage")!.innerText = "???????????????? ??????????????...";
	let conns : string = (document.getElementById("connectionsArea") as HTMLElement).innerText;
	const res : boolean = await fetch("http://localhost:5000/api/v1/Field/connection?" + new URLSearchParams({conns: conns}), {method: 'DELETE'})
		.then(response => response.text())
		.then(response => {
			if (response === "Success") {
				(document.getElementById("connectionsArea")! as HTMLElement).innerText = "";
				ReactDOM.render(<FieldsList />, document.getElementById("fieldsList"));
				return true;
			}
			return false;
		});
	let message : string = res ? "??????????????!" : "?????????????????? ????????????" ;
	document.getElementById("connMessage")!.innerText = message;
}



export function Field() {
	const {user} = useContext(UserContext);
	return (<div>
	{user ?
			<div>
				<h2>Fields page</h2>
				<div id="fieldsList"><FieldsList /></div><button id="editField" onClick={() => editField()}>???????????????? ????????</button><button id="deleteField" onClick={() => deleteField()}>?????????????? ????????</button>
				<FieldForm />
				<div id="insertionButton"><button id="changeField" onClick={() => postField()}>???????????? ?????????????????? ?? ???????? ????????????</button></div><br />
				<div id="message"></div>
				<FieldConnections />
				<div id="addingConnectionButton"><button id="addConnection" onClick={() => addConnection()}>???????????????? ??????????</button></div><br />
				<div id="connectionsArea"></div>
				<div id="erasingConnectionButton"><button id="eraseConnection" onClick={() => {(document.getElementById("connectionsArea") as HTMLElement).innerText = "";}}>?????????????? ?????????????????? ??????????</button></div><br />				
				<div id="insertionConnectionButton"><button id="insertConnection" onClick={() => insertConnections()}>?????????????? ????????</button></div><br />
				<div id="deletingConnectionButton"><button id="deleteConnection" onClick={() => deleteConnections()}>?????????????? ?????????? ?????????? ????????????</button></div><br />
				<div id="connMessage"></div>
			</div>
			:
			<Main />}</div>);
}