import React, { Component } from 'react';
import CollegesList from './CollegesList';
import { Chart } from "react-google-charts";
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
const pieOptions = {
    title: "",
    pieHole: 0.6,
    slices: [
        {
            color: "#2BB673"
        },
        {
            color: "#d91e48"
        },
        {
            color: "#007fad"
        },
        {
            color: "#e9a227"
        }
    ],
    legend: {
        position: "bottom",
        alignment: "center",
        textStyle: {
            color: "233238",
            fontSize: 14
        }
    },
    tooltip: {
        showColorCode: true
    },
    chartArea: {
        left: 0,
        top: 0,
        width: "100%",
        height: "80%"
    },
    fontName: "Roboto"
};
class Dashboard extends Component {
    state = {
        chartImageURI: ""
    };
    constructor() {
        super();
        this.state = {
            toUser: false
        };
    }
    pieChartSelectHandler(data) {
        window.location.href='/college/'+data;
    }
    render() {
        

        let x=0;
        let dataPie = {
            labels: ["Tamil Nadu", "Rajasthan", "Maharashtra", "Delhi", "West Bengal", "Uttar Pradesh", "Uttarakhand"],
            series: [74, 284, 727, 1, 1,1,1]
        }
       
        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row text-center justify-content-center">

                        <div className="col-md-8">
                            <div className="card pieDiv mb-5">
                                <div className="card-header mb-5">
                                    <h4 className="card-title">Statewise Number of Colleges</h4>
                                    
                                </div>
                            
                                <Chart
                                    chartType="PieChart"
                                    data={[["State", "Colleges"], ["Tamil Nadu", 1], ["Delhi", 1], ["Rajasthan", 2], ["Maharashtra", 3], ["West Bengal", 1], ["Uttarakhand", 1], ["Uttar Pradesh", 2]]}
                                    options={pieOptions}
                                    graph_id="PieChart"
                                    width={"100%"}
                                    height={"400px"}
                                    legend_toggle
                                    chartEvents={[
                                        {
                                            eventName: "select",
                                            callback: ({ chartWrapper, google }) => {
                                                var chart = chartWrapper.getChart();
                                                var selectedItem = chart.getSelection()[0];
                                                const dataTable = chartWrapper.getDataTable();
                                                var topping = dataTable.getValue(selectedItem.row, 0);
                                               // alert('The user selected ' + topping);
                                               //alert('The user selected ' + selectedItem);
                                            //  <Redirect to='/college' />
                                               this.pieChartSelectHandler(topping);
                                            }
                                        }
                                    ]}
                                />
                                {/* <div className="card-header mb-5">
                                    <h4 className="card-title">Coursewise Number of Colleges</h4>

                                </div>
                                <Chart
                                    chartType="PieChart"
                                    data={[["Course", "Colleges"], ["M.Tech", 5], ["B.Tech", 6], ["MSC", 3], ["BSC", 2], ["MCA", 5], ["BCA", 6], ["PH.D", 1], ["Mphill",1]]}
                                    options={pieOptions}
                                    graph_id="PieChart"
                                    width={"100%"}
                                    height={"400px"}
                                    legend_toggle
                                />
                                 */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
              
        )
    }
}

export default Dashboard
