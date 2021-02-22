import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './components/Main';
import CollegesList from './components/CollegesList';
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Router>
          <Route path='/' component={Main} />
          {/* <Route exact path="/college" component={CollegesList} /> */}
        </Router>
      </div>
    )
  }
}

export default App