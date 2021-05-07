import React from 'react';
// @ts-ignore
import DocumentsList from '../Components/ManuscriptsList.tsx';

class Manuscript extends React.Component {
	
	render() {
		return(
		<div>
			<ManuscriptsList />
		</div>
	);
	}
}

export default Manuscript;