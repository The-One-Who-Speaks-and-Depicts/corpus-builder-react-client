import React from 'react';
import ReactDOM from 'react-dom';

class FieldAdditionForm extends React.Component {

    call = false;

    addDaughterLevel() {
        let daughterPlaceId: number = document.getElementsByClassName("FieldMother").length;
        console.log(daughterPlaceId);
        if (!this.call) {
            this.call = true;
            ReactDOM.render(<FieldAdditionForm />, document.getElementById(daughterPlaceId.toString()));
        }
    }

    render() {
        let nextId: number = document.getElementsByClassName("FieldMother").length + 1;
        console.log(nextId);
        return (
            <div className="FieldMother">
                <button onClick={() => this.addDaughterLevel()}>AddDaughterLevelClick</button>
                <div id={nextId.toString()}></div>
            </div>
        );
    }
}

export default FieldAdditionForm;
