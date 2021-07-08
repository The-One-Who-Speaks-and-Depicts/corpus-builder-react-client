import React from 'react';

class FieldConnections extends React.Component {

	state = {
			error: null,
			isLoaded: false,
			items: ""		
		}

	componentDidMount() {
	fetch("http://localhost:5000/api/v1/Field/")
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
		const options = isLoaded ? JSON.parse(items).map((t : any) => <option>{t.id}</option>) : "<option>Loading...</option>";
		const checkboxes = isLoaded ? JSON.parse(items).map((t : any) => <label><input type="checkbox" id={t.id} />{t.id}<br /></label>) : "<option>Loading...</option>";
		return (
		<div>
		{!isLoaded && <div>Loading fields...</div>}		
		{isLoaded && !error &&
			<div>
				<select>
					{options}
				</select>
				<select>
					<option>Any</option>
				</select> <br />
				{checkboxes}
				<textarea id="FieldCons"></textarea><br />				
			</div>
		}
		{error && <span>Error!</span>}
		</div>
		);
	}
}

export default FieldConnections;