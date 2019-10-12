
import React from 'react';
import { getImpresions } from '../models/ImpresionsModel';
import { MainContainer } from '../components/MainContainer';

const primaryColorImpresions = '001933';
const secondColorImpresions = '66B2FF';
const circleTextImpresions = 'IMPRESIONS';
const extraTextImpresions = '';

export class ImpresionsController extends React.Component {

    constructor() {
        super()
        this.state = {
            impresions: getImpresions(),
            primaryColor: primaryColorImpresions,
            secondColor: secondColorImpresions,
            circleText: circleTextImpresions,
            extraText: extraTextImpresions
            }
    }
    render() {
        return (
            <MainContainer
                gain = { this.state.impresions.smartphone.gain }
                total = { this.state.impresions.tablet.gain+this.state.impresions.smartphone.gain }
                primaryColor = { this.state.primaryColor }
                secondColor = { this.state.secondColor }
                circleText = { this.state.circleText }
                tabletPorcent = { this.state.impresions.tablet.porcent }
                tabletGain = { this.state.impresions.tablet.gain }
                smartphonePorcent = { this.state.impresions.smartphone.porcent }
                smartphoneGain = { this.state.impresions.smartphone.gain }
                extraText = { this.state.extraText }
            />
        );
    }
}