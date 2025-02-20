import React from 'react';

class Info extends React.Component {
    render() {
        const title = this.getTitle();
        const text = this.getText();
        const col = this.getColor();
        const textcol = this.getTextColor();
        const img = this.getImage();

        if (img == null) return <div className="App-Div-1" style={{backgroundColor: col, color: textcol}}>
            <div style={{flexDirection: "column", margin: "50px", paddingRight: "100px"}}>
                <h2><em>{title}</em></h2>
                <p>{text}</p>
            </div>
        </div>;

        return this.isImageRight() ? <div className="App-Div-1" style={{backgroundColor: col, color: textcol}}>
            <div style={{flexDirection: "column", margin: "50px", paddingRight: "100px"}}>
                <h2><em>{title}</em></h2>
                <p>{text}</p>
            </div>
            <img src={img} className={"App-image"} alt="img"/>
        </div> : <div className="App-Div-1" style={{backgroundColor: col, color: textcol, paddingLeft: "0px"}}>
            <img src={img} className={"App-image"} alt="img"/>
            <div style={{flexDirection: "column", margin: "50px", paddingRight: "100px"}}>
                <h2><em>{title}</em></h2>
                <p>{text}</p>
            </div>
        </div>
    }


    isImageRight(){
        return true;
    }

    getImage() {
        return null
    }

    getTitle() {
        return "null"
    }

    getText() {
        return "null";
    }

    getColor() {
        return 'white';
    }

    getTextColor() {
        return 'black';
    }

}

export default Info;