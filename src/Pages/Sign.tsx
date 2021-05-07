import React, {useContext} from 'react';
//@ts-ignore
import {UserContext} from "../UserContext.tsx";


export function Sign() {
	const {user, setUser} = useContext(UserContext);
	return (<div></div>);
}
