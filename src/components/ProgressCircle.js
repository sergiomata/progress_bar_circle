import React from 'react';

// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Animation
import { easeQuadInOut } from 'd3-ease';
import AnimatedProgressProvider from '../providers/AnimatedProgressProvider';
import ChangingProgressProvider from '../providers/ChangingProgressProvider';

// Radial separators
import RadialSeparators from '../providers/RadialSeparators';

export class ProgressCircle extends React.Component {

    constructor(props) {
        super()
        this.state = {
            gain:props.gain,
            total: props.total,
            primaryColor: props.primaryColor,
            secondColor: props.secondColor,
            circleText: props.circleText
        }
    }
    
    render() {
        return (
            <div>
                <Example label="EXam PC">
                    <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={this.state.gain/this.state.total*100}
                        duration={1.4}
                        easingFunction={easeQuadInOut}
                    >
                        {value => {
                            const roundedValue = Math.round(value*(this.state.total/100)+(this.state.total-this.state.gain));
                            return (
                                <CircularProgressbarWithChildren
                                    value={value}
                                   // text={`${roundedValue}`}
                                    /* This is important to include, because if you're fully managing the
                            animation yourself, you'll want to disable the CSS animation. */
                                    styles={buildStyles({
                                        pathTransition: 'none',
                                        fontSize: 20,
                                        textColor: this.state.primaryColor,
                                        pathColor: this.state.primaryColor,
                                        trailColor: this.state.secondColor,
                                    })}>
                                    {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                                    <div style={{ fontSize: 20, marginTop: -20, color: '#C0C0C0' }}>
                                        <strong>{`${this.state.circleText}`}</strong>
                                    </div>
                                    <div style={{ fontSize: 20}}>
                                        <strong>{`${roundedValue}`}</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            );
                        }}
                    </AnimatedProgressProvider>
                </Example>

            </div>
        );

        function Example(props) {
            return (
                <div >
                    <div style={{ width: 200}}>{props.children}</div>
                </div>
            );
        }
    }

}
