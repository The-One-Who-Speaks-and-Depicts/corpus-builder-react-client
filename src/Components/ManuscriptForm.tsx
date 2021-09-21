import React from 'react';

class ManuscriptForm extends React.Component {

    render(){
        return (
            <div id="addManuscript">
                <h3>Добавить рукопись</h3>
                    <span id="subscription">Название рукописи:</span><br />
                    <textarea id="ManuscriptName"></textarea><br />
                    <span id="subscription">Путь к файлу онлайн:</span><br />
                    <textarea id="onlinePath"></textarea><br />
                    <span id="subscription">Путь к файлу локально:</span><br />
                    <textarea id="localPath"></textarea><br />

            </div>
        );
    }
}

export default ManuscriptForm;
