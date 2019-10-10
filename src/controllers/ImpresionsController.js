
import React from 'react';
import { getImpresions } from '../models/ImpresionsModel';
import { Impresions } from '../components/Impresions';

export class ImpresionsController extends React.Component {

    constructor() {
        super()
        this.state = {
            impresions: getImpresions()
        }
    }

    render() {
        return (
            <Impresions />
        );
    }
}