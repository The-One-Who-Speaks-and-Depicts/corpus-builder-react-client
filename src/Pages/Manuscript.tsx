import React, {useContext} from 'react';
// @ts-ignore
import ManuscriptsList from '../Components/ManuscriptsList.tsx';
// @ts-ignore
import Main from './Main.tsx';
//@ts-ignore
import {UserContext} from "../UserContext.tsx";


export function Manuscript() {
	const {user} = useContext(UserContext);
	return (<div>
	{user ?
			<div>
				<ManuscriptsList />
			</div>
			:
			<Main />}</div>);
}
