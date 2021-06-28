import React, {useContext} from 'react';
//@ts-ignore
import {UserContext} from "../UserContext.tsx";
// @ts-ignore
import FieldForm from '../Components/FieldForm.tsx';
// @ts-ignore
import FieldsList from '../Components/FieldsList.tsx';
//@ts-ignore
import Main from "./Main.tsx";


export function Field() {
	const {user} = useContext(UserContext);
	return (<div>
	{user ?
			<div>
				<h2>Fields page</h2>
				<FieldsList /><button id="editField">Изменить поле</button><button id="deleteField">Удалить поле</button>
				<FieldForm />
				<button id="changeField">Внести изменения в базу данных</button><br />
			</div>
			:
			<Main />}</div>);
}