import React, { Component } from 'react'
import './header.css'
import { AccountCircle } from '@material-ui/icons';

export default class header extends Component {
    render() {
        return (
            <div className="flex faicenter fjcsb nav bc9">
                <h1 className="fzmax fwmax tc2">CostCalc</h1>
                <AccountCircle className="nav-icon"/>
            </div>
        )
    }
}
