
import React from 'react';
import { getVisits } from '../models/VisitsModel';
import { Visits } from '../components/Visits';

export class VisitsController extends React.Component {

    constructor() {
        super()
        this.state = {
            visits: getVisits()
        }
    }

    render() {
        return (
            <Visits />
        );
    }
}