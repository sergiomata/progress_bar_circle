
import React from 'react';
import { getRevenue } from '../models/RevenueModel';
import { MainContainer } from '../components/MainContainer';

const primaryColorRevenue = '336600';
const secondColorRevenue = '4C9900';
const circleTextRevenue = 'REVENUE';
const extraTextRevenue = '€';

export class RevenueController extends React.Component {

    constructor() {
        super()
        this.state = {
            revenue: getRevenue(),
            primaryColor: primaryColorRevenue,
            secondColor: secondColorRevenue,
            circleText: circleTextRevenue,
            extraText: extraTextRevenue
            }
    }

    render() {
        return (
            <MainContainer
                gain = { this.state.revenue.smartphone.gain }
                total = { this.state.revenue.tablet.gain+this.state.revenue.smartphone.gain }
                primaryColor = { this.state.primaryColor }
                secondColor = { this.state.secondColor }
                circleText = { this.state.circleText }
                tabletPorcent = { this.state.revenue.tablet.porcent }
                tabletGain = { this.state.revenue.tablet.gain }
                smartphonePorcent = { this.state.revenue.smartphone.porcent }
                smartphoneGain = { this.state.revenue.smartphone.gain }
                extraText = { this.state.extraText }
            />
        );
    }
}
