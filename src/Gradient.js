import React from "react";
import './styles.css';

function divStyle(hue, sat, ligth){
    return {
        backgroundColor : `hsl(${hue}, ${sat}%, ${ligth}%)`
    }
}

function createDivsColors(hue, sat, num){
    let divs = [];
    const inc = 100/num;
    for(let i=0; i<num; i++){
        divs.push(<div key={i} className="square" style={divStyle(hue, sat, inc*i)}></div>);
    }
    return divs;
}

function Gradient(props) {
    const {hue, saturation, number} = props;
    let divs = createDivsColors(hue, saturation, number);
    return (
        divs
    );
}

export default Gradient;