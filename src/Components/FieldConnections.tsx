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

	async fieldChoice() {
		if (this.state.isLoaded){
			(document.getElementById("valueMother") as HTMLSelectElement).innerHTML = "";
			const selectedFieldValues = await fetch("http://localhost:5000/api/v1/Field/one?name=" + (document.getElementById("fieldMother")! as HTMLSelectElement).options[(document.getElementById("fieldMother")! as HTMLSelectElement).selectedIndex].value)
				.then(response => response.text());
			let vals = JSON.parse(selectedFieldValues).values.map((t : any) => t);
			vals.forEach((element : any) => {
				(document.getElementById("valueMother") as HTMLSelectElement).innerHTML += "<option>" + element + "</option>";
			});			
		}
	}

	render(){
		const {error, isLoaded, items} = this.state;
		const options = isLoaded ? JSON.parse(items).map((t : any) => t.isUserFilled ? "" : <option>{t.id}</option>) : "<option>Loading...</option>";
		const checkboxes = isLoaded ? JSON.parse(items).map((t : any) => <label><input type="checkbox" id={t.id} />{t.id}<br /></label>) : "<option>Loading...</option>";
		return (
		<div>
		{!isLoaded && <div>Loading fields...</div>}		
		{isLoaded && !error &&
			<div>
				<select id="fieldMother" onChange={() => this.fieldChoice()}>
					{options}
				</select>
				<select id="valueMother">
					<option>Any</option>
				</select> <br />
				{checkboxes}			
			</div>
		}
		{error && <span>Error!</span>}
		</div>
		);
	}
}

export default FieldConnections;