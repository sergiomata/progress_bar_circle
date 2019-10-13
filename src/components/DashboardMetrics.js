import React from 'react';
import { ImpresionsController } from '../controllers/ImpresionsController';
import { RevenueController } from '../controllers/RevenueController';
import { VisitsController } from '../controllers/VisitsController';
import '../scss/styleDashboardMetrics.scss'
export class DashboardMetrics extends React.Component {

    render() {
        return (
            <div className = 'app'>
                <div className ='revenue_controller'> 
                    <RevenueController />
                    <br/>
                </div >
                <div className ='impresions_controller'> 
                <ImpresionsController />
                    <br/>
                </div>
                <div className ='visits_controller'>
                <VisitsController />
                </div>
            </div>
        );
    }

}
