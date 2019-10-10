
import React from 'react';
import { getRevenue } from '../models/RevenueModel';
import { Revenue } from '../components/Revenue';

export class RevenueController extends React.Component {

    constructor() {
        super()
        this.state = {
            revenue: getRevenue()
        }
    }

    render() {
        return (
            <Revenue />
        );
    }
}