import React from "react";
import './styles.css';
import InputRange from "./InputRange";
import Gradient from "./Gradient";
import { useState } from "react";

function printValue(id, value) {
    const divContainerGradient = document.querySelector('#gradient-container');
    divContainerGradient.dangerouslySetInnerHTML = { __html: <Gradient hue={showHue} saturation={showSat} number={showStep} /> };
}

function Picker() {
    const [showHue, setShowHue] = useState(50);
    const [showSat, setShowSat] = useState(50);
    const [showStep, setShowStep] = useState(50);

    return (
        <>
            <div className="flex">
                <InputRange name={'hue'} min={0} max={360} value="100" showChange={setShowHue} />
                <InputRange name={'saturation'} min={0} max={100} value="50" showChange={setShowSat} />
                <InputRange name={'steps'} min={5} max={100} value="50" showChange={setShowStep} />
            </div>
            <div id="gradient-container" className="squares">
                <Gradient hue={showHue} saturation={showSat} number={showStep} />
            </div>
        </>
    );
}

export default Picker;