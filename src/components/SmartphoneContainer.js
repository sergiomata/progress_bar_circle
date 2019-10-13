
import React from 'react';
import '../scss/styleDashboardMetrics.scss'
import { numberWithCommas } from '../utils/number'

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
            <div className='smartphone_container'>
                <h4 className= 'smartphone_main'> {'Smartphone'} </h4><br></br>
                <p className= 'smartphone_porcent'>{this.state.smartphonePorcent+'%  '}</p>
                <p className= 'smartphone_gain'>{numberWithCommas(this.state.smartphoneGain)+this.state.extraText}</p>
            </div>
        );
    }
}
