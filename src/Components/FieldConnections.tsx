import React from 'react';
import { convertTypeAcquisitionFromJson } from 'typescript';

class FieldConnections extends React.Component {

	state = {
			error: null,
			isLoaded: false,
			items: ""		
		}
	
	
	valueChoice = async() => {
		let fieldMother : HTMLSelectElement = document.getElementById("fieldMother") as HTMLSelectElement;
		let valueMother : HTMLSelectElement = document.getElementById("valueMother") as HTMLSelectElement;
		let selectedKey : string = fieldMother.options[fieldMother.selectedIndex].text;
		let selectedValue : string = valueMother.options[valueMother.selectedIndex].text;
		if (selectedValue !== "Any")
		{
			let checkboxes : NodeListOf<Element> = document.querySelectorAll('#fieldConnector input');
			for (let i = 0; i < checkboxes.length; i++)
			{
				(checkboxes[i] as HTMLInputElement).disabled = false;
				(checkboxes[i] as HTMLInputElement).checked = false;
				if (checkboxes[i].id === selectedKey)
				{
					(checkboxes[i] as HTMLInputElement).disabled = true;
					(checkboxes[i] as HTMLInputElement).checked = false;
				}
				
			}
		}		
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
			(document.getElementById("valueMother") as HTMLSelectElement).innerHTML = "<option>Any</option>";
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
			<div id="fieldConnector">
				<select id="fieldMother" onChange={() => this.fieldChoice()}>
					<option>Any</option>
					{options}
				</select>
				<select id="valueMother" onChange={() => this.valueChoice()}>
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