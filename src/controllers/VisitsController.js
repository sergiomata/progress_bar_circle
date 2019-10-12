
import React from 'react';
import { getVisits } from '../models/VisitsModel';
import { ProgressCircle } from '../components/ProgressCircle';

const primaryColorVisits = '994C00';
const secondColorVisits = 'CCCC00';
const circleTextVisits = 'VISITS';

export class VisitsController extends React.Component {

    constructor() {
        super()
        this.state = {
            visits: getVisits(),
            /*
            tabletPorcent: this.state.visits.tablet.porcent,
            tabletGain: this.statevisits.tablet.gain,
            smartphonePorcent: this.state.visits.smartphone.porcent,
            smartphoneGain: this.state.visits.smartphone.gain,
            */
            primaryColor: primaryColorVisits,
            secondColor: secondColorVisits,
            circleText: circleTextVisits    
        }
    }

    render() {
        return (
            <ProgressCircle gain={this.state.visits.smartphone.gain}
            total={this.state.visits.tablet.gain+this.state.visits.smartphone.gain}
            primaryColor={this.state.primaryColor} secondColor={this.state.secondColor}
            circleText={this.state.circleText}
            />
        );
    }
}
