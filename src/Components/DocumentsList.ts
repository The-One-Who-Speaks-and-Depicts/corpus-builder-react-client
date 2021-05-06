import React from 'react';

class DocumentsList extends React.Component {

	state = {
			error: null,
			isLoaded: false,
			items: Array		
		}

	componentDidMount() {
	fetch("https://localhost:5001/api/v1/Document/names")
		.then(response => response.json())
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
		console.log(this.state.items);
		return "data";
	}
}

export default DocumentsList;