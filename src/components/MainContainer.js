
import React from 'react';
import { ProgressCircle } from './ProgressCircle';
import { TabletContainer } from './TabletContainer';
import { SmartphoneContainer } from './SmartphoneContainer';

export class MainContainer extends React.Component {

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
                <ProgressCircle gain = { this.state.gain }
                total = { this.state.total }
                primaryColor = { this.state.primaryColor } secondColor = { this.state.secondColor }
                circleText = { this.state.circleText }
                />
                <TabletContainer tabletPorcent = { this.state.tabletPorcent }
                tabletGain = { this.state.tabletGain }
                secondColor = { this.state.secondColor } extraText = { this.state.extraText }
                />
                <SmartphoneContainer smartphonePorcent = { this.state.smartphonePorcent }
                smartphoneGain = { this.state.smartphoneGain }
                primaryColor = { this.state.primaryColor } extraText = { this.state.extraText }
                />
                </div>
        );
    }
}