import React from 'react';
import { ImpresionsController } from '../controllers/ImpresionsController';
import { RevenueController } from '../controllers/RevenueController';
import { VisitsController } from '../controllers/VisitsController';

export class DashboardMetrics extends React.Component {

    render() {
        return (
            <div style={{ marginTop: 200, display: 'inline-block' }}>
                <div style={{ marginTop: -100, marginLeft: 200 }}>
                    <RevenueController />
                </div>
                <div style={{ marginTop: -100, marginLeft: 600 }}>
                    <ImpresionsController />
                </div>
                <div style={{ marginTop: -100, marginLeft: 1000 }}>
                    <VisitsController />
                </div>
            </div >
        );
    }

}
