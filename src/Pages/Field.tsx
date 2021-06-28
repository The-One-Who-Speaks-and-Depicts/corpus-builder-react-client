import React, {useContext} from 'react';
//@ts-ignore
import {UserContext} from "../UserContext.tsx";
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
				<FieldsList />
			</div>
			:
			<Main />}</div>);
}