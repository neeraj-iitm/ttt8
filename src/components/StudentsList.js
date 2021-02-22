import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Button } from "react-bootstrap";

class StudentsList extends Component{
    constructor(props) {
        super(props);
        let collegeId = this.props.match.params.id;

        this.columns = [{
            dataField: 'id',
            text: 'Id'
        }, {
            dataField: 'name',
            text: 'Name'
        }, {
            dataField: 'yearOfBatch',
            text: 'Year of Batch'
        }, 
           
       

        ];
        
  
        let data = [{ id: 23231, name: 'Fitan', yearOfBatch: 1953, collegeId: '1', skills: [{ skillname: "Node.js" }, { skillname: "Sklearn" }, { skillname: "C++" }, { skillname: "Ruby" }, { skillname: "Python" }] },
        { id: 23232, name: 'Shaurya', yearOfBatch: 1957, collegeId: '1', skills: [{ skillname: "Ruby" }, { skillname: "Python" }, { skillname: "C++" }, { skillname: "Node.js" }] },
        { id: 23233, name: 'Balhaar', yearOfBatch: 1973, collegeId: '1', skills: [{ skillname: "Ruby" }] },
        { id: 23234, name: 'Ikbal', yearOfBatch: 1955, collegeId: '1', skills: [{ skillname: "Python" }] },
        { id: 23235, name: 'Saksham', yearOfBatch: 1966, collegeId: '1', skills: [{ skillname: "Node.js" }, { skillname: "C++" }, { skillname: "Ruby" }, { skillname: "Python" }] },
        { id: 23236, name: 'Atharv', yearOfBatch: 1967, collegeId: '1', skills: [{ skillname: "Node.js" }, { skillname: "Ruby" }, { skillname: "Python" }, { skillname: "Sklearn" }] },
        { id: 23237, name: 'Laban', yearOfBatch: 1977, collegeId: '1', skills: [{ skillname: "Ruby" }] },
        { id: 23238, name: 'Arin', yearOfBatch: 1957, collegeId: '1', skills: [{ skillname: "Sklearn" }] },
        { id: 232317, name: 'Mohammed', yearOfBatch: 1955, collegeId: '1', skills: [{ skillname: "C++" }, { skillname: "Sklearn" }] },
        { id: 1001, name: 'Faris', yearOfBatch: 1959, collegeId: '2', skills: [{ skillname: "Python" }, { skillname: "Node.js" }, { skillname: "C++" }] },
        { id: 1002, name: 'Pranit', yearOfBatch: 1970, collegeId: '2', skills: [{ skillname: "Sklearn" }, { skillname: "Ruby" }, { skillname: "C++" }, { skillname: "Node.js" }, { skillname: "Python" }] },
        { id: 1003, name: 'Omkaar', yearOfBatch: 1958, collegeId: '2', skills: [{ skillname: "Ruby" }, { skillname: "Sklearn" }, { skillname: "Node.js" }, { skillname: "Python" }] },
        { id: 1004, name: 'Tanish', yearOfBatch: 1974, collegeId: '2', skills: [{ skillname: "Sklearn" }, { skillname: "Node.js" }] },
        { id: 1005, name: 'Indrajit', yearOfBatch: 1969, collegeId: '2', skills: [{ skillname: "Ruby" }, { skillname: "C++" }, { skillname: "Sklearn" }, { skillname: "Python" }] },
        { id: 1006, name: 'Lakshay', yearOfBatch: 1974, collegeId: '2', skills: [{ skillname: "C++" }, { skillname: "Node.js" }, { skillname: "Python" }, { skillname: "Ruby" }, { skillname: "Sklearn" }] },
        { id: 10012, name: 'Indrajit', yearOfBatch: 1960, collegeId: '2', skills: [{ skillname: "Node.js" }] },
        { id: 10013, name: 'Ansh', yearOfBatch: 1959, collegeId: '2', skills: [{ skillname: "Node.js" }, { skillname: "C++" }] },
        { id: 2001, name: 'Neel', yearOfBatch: 1980, collegeId: '3', skills: [{ skillname: "Sklearn" }, { skillname: "Python" }, { skillname: "C++" }] },
        { id: 2002, name: 'Hredhaan', yearOfBatch: 1979, collegeId: '3', skills: [{ skillname: "Node.js" }, { skillname: "Sklearn" }, { skillname: "Python" }, { skillname: "Ruby" }] },
        { id: 2003, name: 'Bachittar', yearOfBatch: 1955, collegeId: '3', skills: [{ skillname: "Node.js" }, { skillname: "Python" }, { skillname: "C++" }, { skillname: "Ruby" }, { skillname: "Sklearn" }] },
        { id: 20014, name: 'Fiyaz', yearOfBatch: 1963, collegeId: '3', skills: [{ skillname: "Ruby" }, { skillname: "Sklearn" }, { skillname: "Node.js" }, { skillname: "Python" }, { skillname: "C++" }] },
        { id: 20015, name: 'Girindra', yearOfBatch: 1965, collegeId: '3', skills: [{ skillname: "Sklearn" }, { skillname: "Python" }, { skillname: "Ruby" }, { skillname: "Node.js" }] },
        { id: 3001, name: 'Siddharth', yearOfBatch: 1977, collegeId: '4', skills: [{ skillname: "Ruby" }, { skillname: "Node.js" }, { skillname: "Python" }, { skillname: "Sklearn" }, { skillname: "C++" }] },
        { id: 3002, name: 'Jatin', yearOfBatch: 1962, collegeId: '4', skills: [{ skillname: "Python" }] },
        { id: 3003, name: 'Agastya', yearOfBatch: 1980, collegeId: '4', skills: [{ skillname: "Sklearn" }, { skillname: "C++" }] },
        { id: 3004, name: 'Advay', yearOfBatch: 1979, collegeId: '4', skills: [{ skillname: "Sklearn" }] },
        { id: 3005, name: 'Manbir', yearOfBatch: 1960, collegeId: '4', skills: [{ skillname: "Python" }, { skillname: "Sklearn" }, { skillname: "Node.js" }, { skillname: "Ruby" }, { skillname: "C++" }] },
        { id: 3006, name: 'Nihal', yearOfBatch: 1972, collegeId: '4', skills: [{ skillname: "Node.js" }, { skillname: "Ruby" }, { skillname: "Python" }, { skillname: "Sklearn" }, { skillname: "C++" }] },
        { id: 3007, name: 'Ekalinga', yearOfBatch: 1975, collegeId: '4', skills: [{ skillname: "Ruby" }, { skillname: "Python" }] },
        { id: 3008, name: 'Imaran', yearOfBatch: 1962, collegeId: '4', skills: [{ skillname: "Ruby" }, { skillname: "Node.js" }] },
        { id: 3009, name: 'Zehaan', yearOfBatch: 1964, collegeId: '4', skills: [{ skillname: "Python" }, { skillname: "C++" }, { skillname: "Node.js" }, { skillname: "Sklearn" }] },
        { id: 30010, name: 'Chakradev', yearOfBatch: 1952, collegeId: '4', skills: [{ skillname: "Ruby" }, { skillname: "Sklearn" }] },
        { id: 30011, name: 'Shivansh', yearOfBatch: 1973, collegeId: '4', skills: [{ skillname: "Sklearn" }, { skillname: "Node.js" }, { skillname: "Python" }, { skillname: "C++" }] },
        { id: 30012, name: 'Reyansh', yearOfBatch: 1965, collegeId: '4', skills: [{ skillname: "Python" }, { skillname: "Sklearn" }, { skillname: "C++" }, { skillname: "Node.js" }] },
        { id: 30013, name: 'Rayaan', yearOfBatch: 1971, collegeId: '4', skills: [{ skillname: "C++" }, { skillname: "Node.js" }, { skillname: "Python" }, { skillname: "Sklearn" }, { skillname: "Ruby" }] },
        { id: 30014, name: 'Gopal', yearOfBatch: 1969, collegeId: '4', skills: [{ skillname: "Ruby" }, { skillname: "Python" }, { skillname: "Node.js" }] },
        { id: 30015, name: 'Dakshesh', yearOfBatch: 1980, collegeId: '4', skills: [{ skillname: "Ruby" }] },
        { id: 30016, name: 'Samesh', yearOfBatch: 1960, collegeId: '4', skills: [{ skillname: "Python" }, { skillname: "Sklearn" }] },
        { id: 4001, name: 'Advay', yearOfBatch: 1960, collegeId: '5', skills: [{ skillname: "Ruby" }, { skillname: "Sklearn" }, { skillname: "C++" }] },
        { id: 4002, name: 'Maanas', yearOfBatch: 1972, collegeId: '5', skills: [{ skillname: "Ruby" }, { skillname: "Node.js" }] },
        { id: 4003, name: 'Indrajit', yearOfBatch: 1964, collegeId: '5', skills: [{ skillname: "C++" }, { skillname: "Node.js" }, { skillname: "Python" }, { skillname: "Ruby" }, { skillname: "Sklearn" }] },
        { id: 4004, name: 'Kalpit', yearOfBatch: 1953, collegeId: '5', skills: [{ skillname: "Node.js" }, { skillname: "Ruby" }, { skillname: "C++" }, { skillname: "Sklearn" }, { skillname: "Python" }] },
        { id: 4005, name: 'Om', yearOfBatch: 1974, collegeId: '5', skills: [{ skillname: "Node.js" }, { skillname: "C++" }, { skillname: "Sklearn" }] },
        { id: 4006, name: 'Udarsh', yearOfBatch: 1964, collegeId: '5', skills: [{ skillname: "Node.js" }, { skillname: "Ruby" }] },
        { id: 4007, name: 'Krishna', yearOfBatch: 1968, collegeId: '5', skills: [{ skillname: "Node.js" }, { skillname: "C++" }, { skillname: "Sklearn" }, { skillname: "Python" }] },
        { id: 4008, name: 'Banjeet', yearOfBatch: 1959, collegeId: '5', skills: [{ skillname: "C++" }, { skillname: "Python" }, { skillname: "Ruby" }, { skillname: "Node.js" }, { skillname: "Sklearn" }] },
        { id: 4009, name: 'Hredhaan', yearOfBatch: 1963, collegeId: '5', skills: [{ skillname: "Sklearn" }, { skillname: "Python" }, { skillname: "Ruby" }, { skillname: "C++" }, { skillname: "Node.js" }] },
        { id: 40010, name: 'Faraj', yearOfBatch: 1960, collegeId: '5', skills: [{ skillname: "Sklearn" }] },
        { id: 40011, name: 'Devansh', yearOfBatch: 1979, collegeId: '5', skills: [{ skillname: "Python" }] },
        { id: 40018, name: 'Ayushman', yearOfBatch: 1950, collegeId: '5', skills: [{ skillname: "C++" }] },
        { id: 40019, name: 'Harshil', yearOfBatch: 1964, collegeId: '5', skills: [{ skillname: "Sklearn" }, { skillname: "C++" }, { skillname: "Python" }, { skillname: "Node.js" }] },
        { id: 40020, name: 'Bachittar', yearOfBatch: 1953, collegeId: '5', skills: [{ skillname: "Ruby" }, { skillname: "C++" }] },
        { id: 5001, name: 'Om', yearOfBatch: 1974, collegeId: '6', skills: [{ skillname: "Node.js" }, { skillname: "Python" }, { skillname: "Sklearn" }, { skillname: "Ruby" }] },
        { id: 5002, name: 'Anay', yearOfBatch: 1964, collegeId: '6', skills: [{ skillname: "Python" }, { skillname: "Sklearn" }, { skillname: "Ruby" }, { skillname: "C++" }, { skillname: "Node.js" }] },
        { id: 5003, name: 'Anay', yearOfBatch: 1976, collegeId: '6', skills: [{ skillname: "Ruby" }, { skillname: "Python" }] },
        { id: 5004, name: 'Madhav', yearOfBatch: 1980, collegeId: '6', skills: [{ skillname: "C++" }, { skillname: "Node.js" }, { skillname: "Sklearn" }] },
        { id: 5005, name: 'Zehaan', yearOfBatch: 1971, collegeId: '6', skills: [{ skillname: "Sklearn" }, { skillname: "Node.js" }, { skillname: "Ruby" }, { skillname: "C++" }] },
        { id: 5006, name: 'Balendra', yearOfBatch: 1979, collegeId: '6', skills: [{ skillname: "C++" }, { skillname: "Node.js" }, { skillname: "Sklearn" }, { skillname: "Ruby" }] },
        { id: 5007, name: 'Viraj', yearOfBatch: 1975, collegeId: '6', skills: [{ skillname: "C++" }, { skillname: "Sklearn" }] },
        { id: 5008, name: 'Aditya', yearOfBatch: 1961, collegeId: '6', skills: [{ skillname: "Node.js" }, { skillname: "C++" }, { skillname: "Python" }, { skillname: "Sklearn" }] },
        { id: 5009, name: 'Hemang', yearOfBatch: 1969, collegeId: '6', skills: [{ skillname: "Ruby" }, { skillname: "C++" }, { skillname: "Node.js" }, { skillname: "Python" }, { skillname: "Sklearn" }] },
        { id: 50010, name: 'Naksh', yearOfBatch: 1979, collegeId: '6', skills: [{ skillname: "Node.js" }, { skillname: "Python" }] },
        { id: 50011, name: 'Nihal', yearOfBatch: 1972, collegeId: '6', skills: [{ skillname: "C++" }] },
        { id: 50012, name: 'Laksh', yearOfBatch: 1972, collegeId: '6', skills: [{ skillname: "Ruby" }, { skillname: "C++" }] },
        { id: 6001, name: 'Rayaan', yearOfBatch: 1980, collegeId: '7', skills: [{ skillname: "Ruby" }, { skillname: "Python" }, { skillname: "Node.js" }] },
        { id: 6002, name: 'Balhaar', yearOfBatch: 1959, collegeId: '7', skills: [{ skillname: "Ruby" }, { skillname: "Python" }, { skillname: "Sklearn" }, { skillname: "C++" }] },
        { id: 6003, name: 'Ayushman', yearOfBatch: 1954, collegeId: '7', skills: [{ skillname: "Sklearn" }, { skillname: "Node.js" }] },
        { id: 6004, name: 'Aarnav', yearOfBatch: 1973, collegeId: '7', skills: [{ skillname: "Ruby" }] },
        { id: 6005, name: 'Shivansh', yearOfBatch: 1980, collegeId: '7', skills: [{ skillname: "C++" }] },
        { id: 6006, name: 'Girish', yearOfBatch: 1959, collegeId: '7', skills: [{ skillname: "Python" }, { skillname: "Ruby" }, { skillname: "Node.js" }, { skillname: "Sklearn" }, { skillname: "C++" }] },
        { id: 6007, name: 'Indrajit', yearOfBatch: 1957, collegeId: '7', skills: [{ skillname: "Python" }, { skillname: "C++" }, { skillname: "Ruby" }, { skillname: "Node.js" }] },
        { id: 6008, name: 'Rushil', yearOfBatch: 1971, collegeId: '7', skills: [{ skillname: "Sklearn" }, { skillname: "Ruby" }, { skillname: "Python" }, { skillname: "Node.js" }, { skillname: "C++" }] },
        { id: 6009, name: 'Amol', yearOfBatch: 1975, collegeId: '7', skills: [{ skillname: "Python" }] },
        { id: 60010, name: 'Chaitanya', yearOfBatch: 1953, collegeId: '7', skills: [{ skillname: "Sklearn" }] },
        { id: 60011, name: 'Fariq', yearOfBatch: 1970, collegeId: '7', skills: [{ skillname: "Sklearn" }, { skillname: "Ruby" }] },
        { id: 60012, name: 'Arjun', yearOfBatch: 1956, collegeId: '7', skills: [{ skillname: "Sklearn" }, { skillname: "C++" }, { skillname: "Node.js" }, { skillname: "Ruby" }] },
        { id: 60013, name: 'Onveer', yearOfBatch: 1980, collegeId: '7', skills: [{ skillname: "Python" }] },
        { id: 60014, name: 'Omkaar', yearOfBatch: 1950, collegeId: '7', skills: [{ skillname: "Python" }, { skillname: "C++" }, { skillname: "Sklearn" }, { skillname: "Ruby" }, { skillname: "Node.js" }] },
        { id: 60015, name: 'Akshay', yearOfBatch: 1980, collegeId: '7', skills: [{ skillname: "Node.js" }, { skillname: "Sklearn" }, { skillname: "C++" }] },
        { id: 60016, name: 'Aarav', yearOfBatch: 1964, collegeId: '7', skills: [{ skillname: "Python" }, { skillname: "Sklearn" }, { skillname: "Node.js" }, { skillname: "Ruby" }, { skillname: "C++" }] },
        { id: 60017, name: 'Atharv', yearOfBatch: 1959, collegeId: '7', skills: [{ skillname: "Python" }] },
        { id: 60018, name: 'Gaurang', yearOfBatch: 1965, collegeId: '7', skills: [{ skillname: "Sklearn" }] },
        { id: 60019, name: 'Upkaar', yearOfBatch: 1966, collegeId: '7', skills: [{ skillname: "Sklearn" }, { skillname: "C++" }] },
        { id: 60020, name: 'Isaac', yearOfBatch: 1953, collegeId: '7', skills: [{ skillname: "Sklearn" }, { skillname: "Node.js" }, { skillname: "Ruby" }] },
        { id: 7001, name: 'Ishwar', yearOfBatch: 1968, collegeId: '8', skills: [{ skillname: "Sklearn" }] },
        { id: 7002, name: 'Qabil', yearOfBatch: 1957, collegeId: '8', skills: [{ skillname: "Node.js" }, { skillname: "C++" }] },
        { id: 7003, name: 'Maanav', yearOfBatch: 1959, collegeId: '8', skills: [{ skillname: "C++" }, { skillname: "Ruby" }, { skillname: "Sklearn" }, { skillname: "Python" }] },
        { id: 7004, name: 'Hritik', yearOfBatch: 1968, collegeId: '8', skills: [{ skillname: "Python" }, { skillname: "Ruby" }, { skillname: "Sklearn" }, { skillname: "Node.js" }] },
        { id: 7005, name: 'Yatan', yearOfBatch: 1972, collegeId: '8', skills: [{ skillname: "C++" }] },
        { id: 7009, name: 'Vihaan', yearOfBatch: 1979, collegeId: '8', skills: [{ skillname: "Ruby" }, { skillname: "Sklearn" }] },
        { id: 70010, name: 'Chakradhar', yearOfBatch: 1956, collegeId: '8', skills: [{ skillname: "Ruby" }, { skillname: "Python" }, { skillname: "Node.js" }, { skillname: "C++" }, { skillname: "Sklearn" }] },
        { id: 70011, name: 'Jai', yearOfBatch: 1977, collegeId: '8', skills: [{ skillname: "Node.js" }, { skillname: "Python" }, { skillname: "Sklearn" }] },
        { id: 8001, name: 'Imaran', yearOfBatch: 1970, collegeId: '9', skills: [{ skillname: "Node.js" }, { skillname: "Python" }, { skillname: "C++" }, { skillname: "Sklearn" }, { skillname: "Ruby" }] },
        { id: 8002, name: 'Ekaraj', yearOfBatch: 1959, collegeId: '9', skills: [{ skillname: "Python" }, { skillname: "Sklearn" }, { skillname: "Node.js" }] },
        { id: 8003, name: 'Aryan', yearOfBatch: 1960, collegeId: '9', skills: [{ skillname: "Ruby" }, { skillname: "C++" }, { skillname: "Node.js" }, { skillname: "Python" }] },
        { id: 8004, name: 'Indrajit', yearOfBatch: 1952, collegeId: '9', skills: [{ skillname: "Node.js" }, { skillname: "C++" }, { skillname: "Sklearn" }, { skillname: "Ruby" }, { skillname: "Python" }] },
        { id: 8005, name: 'Balveer', yearOfBatch: 1956, collegeId: '9', skills: [{ skillname: "C++" }, { skillname: "Python" }, { skillname: "Ruby" }, { skillname: "Node.js" }, { skillname: "Sklearn" }] },
        { id: 8006, name: 'Jatin', yearOfBatch: 1973, collegeId: '9', skills: [{ skillname: "Python" }, { skillname: "Sklearn" }, { skillname: "Node.js" }] },
        { id: 8007, name: 'Anay', yearOfBatch: 1979, collegeId: '9', skills: [{ skillname: "Ruby" }, { skillname: "Sklearn" }, { skillname: "Python" }, { skillname: "C++" }] },
        { id: 8008, name: 'Dalbir', yearOfBatch: 1962, collegeId: '9', skills: [{ skillname: "Ruby" }, { skillname: "Node.js" }, { skillname: "Sklearn" }, { skillname: "Python" }] },
        { id: 9001, name: 'Naksh', yearOfBatch: 1962, collegeId: '10', skills: [{ skillname: "Ruby" }, { skillname: "Node.js" }] },
        { id: 9002, name: 'Umang', yearOfBatch: 1961, collegeId: '10', skills: [{ skillname: "Python" }] },
        { id: 9003, name: 'Madhav', yearOfBatch: 1970, collegeId: '10', skills: [{ skillname: "Ruby" }, { skillname: "Sklearn" }, { skillname: "Node.js" }] },
        { id: 9004, name: 'Chakradhar', yearOfBatch: 1958, collegeId: '10', skills: [{ skillname: "Node.js" }, { skillname: "C++" }] },
        { id: 9005, name: 'Rushil', yearOfBatch: 1978, collegeId: '10', skills: [{ skillname: "Sklearn" }, { skillname: "C++" }, { skillname: "Python" }, { skillname: "Ruby" }] },
        { id: 9006, name: 'Teerth', yearOfBatch: 1977, collegeId: '10', skills: [{ skillname: "Ruby" }] },
        { id: 123231, name: 'Aadi', yearOfBatch: 1962, collegeId: '11', skills: [{ skillname: "Sklearn" }, { skillname: "Ruby" }, { skillname: "Node.js" }, { skillname: "C++" }] },
        { id: 123232, name: 'Dhruv', yearOfBatch: 1977, collegeId: '11', skills: [{ skillname: "Python" }, { skillname: "Node.js" }] },
        { id: 123233, name: 'Rachit', yearOfBatch: 1960, collegeId: '11', skills: [{ skillname: "Ruby" }, { skillname: "Node.js" }, { skillname: "Python" }, { skillname: "C++" }, { skillname: "Sklearn" }] },
        { id: 123234, name: 'Karan', yearOfBatch: 1968, collegeId: '11', skills: [{ skillname: "Node.js" }] },
        { id: 123235, name: 'Isaac', yearOfBatch: 1973, collegeId: '11', skills: [{ skillname: "Python" }, { skillname: "Ruby" }, { skillname: "Sklearn" }, { skillname: "Node.js" }] },
        { id: 123236, name: 'Omkaar', yearOfBatch: 1952, collegeId: '11', skills: [{ skillname: "Python" }, { skillname: "Sklearn" }, { skillname: "Ruby" }, { skillname: "C++" }, { skillname: "Node.js" }] },
        { id: 123237, name: 'Abdul', yearOfBatch: 1953, collegeId: '11', skills: [{ skillname: "Python" }, { skillname: "Ruby" }] },
        { id: 123238, name: 'Farhan', yearOfBatch: 1977, collegeId: '11', skills: [{ skillname: "C++" }] },
        { id: 123239, name: 'Abeer', yearOfBatch: 1953, collegeId: '11', skills: [{ skillname: "Node.js" }, { skillname: "Ruby" }, { skillname: "Sklearn" }] },
        { id: 1232310, name: 'Amol', yearOfBatch: 1970, collegeId: '11', skills: [{ skillname: "Python" }, { skillname: "C++" }] },
         ];

        let collegeData = [{ id: 1, name: 'Indian Institute of Technology Madras', yearFounded: 1978, city: 'Chennai', state: 'Tamil Nadu', country: 'India', noOfStudents: 74, courses: ['B.Tech', ' M.Tech', 'BCA', 'MCA'] },
        { id: 2, name: 'Indian Institute of Technology Bombay', yearFounded: 1979, city: 'Mumbai', state: 'Maharashtra', country: 'India', noOfStudents: 194, courses: ['B.Tech', 'M.Tech'] },
        { id: 3, name: 'Indian Institute of Technology Delhi', yearFounded: 1959, city: 'New Delhi', state: 'Delhi', country: 'India', noOfStudents: 155, courses: ['BCA', 'MCA'] },
        { id: 4, name: 'Indian Institute of Technology Kharagpur', yearFounded: 1966, city: 'Kharagpur', state: 'West Bengal', country: 'India', noOfStudents: 151, courses: ['B.Tech', 'M.Tech', 'BCA', 'MCA', 'MSC'] },
        { id: 5, name: 'Indian Institute of Technology Kanpur', yearFounded: 1967, city: 'Kanpur', state: 'Uttar Pradesh', country: 'India', noOfStudents: 127, courses: ['B.Tech', 'MSC'] },
        { id: 6, name: 'Indian Institute of Technology Roorkee', yearFounded: 1954, city: 'Roorkee', state: 'Uttarakhand', country: 'India', noOfStudents: 199, courses: ['BSC', 'MSC'] },
        { id: 7, name: 'D Y Patil College', yearFounded: 1979, city: 'Pune', state: 'Maharashtra', country: 'India', noOfStudents: 235, courses: ['B.Tech', 'M.Tech', 'BCA', 'MCA'] },
        { id: 8, name: 'XYZ College', yearFounded: 1954, city: 'Nashik', state: 'Maharashtra', country: 'India', noOfStudents: 298, courses: ['BCA'] },
        { id: 9, name: 'University of Lucknow', yearFounded: 1987, city: 'Lucknow', state: 'Uttar Pradesh', country: 'India', noOfStudents: 117, courses: ['ITI', 'Diploma'] },
        { id: 10, name: 'Birla Institute of Technology & Science', yearFounded: 1969, city: 'Pilani', state: 'Rajasthan', country: 'India', noOfStudents: 162, courses: ['B.Tech', 'M.Tech', 'BCA', 'MCA'] },
        { id: 11, name: 'Ajmer University', yearFounded: 1999, city: 'Ajmer', state: 'Rajasthan', country: 'India', noOfStudents: 122, courses: ['Ph.D', 'M.Phill'] }

        ];
        this.collegeName = '';
        for (let index = 0; index < collegeData.length; index++) {

            if (collegeData[index].id == collegeId) {
                this.collegeName = collegeData[index].name;
            }
        }
        this.studentData=[];
        for (let index = 0; index < data.length; index++) {

            if (data[index].collegeId == collegeId) {
                this.studentData.push(data[index]);
            }
        }

        
    }
    render() {
        return (
            <div className="container-fluid pb-5 ">
                <h2 className="text-center">List of students in {this.collegeName}</h2>
                <BootstrapTable bootstrap4 keyField='id' data={this.studentData} columns={this.columns} pagination={paginationFactory()} />
            </div>
        )
    }
}
export default StudentsList;