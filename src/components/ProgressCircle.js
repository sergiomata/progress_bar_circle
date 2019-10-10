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
const percentage = 66;

export class ProgressCircle extends React.Component {

    render() {
        return (
            <div>
                <Example label="EXam PC">
                    <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={66}
                        duration={1.4}
                        easingFunction={easeQuadInOut}
                    >
                        {value => {
                            const roundedValue = Math.round(value);
                            return (
                                <CircularProgressbarWithChildren
                                    value={value}
                                    text={`${roundedValue}`}
                                    /* This is important to include, because if you're fully managing the
                            animation yourself, you'll want to disable the CSS animation. */
                                    styles={buildStyles({
                                        pathTransition: 'none',
                                        fontSize: 20,
                                        textColor: 'gray',
                                        pathColor: 'turquoise',
                                        trailColor: 'gold',
                                    })}>
                                    {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                                    <div style={{ fontSize: 12, marginTop: 30 }}>
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
                    <div style={{ width: 100 }}>{props.children}</div>
                </div>
            );
        }
    }

}
