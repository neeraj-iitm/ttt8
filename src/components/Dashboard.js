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
    render() {
        let dataPie = {
            labels: ["Madhya Pradesh", "Rajasthan", "Maharashtra"],
            series: [70, 20, 10]
        }
       
        return (
            <Router>
            <div className="content">
                <div className="container-fluid">
                    <div className="row text-center justify-content-center">

                        <div className="col-md-8">
                            <div className="card pieDiv">
                                <div className="card-header mb-5">
                                    <h4 className="card-title">Statewise Number of Colleges</h4>
                                    
                                </div>
                                <Chart
                                    chartType="PieChart"
                                    data={[["State", "Colleges"], ["Madhya Pradesh", 12], ["Rajasthan", 5], ["Himachal", 7]]}
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
                                                alert('The user selected ' + topping);
                                               //alert('The user selected ' + selectedItem);
                                                return <Redirect to='/college' />
                                              
                                            }
                                        }
                                    ]}
                                />
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <Switch>
                    <Route exact path='/college' component={CollegesList}></Route>
                </Switch>
                </Router>
        )
    }
}

export default Dashboard
