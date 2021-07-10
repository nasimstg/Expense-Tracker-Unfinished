import React, { Component } from 'react'
import { ArrowUpward } from '@material-ui/icons';
import './cards.css'

export default class Card extends Component {
    render() {
        return (
            <div className="card flex fc">
                <h1 className="fz3 fw5">Cost</h1>
                <div className="numbers flex fr faicenter">
                    <div className="total mr10">$125</div>
                    <div className="percent mr10 cred">+2.8%</div>
                    <ArrowUpward className="cred"/>
                </div>
                <h3 className="des fz1 fw0">Compared to last Day</h3>
            </div>
        )
    }
}
