
import React from 'react';
import { getRevenue } from '../models/RevenueModel';
import { ProgressCircle } from '../components/ProgressCircle';

const primaryColorRevenue = '336600';
const secondColorRevenue = '4C9900';
const circleTextRevenue = 'REVENUE';

export class RevenueController extends React.Component {

    constructor() {
        super()
        this.state = {
            revenue: getRevenue(),
            /*
            tabletPorcent: this.state.revenue.tablet.porcent,
            tabletGain: this.staterevenue.tablet.gain,
            smartphonePorcent: this.state.revenue.smartphone.porcent,
            smartphoneGain: this.state.revenue.smartphone.gain,
            */
            primaryColor: primaryColorRevenue,
            secondColor: secondColorRevenue,
            circleText: circleTextRevenue
            }
    }

    render() {
        return (
            <ProgressCircle gain={this.state.revenue.smartphone.gain}
            total={this.state.revenue.tablet.gain+this.state.revenue.smartphone.gain}
            primaryColor={this.state.primaryColor} secondColor={this.state.secondColor}
            circleText={this.state.circleText}
            />
        );
    }
}
