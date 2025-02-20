import React from 'react';

class Table extends React.Component {
    render() {
        return <header className="App-Div-1" style={{minHeight: "50vh", paddingLeft: "0px"}}>
            <div className={"tColumn"} style={{backgroundColor: '#22356f'}}>
                <div style={{margin: "50px"}}>
                    <hr/>
                    <em>Готовое ТО</em>
                </div>
            </div>
            <div className={"tColumn"} style={{backgroundColor: '#0052c1'}}>
                <div style={{margin: "50px"}}>
                    <hr/>
                    <em>Выравнивание колёс</em>
                </div>
            </div>
            <div className={"tColumn"} style={{backgroundColor: '#76b58b'}}>
                <div style={{margin: "50px"}}>
                    <hr/>
                    <em>Настройка переключателей</em>
                </div>
            </div>
        </header>
    }
}

export default Table;