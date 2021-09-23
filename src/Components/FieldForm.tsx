import React from 'react';

class FieldForm extends React.Component {

    OnPossessedChange = async () => {
        (document.getElementById("host") as HTMLSelectElement).innerHTML = "";
        let levels: string[] = ["Рукопись", "Секция", "Сегмент", "Клауза", "Токен", "Графема"];
        let level: number = (document.getElementById("possessed") as HTMLSelectElement).selectedIndex;
        for (let i = 0; i <= level; i++) {
            (document.getElementById("host") as HTMLElement).innerHTML += "<option>" + levels[i] + "</option>";
        }
    }

    render(){
        return (
            <div id="addField">
                <h3>Добавить поле</h3>
                    <span id="subscription">Название признака:</span><br />
                    <textarea id="FieldName"></textarea><br />
                    <span id="subscription">Описание признака:</span><br />
                    <textarea id="FieldDesc"></textarea><br />
                    <input type="checkbox" id="restricted"  /> <span id="subscription">Ограничено ли множество значений пользователем?:</span><br />
                    <span id="subscription">Значения признака (вводите по одному в строчке, без знаков препинания):</span><br />
                    <textarea id="FieldVals"></textarea><br />
                    <input type="checkbox" id="multiplied"  /> <span id="subscription">Может ли одна единица обладать несколькими значениями признака?</span><br />
                    <span id="subscription">Единица, несущая признак:</span><br />
                    <select id="possessed" onChange={() => this.OnPossessedChange()}>
                        <option>Рукопись</option>
                        <option>Секция</option>
                        <option>Сегмент</option>
                        <option>Клауза</option>
                        <option>Токен</option>
                        <option>Графема</option>
                    </select><br/>
                    <span id="subscription">Единица, в рамках которой размечается признак:</span><br />
                    <select id="host">
                        <option>Рукопись</option>
                        <option>Секция</option>
                        <option>Сегмент</option>
                        <option>Клауза</option>
                        <option>Токен</option>
                        <option>Графема</option>
                    </select><br/>
            </div>
        );
    }
}

export default FieldForm;
