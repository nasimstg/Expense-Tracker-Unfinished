import React, { Component } from 'react'
import './daily.css'
import SpanningTable from '../table/table'
import Card from '../cards/card'

export default class Daily extends Component {
    render() {
        return (
            <div className="dailyViewContainer">
                <div className="flex mr25 ml25 mt25 fjcenter faicenter">
                    <h1 className="fz3 fw5">Your Daily Cost List</h1>
                    <button className="btn">Add New</button>
                </div>
                    <div className="flex mt25 mb25 mr75 ml75 fr">
                        <div className="left flex3">
                        <SpanningTable />
                        </div>
                        <div className="right flex1 ml75">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>            
                </div>
        )
    }
}
