
import React from 'react';
import '../scss/styleRevenue.scss';
import { numberWithCommas } from '../utils/number'

const tabletPorcentColor = '$04040';
const tabletGainColor = 'E0E0E0';

export class TabletContainer extends React.Component {

    constructor(props) {
        super()
        this.state = {
            tabletPorcent: props.tabletPorcent,
            tabletGain: props.tabletGain,
            secondColor: props.secondColor,
            extraText: props.extraText,
            tabletPorcentColor: tabletPorcentColor,
            tabletGainColor: tabletGainColor
            }
    }
    render() {
        return (
            <div className='tablet_container'>
                <h4 className= 'tablet_main'> {'Tablet'} </h4><br></br>
                <p className= 'tablet_porcent'>{this.state.tabletPorcent+'%  '}</p>
                <p className= 'tablet_gain'>{ numberWithCommas(this.state.tabletGain)+this.state.extraText}</p>
            </div>           
        );
    }
}
