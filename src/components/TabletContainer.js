
import React from 'react';

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
            <div >
                <p style={{ color : this.state.secondColor}}> {'TABLET'} </p>
                <p style={{ color: this.state.tabletPorcentColor }}>{this.state.tabletPorcent+'%'}</p>
                <p style={{ color: this.state.tabletGainColor }}>{this.state.tabletGain+this.state.extraText}</p>
            </div>
        );
    }
}
