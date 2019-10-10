import React from 'react';
import { Impresions } from './Impresions';
import { Revenue } from './Revenue';
import { Visits } from './Visits';


export class DashboardMetrics extends React.Component {

    render() {
        return (
            <div style={{ marginTop: 200, display: 'inline-block' }}>
                <div style={{ marginTop: -100, marginLeft: 200 }}>
                    <Revenue />
                </div>
                <div style={{ marginTop: -100, marginLeft: 600 }}>
                    <Impresions />
                </div>
                <div style={{ marginTop: -100, marginLeft: 1000 }}>
                    <Visits />
                </div>
            </div >
        );
    }

}
