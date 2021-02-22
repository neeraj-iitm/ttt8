import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CollegesList from './CollegesList'
import CollegeDetails from './CollegeDetails'
import StudentsList from './StudentsList'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'

class Main extends Component {
    render() {
        return (
            <div className="main-panel">
                <Navbar />
                <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route exact path="/college/:state" component={CollegesList} />
                    <Route exact path="/collegedata/:id" component={CollegeDetails} />
                    <Route exact path="/students/:id" component={StudentsList} />
                    <Redirect from='*' to='/dashboard' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main