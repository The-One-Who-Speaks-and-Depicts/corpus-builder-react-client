import React from 'react';
import ReactDOM from 'react-dom';

class FieldAdditionForm extends React.Component {

    call = false;

    addDaughterLevel() {
        if (!this.call) {
            let daughterPlaceId: string = "FieldMother_" + document.getElementsByClassName("FieldMother").length.toString();
            this.call = true;
            ReactDOM.render(<FieldAdditionForm />, document.getElementById(daughterPlaceId));
        }
    }

    render() {
        let nextId: string = "FieldMother_" + (document.getElementsByClassName("FieldMother").length + 1).toString();
        return (
            <div className="FieldMother">
                <button onClick={() => this.addDaughterLevel()}>AddDaughterLevelClick</button>
                <div id={nextId}></div>
            </div>
        );
    }
}

export default FieldAdditionForm;
