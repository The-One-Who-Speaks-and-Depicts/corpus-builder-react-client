import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
// @ts-ignore
import ManuscriptsList from '../Components/ManuscriptsList.tsx';
// @ts-ignore
import Main from './Main.tsx';
//@ts-ignore
import {UserContext} from "../UserContext.tsx";
// @ts-ignore
import ManuscriptForm from '../Components/ManuscriptForm.tsx';

const postManuscript = async () => {

}

const editManuscript = async () => {

}

const deleteManuscript = async () => {
	document.getElementById("message")!.innerText = "";
	let manuscriptsHost: string = (document.getElementById("dbManuscripts")! as HTMLSelectElement).options[(document.getElementById("dbManuscripts")! as HTMLSelectElement).selectedIndex].value;
	const res : boolean = await fetch("http://localhost:5000/api/v1/Manuscript/?" + new URLSearchParams({id: manuscriptsHost}), {method: 'DELETE'})
		.then(response => response.text())
		.then(response => {
			if (response === "Success") {
				ReactDOM.render(<ManuscriptsList />, document.getElementById("manuscriptsList"));
				return true;
			}
			return false;
		});
	let message : string = res ? "Успешно!" : "Произошла ошибка" ;
	document.getElementById("message")!.innerText = message;
}

export function Manuscript() {
	const {user} = useContext(UserContext);
	return (<div>
	{user ?
			<div>
				<ManuscriptsList /><button id="editManuscript" onClick={() => editManuscript()}>Изменить документ</button><button id="deleteManuscript" onClick={() => deleteManuscript()}>Удалить документ</button>
				<ManuscriptForm />
				<div id="insertionButton"><button id="postManuscript" onClick={() => postManuscript()}>Внести изменения в базу данных</button></div><br />
				<div id="message"></div>
			</div>
			:
			<Main />}</div>);
}
