
import React from 'react';
import { getVisits } from '../models/VisitsModel';
import { MainContainer } from '../components/MainContainer';

const primaryColorVisits = '994C00';
const secondColorVisits = 'f5d72f';
const circleTextVisits = 'VISITS';
const extraTextVisits = '';

export class VisitsController extends React.Component {

    constructor() {
        super()
        this.state = {
            visits: getVisits(),
            primaryColor: primaryColorVisits,
            secondColor: secondColorVisits,
            circleText: circleTextVisits ,
            extraText: extraTextVisits
        }
    }

    render() {
        return (
            <MainContainer
                gain = { this.state.visits.smartphone.gain }
                total = { this.state.visits.tablet.gain+this.state.visits.smartphone.gain }
                primaryColor = { this.state.primaryColor }
                secondColor = { this.state.secondColor }
                circleText = { this.state.circleText }
                tabletPorcent = { this.state.visits.tablet.porcent }
                tabletGain = { this.state.visits.tablet.gain }
                smartphonePorcent = { this.state.visits.smartphone.porcent }
                smartphoneGain = { this.state.visits.smartphone.gain }
                extraText = { this.state.extraText }
            />
        );
    }
}
