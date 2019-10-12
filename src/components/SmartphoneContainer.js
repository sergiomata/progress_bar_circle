
import React from 'react';

const smartphonePorcentColor = '$04040';
const smartphoneGainColor = 'E0E0E0';

export class SmartphoneContainer extends React.Component {

    constructor(props) {
        super()
        this.state = {
            smartphonePorcent: props.smartphonePorcent,
            smartphoneGain: props.smartphoneGain,
            primaryColor: props.primaryColor,
            extraText: props.extraText,
            smartphonePorcentColor: smartphonePorcentColor,
            smartphoneGainColor: smartphoneGainColor
            }
    }
    render() {
        return (
            <div >
                <p style={{ color : this.state.primaryColor}}> {'SMARTPHONE'} </p>
                <p style={{ color: this.state.smartphonePorcentColor }}>{this.state.smartphonePorcent+'%'}</p>
                <p style={{ color: this.state.smartphoneGainColor }}>{this.state.smartphoneGain+this.state.extraText}</p>
            </div>
        );
    }
}
