
import React from 'react';
import { getRevenue } from '../models/RevenueModel';
import { CircleContainer } from '../components/CircleContainer';
import { TabletContainer } from '../components/TabletContainer';
import { SmartphoneContainer } from '../components/SmartphoneContainer';
import '../scss/styleDashboardMetrics.scss'
const primaryColorRevenue = '336600';
const secondColorRevenue = '4C9900';
const circleTextRevenue = 'REVENUE';
const extraTextRevenue = '€';

export class MainContainer extends React.Component {

    constructor(props) {
        super()
        this.state = {
            primaryColor: props.primaryColor,
            secondColor: props.secondColor,
            circleText: props.circleText,
            extraText: props.extraText,
            gain: props.gain,
            total: props.total,
            tabletPorcent: props.tabletPorcent,
            tabletGain: props.tabletGain,
            smartphonePorcent: props.smartphonePorcent,
            smartphoneGain: props.smartphoneGain
            }
    }

    render() {
        return (
            <div className='main_container'>           
                <div className ='circle_container'>
                <CircleContainer 
                    gain = { this.state.gain}
                    total = { this.state.total}
                    primaryColor = { this.state.primaryColor }
                    secondColor = { this.state.secondColor }
                    circleText = { this.state.circleText }
                    extraText = { this.state.extraText }
                />
                </div>
                <div>
                    <TabletContainer
                    secondColor = { this.state.secondColor }
                    tabletPorcent = { this.state.tabletPorcent }
                    tabletGain = { this.state.tabletGain }
                    extraText = { this.state.extraText }
                    />
                </div>
                <div>             
                    <SmartphoneContainer 
                    smartphonePorcent = { this.state.smartphonePorcent }
                    smartphoneGain = { this.state.smartphoneGain }
                    primaryColor = { this.state.primaryColor } extraText = { this.state.extraText }
                    />
                </div>    
            </div>
        );
    }
}
