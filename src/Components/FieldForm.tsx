import React from 'react';


class FieldForm extends React.Component {
    render(){
        return (
            <div id="addField">
                <h3>Добавить поле</h3>
                    <span id="subscription">Название признака:</span><br />
                    <textarea id="FieldName"></textarea><br />
                    <span id="subscription">Описание признака:</span><br />
                    <textarea id="FieldDesc"></textarea><br />
                    <input type="checkbox" id="restricted"  /> <span id="subscription">Ограничено ли множество значений пользователем, или значения уникальны и присваиваются в процессе ввода?:</span><br />
                    <span id="subscription">Значения признака:</span><br />
                    <textarea id="FieldVals"></textarea><br />
                    <input type="checkbox" id="restricted"  /> <span id="subscription">Может ли одна единица обладать несколькими значениями признака?</span><br />                  
                    <span id="subscription">Единица, для которой размечается признак:</span><br />
                    <select id="host">
                        <option>Рукопись</option>
                        <option>Секция</option>
                        <option>Сегмент</option>
                        <option>Клауза</option>
                        <option>Токен</option>
                        <option>Графема</option>
                    </select><br/>
                    <span id="subscription">Единица, несущая признак:</span><br />
                    <select id="possessed">
                        <option>Рукопись</option>
                        <option>Секция</option>
                        <option>Сегмент</option>
                        <option>Клауза</option>
                        <option>Токен</option>
                        <option>Графема</option>
                    </select><br/>
                    <button id="add">Добавить признак</button><br />
                    <span id="message"></span><br />
            </div>
        );
    }
}
                    
export default FieldForm;