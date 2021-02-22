import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Button } from "react-bootstrap";
import { Card } from 'react-bootstrap';
class CollegeDetails extends Component{
    constructor(props){
          super(props);
        this.collegeId = this.props.match.params.id;
        this.similarColleges=[];
        let data = [{ id: 1, name: 'Indian Institute of Technology Madras', yearFounded: 1978, city: 'Chennai', state: 'Tamil Nadu', country: 'India', noOfStudents: 9, courses: ['B.Tech', ' M.Tech', 'BCA', 'MCA'] },
        { id: 2, name: 'Indian Institute of Technology Bombay', yearFounded: 1979, city: 'Mumbai', state: 'Maharashtra', country: 'India', noOfStudents: 8, courses: ['B.Tech', 'M.Tech'] },
        { id: 3, name: 'Indian Institute of Technology Delhi', yearFounded: 1959, city: 'New Delhi', state: 'Delhi', country: 'India', noOfStudents: 5, courses: ['BCA', 'MCA'] },
        { id: 4, name: 'Indian Institute of Technology Kharagpur', yearFounded: 1966, city: 'Kharagpur', state: 'West Bengal', country: 'India', noOfStudents: 16, courses: ['B.Tech', 'M.Tech', 'BCA', 'MCA', 'MSC'] },
        { id: 5, name: 'Indian Institute of Technology Kanpur', yearFounded: 1967, city: 'Kanpur', state: 'Uttar Pradesh', country: 'India', noOfStudents: 14, courses: ['B.Tech', 'MSC'] },
        { id: 6, name: 'Indian Institute of Technology Roorkee', yearFounded: 1954, city: 'Roorkee', state: 'Uttarakhand', country: 'India', noOfStudents: 12, courses: ['BSC', 'MSC'] },
        { id: 7, name: 'D Y Patil College', yearFounded: 1979, city: 'Mumbai', state: 'Maharashtra', country: 'India', noOfStudents: 20, courses: ['B.Tech', 'BCA', 'MCA'] },
        { id: 8, name: 'XYZ College', yearFounded: 1954, city: 'Nashik', state: 'Maharashtra', country: 'India', noOfStudents: 8, courses: ['BCA'] },
        { id: 9, name: 'University of Lucknow', yearFounded: 1987, city: 'Lucknow', state: 'Uttar Pradesh', country: 'India', noOfStudents: 8, courses: ['ITI', 'Diploma'] },
        { id: 10, name: 'Birla Institute of Technology & Science', yearFounded: 1969, city: 'Pilani', state: 'Rajasthan', country: 'India', noOfStudents: 6, courses: ['B.Tech', 'M.Tech', 'BCA', 'MCA'] },
        { id: 11, name: 'Ajmer University', yearFounded: 1999, city: 'Ajmer', state: 'Rajasthan', country: 'India', noOfStudents: 10, courses: ['Ph.D', 'M.Phill'] }

        ];
        this.collegeData='';
        for (let index = 0; index < data.length; index++) {

            if (data[index].id == this.collegeId) {
                this.collegeData=data[index];
            }

        }
        let similarColleges=[];
        for (let index = 0; index < data.length; index++) {
           if(data[index].id!=this.collegeId){
               if (data[index].city == this.collegeData.city) {
                   let coursesOffered = data[index].courses;
                   let currentCollegeCourses = this.collegeData.courses;
                   coursesOffered.forEach(function (course) {
                       var isPresent = currentCollegeCourses.indexOf(course);
                       if (isPresent !== -1) {
                          
                           similarColleges.push(data[index]);
                       }
                   });
               }
           }
         }
         this.similarColleges=similarColleges;
        console.log(this.similarColleges);

}
    handleButtonClick(){
        window.location.href='/students/'+this.collegeId;
    }
    redirectToCollegeRoute(id) {
        window.location.href = '/collegedata/' + id;
    }
    renderSimilarColleges() {
        if (this.similarColleges.length > 0)
            return <div className="mt-5">

                <h3 className="text-center">Colleges you may like</h3>
                {this.similarColleges.map(college => (
                    <div className="col-md-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{college.name}</Card.Title>
                                <Card.Text>
                                    <p><b>Year Founded in:</b> {college.yearFounded}</p>
                                    <p><b>City:</b> {college.city} &nbsp;&nbsp;&nbsp; <b>State:</b> {college.state} &nbsp;&nbsp;&nbsp; <b>Country:</b> {college.country}</p>

                                </Card.Text>
                                <Button variant="primary" className="button-narrow" onClick={() => {
                                    this.redirectToCollegeRoute(college.id);
                                }}>View</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))};

                </div> ;
        return <p className="text-center">No similar colleges foud!</p>;
    }
    render() {
        return (

            <div className="container">
                <Card className="mt-5 text-center pb-5">
                    <Card.Body>
                        <Card.Title ><h3>{this.collegeData.name}</h3></Card.Title>
                        <Card.Text>
                            <p><b>Year Founded in:</b> {this.collegeData.yearFounded}</p>
                            <p><b>City:</b> {this.collegeData.city} &nbsp;&nbsp;&nbsp; <b>State:</b> {this.collegeData.state} &nbsp;&nbsp;&nbsp; <b>Country:</b> {this.collegeData.country}</p>
                            <p><b>Courses Offered: </b>
                                {this.collegeData.courses.map(course => (
                                    <span> &nbsp;&nbsp;{course}</span>
                                ))}
                            </p>
                            <p><b>Number of Students: </b>{this.collegeData.noOfStudents}</p>
                        </Card.Text>
                        <Button variant="primary" className="button-narrow" onClick={() => {
                            this.handleButtonClick(this.collegeData.id);
                        }}>Get Students</Button>
                    </Card.Body>
                </Card>
                {this.renderSimilarColleges()}
            </div>
            

            
        )

    }
}
export default CollegeDetails;