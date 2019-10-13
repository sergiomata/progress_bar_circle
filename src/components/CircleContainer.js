
import React from 'react';
import { ProgressCircle } from './ProgressCircle';

import '../scss/styleDashboardMetrics.scss'

export class CircleContainer extends React.Component {

    constructor(props) {
        super()
        this.state = {
            gain: props.gain,
            total: props.total,
            primaryColor: props.primaryColor,
            secondColor: props.secondColor,
            circleText: props.circleText,
            tabletPorcent: props.tabletPorcent,
            tabletGain: props.tabletGain,
            smartphonePorcent: props.smartphonePorcent,
            smartphoneGain: props.smartphoneGain,
            extraText:props.extraText
            }
    }
    render() {
        return (
                <div>
                    <ProgressCircle  gain = { this.state.gain }
                    total = { this.state.total }
                    primaryColor = { this.state.primaryColor } secondColor = { this.state.secondColor }
                    circleText = { this.state.circleText }
                    extraText = {this.state.extraText}
                    />
                </div>
        );
    }
}