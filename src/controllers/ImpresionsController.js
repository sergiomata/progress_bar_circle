
import React from 'react';
import { getImpresions } from '../models/ImpresionsModel';
import { ProgressCircle } from '../components/ProgressCircle';

const primaryColorImpresions = '001933';
const secondColorImpresions = '66B2FF';
const circleTextImpresions = 'IMPRESIONS';

export class ImpresionsController extends React.Component {

    constructor() {
        super()
        this.state = {
            impresions: getImpresions(),
            /*
            tabletPorcent: this.state.impresions.tablet.porcent,
            tabletGain: this.stateimpresions.tablet.gain,
            smartphonePorcent: this.state.impresions.smartphone.porcent,
            smartphoneGain: this.state.impresions.smartphone.gain,
            */
            primaryColor: primaryColorImpresions,
            secondColor: secondColorImpresions,
            circleText: circleTextImpresions
            }
    }
    render() {
        return (
                <ProgressCircle gain={this.state.impresions.smartphone.gain}
                total={this.state.impresions.tablet.gain+this.state.impresions.smartphone.gain}
                primaryColor={this.state.primaryColor} secondColor={this.state.secondColor}
                circleText={this.state.circleText}
                />
        );
    }
}