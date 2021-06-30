import React from 'react';

class FieldsList extends React.Component {

	state = {
			error: null,
			isLoaded: false,
			items: ""		
		}

	componentDidMount() {
	fetch("http://localhost:5000/api/v1/Field/names")
		.then(response => response.text())
		.then(response => {
			this.setState({items: response});
			this.setState({isLoaded: true});
		})
		.then(response => {
			this.setState({false: true});
			this.setState({Error});
		})
	}

	render(){
		const {error, isLoaded, items} = this.state;
		const texts = items.replace("[", "Any,").replace("]", "").replace(/"/g, "").split(",");
		const names = texts.map(t => <option>{t}</option>);
		return (
		<div>
		{!isLoaded && <div>Loading fields...</div>}		
		{isLoaded && !error &&
			<select id="dbFields">
				{names}
			</select>
		}
		{error && <span>Error!</span>}
		</div>
		);
	}
}

export default FieldsList;