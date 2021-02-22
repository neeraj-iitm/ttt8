import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Button } from "react-bootstrap";



// const data = [{ id: 1, name: 'Indian Institute of Technology Madras', yearFounded: 1978, city: 'Chennai', state: 'Tamil Nadu', country: 'India', noOfStudent: 74, courses: [{ name: "ME" }] },
// { id: 2, name: 'Indian Institute of Technology Bombay', yearFounded: 1979, city: 'Mumbai', state: 'Maharashtra', country: 'India', noOfStudent: 194, courses: [{ name: "CS" }, { name: "EC" }] },
// { id: 3, name: 'Indian Institute of Technology Delhi', yearFounded: 1959, city: 'New Delhi', state: 'Delhi', country: 'India', noOfStudent: 155, courses: [{ name: "EC" }, { name: "IT" }, { name: "ME" }] },
// { id: 4, name: 'Indian Institute of Technology Kharagpur', yearFounded: 1966, city: 'Kharagpur', state: 'West Bengal', country: 'India', noOfStudent: 151, courses: [{ name: "AE" }] },
// { id: 5, name: 'Indian Institute of Technology Kanpur', yearFounded: 1967, city: 'Kanpur', state: 'Uttar Pradesh', country: 'India', noOfStudent: 127, courses: [{ name: "ME" }, { name: "EC" }, { name: "AE" }, { name: "IT" }] },
// { id: 6, name: 'Indian Institute of Technology Roorkee', yearFounded: 1954, city: 'Roorkee', state: 'Uttarakhand', country: 'India', noOfStudent: 199, courses: [{ name: "CS" }] },
// { id: 7, name: 'Indian Institute of Technology Guwahati', yearFounded: 1970, city: 'Guwahati', state: 'Assam', country: 'India', noOfStudent: 150, courses: [{ name: "IT" }] },
// { id: 8, name: 'Anna University', yearFounded: 1979, city: 'Chennai', state: 'Tamil Nadu', country: 'India', noOfStudent: 171, courses: [{ name: "AE" }] },
// { id: 9, name: 'Indian Institute of Technology Hyderabad', yearFounded: 1969, city: 'Hyderabad', state: 'Telangana', country: 'India', noOfStudent: 103, courses: [{ name: "EC" }, { name: "IT" }, { name: "ME" }, { name: "AE" }] },
// { id: 10, name: 'Institute of Chemical Technology', yearFounded: 1955, city: 'Mumbai', state: 'Maharashtra', country: 'India', noOfStudent: 50, courses: [{ name: "EC" }, { name: "CS" }, { name: "ME" }, { name: "IT" }] },
// { id: 11, name: 'National Institute of Technology Tiruchirappalli', yearFounded: 1971, city: 'Tiruchirappalli', state: 'Tamil Nadu', country: 'India', noOfStudent: 123, courses: [{ name: "EC" }, { name: "CS" }, { name: "AE" }, { name: "IT" }, { name: "ME" }] },
// { id: 12, name: 'Jadavpur University', yearFounded: 1954, city: 'Kolkata', state: 'West Bengal', country: 'India', noOfStudent: 194, courses: [{ name: "ME" }, { name: "IT" }, { name: "AE" }, { name: "CS" }] },
// { id: 13, name: 'Indian Institute of Technology (Indian School of Mines) Dhanbad', yearFounded: 1975, city: 'Dhanbad', state: 'Jharkhand', country: 'India', noOfStudent: 200, courses: [{ name: "CS" }, { name: "AE" }, { name: "EC" }, { name: "ME" }, { name: "IT" }] },
// { id: 14, name: 'Indian Institute of Technology Indore', yearFounded: 1955, city: 'Indore', state: 'Madhya Pradesh', country: 'India', noOfStudent: 154, courses: [{ name: "ME" }, { name: "IT" }, { name: "AE" }, { name: "CS" }, { name: "EC" }] },
// { id: 15, name: 'National Institute of Technology Rourkela', yearFounded: 1950, city: 'Rourkela', state: 'Odisha', country: 'India', noOfStudent: 197, courses: [{ name: "ME" }] },
// { id: 16, name: 'Vellore Institute of Technology', yearFounded: 1953, city: 'Vellore', state: 'Tamil Nadu', country: 'India', noOfStudent: 68, courses: [{ name: "IT" }, { name: "ME" }, { name: "AE" }, { name: "CS" }] },
// { id: 17, name: 'Birla Institute of Technology & Science', yearFounded: 1969, city: 'Pilani', state: 'Rajasthan', country: 'India', noOfStudent: 162, courses: [{ name: "CS" }, { name: "IT" }, { name: "ME" }, { name: "AE" }, { name: "EC" }] },
// { id: 18, name: 'Indian Institute of Technology Bhubaneswar', yearFounded: 1950, city: 'Bhubaneswar', state: 'Odisha', country: 'India', noOfStudent: 107, courses: [{ name: "ME" }, { name: "AE" }, { name: "IT" }] },
// { id: 19, name: 'Indian Institute of Technology (Banaras Hindu University) Varanasi', yearFounded: 1951, city: 'Varanasi', state: 'Uttar Pradesh', country: 'India', noOfStudent: 100, courses: [{ name: "ME" }] },
// { id: 20, name: 'Thapar Institute of Engineering and Technology', yearFounded: 1969, city: 'Patiala', state: 'Punjab', country: 'India', noOfStudent: 72, courses: [{ name: "CS" }, { name: "AE" }, { name: "EC" }, { name: "IT" }, { name: "ME" }] },
// { id: 21, name: 'National Institute of Technology Surathkal', yearFounded: 1972, city: 'Surathkal', state: 'Karnataka', country: 'India', noOfStudent: 109, courses: [{ name: "EC" }, { name: "IT" }, { name: "AE" }, { name: "CS" }, { name: "ME" }] },
// { id: 22, name: 'Indian Institute of Technology Ropar', yearFounded: 1976, city: 'Rupnagar', state: 'Punjab', country: 'India', noOfStudent: 61, courses: [{ name: "CS" }] },
// { id: 23, name: 'Indian Institute of Space Science and Technology', yearFounded: 1972, city: 'Thiruvananthapuram', state: 'Kerala', country: 'India', noOfStudent: 149, courses: [{ name: "AE" }] },
// { id: 24, name: 'Indian Institute of Technology Patna', yearFounded: 1975, city: 'Patna', state: 'Bihar', country: 'India', noOfStudent: 71, courses: [{ name: "CS" }, { name: "AE" }] },
// { id: 25, name: 'National Institute of Technology Warangal', yearFounded: 1959, city: 'Warangal', state: 'Telangana', country: 'India', noOfStudent: 196, courses: [{ name: "EC" }] },
// { id: 26, name: 'Birla Institute of Technology', yearFounded: 1966, city: 'Ranchi', state: 'Jharkhand', country: 'India', noOfStudent: 86, courses: [{ name: "CS" }, { name: "EC" }, { name: "IT" }] },
// { id: 27, name: 'Indian Institute of Technology Gandhinagar', yearFounded: 1977, city: 'Gandhinagar', state: 'Gujarat', country: 'India', noOfStudent: 199, courses: [{ name: "IT" }, { name: "ME" }, { name: "EC" }, { name: "AE" }, { name: "CS" }] },
// { id: 28, name: 'Indian Institute of Technology Mandi', yearFounded: 1968, city: 'Mandi', state: 'Himachal Pradesh', country: 'India', noOfStudent: 182, courses: [{ name: "CS" }, { name: "ME" }, { name: "AE" }, { name: "EC" }] },
// { id: 29, name: 'PSG College of Technology', yearFounded: 1959, city: 'Coimbatore', state: 'Tamil Nadu', country: 'India', noOfStudent: 170, courses: [{ name: "EC" }, { name: "CS" }, { name: "IT" }, { name: "AE" }, { name: "ME" }] },
// { id: 30, name: 'Indian Institute of Engineering Science and Technology, Shibpur', yearFounded: 1968, city: 'Howrah', state: 'West Bengal', country: 'India', noOfStudent: 89, courses: [{ name: "CS" }, { name: "EC" }] },
// { id: 31, name: 'Visvesvaraya National Institute of Technology', yearFounded: 1961, city: 'Nagpur', state: 'Maharashtra', country: 'India', noOfStudent: 168, courses: [{ name: "AE" }, { name: "CS" }, { name: "ME" }] },
// { id: 32, name: 'Jamia Millia Islamia', yearFounded: 1963, city: 'New Delhi', state: 'Delhi', country: 'India', noOfStudent: 91, courses: [{ name: "IT" }, { name: "AE" }, { name: "CS" }, { name: "ME" }] },
// { id: 33, name: 'Shanmugha Arts Science Technology & Research Academy', yearFounded: 1957, city: 'Thanjavur', state: 'Tamil Nadu', country: 'India', noOfStudent: 144, courses: [{ name: "ME" }, { name: "IT" }, { name: "CS" }, { name: "AE" }, { name: "EC" }] },
// { id: 34, name: 'Amity University', yearFounded: 1977, city: 'Gautam Budh Nagar', state: 'Uttar Pradesh', country: 'India', noOfStudent: 53, courses: [{ name: "IT" }] },
// { id: 35, name: 'Aligarh Muslim University', yearFounded: 1972, city: 'Aligarh', state: 'Uttar Pradesh', country: 'India', noOfStudent: 56, courses: [{ name: "IT" }] },
// { id: 36, name: 'Sri Sivasubramaniya Nadar College of Engineering', yearFounded: 1972, city: 'Kancheepuram', state: 'Tamil Nadu', country: 'India', noOfStudent: 116, courses: [{ name: "IT" }, { name: "AE" }, { name: "CS" }, { name: "EC" }, { name: "ME" }] },
// { id: 37, name: 'Sathyabama Institute of Science and Technology', yearFounded: 1978, city: 'Chennai', state: 'Tamil Nadu', country: 'India', noOfStudent: 95, courses: [{ name: "IT" }, { name: "AE" }] },
// { id: 38, name: 'International Institute of Information Technology', yearFounded: 1971, city: 'Hyderabad', state: 'Telangana', country: 'India', noOfStudent: 124, courses: [{ name: "IT" }, { name: "ME" }, { name: "EC" }, { name: "AE" }, { name: "CS" }] },
// { id: 39, name: 'Manipal Institute of Technology', yearFounded: 1961, city: 'Manipal', state: 'Karnataka', country: 'India', noOfStudent: 159, courses: [{ name: "ME" }, { name: "EC" }, { name: "IT" }, { name: "AE" }, { name: "CS" }] },
// { id: 40, name: 'Thiagarajar College of Engineering', yearFounded: 1973, city: 'Madurai', state: 'Tamil Nadu', country: 'India', noOfStudent: 113, courses: [{ name: "IT" }] },
// { id: 41, name: 'Delhi Technological University', yearFounded: 1963, city: 'New Delhi', state: 'Delhi', country: 'India', noOfStudent: 112, courses: [{ name: "AE" }, { name: "CS" }, { name: "IT" }, { name: "EC" }] },
// { id: 42, name: 'Jawaharlal Nehru Technological University', yearFounded: 1972, city: 'Hyderabad', state: 'Telangana', country: 'India', noOfStudent: 194, courses: [{ name: "EC" }, { name: "IT" }, { name: "CS" }, { name: "AE" }, { name: "ME" }] },
// { id: 43, name: 'National Institute of Technology Kurukshetra', yearFounded: 1975, city: 'Kurukshetra', state: 'Haryana', country: 'India', noOfStudent: 173, courses: [{ name: "IT" }, { name: "CS" }, { name: "ME" }, { name: "EC" }, { name: "AE" }] },
// { id: 44, name: 'National Institute of Industrial Engineering', yearFounded: 1957, city: 'Mumbai', state: 'Maharashtra', country: 'India', noOfStudent: 159, courses: [{ name: "ME" }, { name: "AE" }, { name: "EC" }, { name: "IT" }] },
// { id: 45, name: 'College of Engineering', yearFounded: 1970, city: 'Pune', state: 'Maharashtra', country: 'India', noOfStudent: 118, courses: [{ name: "IT" }, { name: "CS" }, { name: "EC" }, { name: "AE" }, { name: "ME" }] },
// { id: 46, name: 'SRM Institute of Science and Technology', yearFounded: 1962, city: 'Chennai', state: 'Tamil Nadu', country: 'India', noOfStudent: 55, courses: [{ name: "IT" }, { name: "ME" }, { name: "AE" }] },
// { id: 47, name: 'National Institute of Technology Durgapur', yearFounded: 1980, city: 'Durgapur', state: 'West Bengal', country: 'India', noOfStudent: 97, courses: [{ name: "CS" }, { name: "IT" }] },
// { id: 48, name: 'Motilal Nehru National Institute of Technology', yearFounded: 1974, city: 'Allahabad', state: 'Uttar Pradesh', country: 'India', noOfStudent: 190, courses: [{ name: "IT" }] },
// { id: 49, name: 'Koneru Lakshmaiah Education Foundation University', yearFounded: 1969, city: 'Vaddeswaram', state: 'Andhra Pradesh', country: 'India', noOfStudent: 116, courses: [{ name: "IT" }, { name: "CS" }, { name: "AE" }, { name: "EC" }] },
// { id: 50, name: 'National Institute of Technology Calicut', yearFounded: 1964, city: 'Calicut', state: 'Kerala', country: 'India', noOfStudent: 126, courses: [{ name: "EC" }, { name: "ME" }] },
// { id: 51, name: 'Kalinga Institute of Industrial Technology', yearFounded: 1959, city: 'Bhubaneswar', state: 'Odisha', country: 'India', noOfStudent: 133, courses: [{ name: "CS" }, { name: "AE" }] },
// { id: 52, name: 'Malaviya National Institute of Technology', yearFounded: 1971, city: 'Jaipur', state: 'Rajasthan', country: 'India', noOfStudent: 177, courses: [{ name: "CS" }] },
// { id: 53, name: 'Pondicherry Engineering College', yearFounded: 1968, city: 'Puducherry', state: 'Pondicherry', country: 'India', noOfStudent: 54, courses: [{ name: "IT" }, { name: "CS" }] },
// { id: 54, name: 'Indian Institute of Technology Jodhpur', yearFounded: 1955, city: 'Jodhpur', state: 'Rajasthan', country: 'India', noOfStudent: 107, courses: [{ name: "CS" }] },
// { id: 55, name: 'Maulana Azad National Institute of Technology', yearFounded: 1956, city: 'Bhopal', state: 'Madhya Pradesh', country: 'India', noOfStudent: 157, courses: [{ name: "CS" }, { name: "EC" }, { name: "IT" }] },
// { id: 56, name: 'International Institute of Information Technology Bangalore', yearFounded: 1974, city: 'Bengluru', state: 'Karnataka', country: 'India', noOfStudent: 58, courses: [{ name: "ME" }] },
// { id: 57, name: 'National Institute of Technology Silchar', yearFounded: 1961, city: 'Silchar', state: 'Assam', country: 'India', noOfStudent: 200, courses: [{ name: "IT" }] },
// { id: 58, name: 'R. V. College of Engineering', yearFounded: 1956, city: 'Bengaluru', state: 'Karnataka', country: 'India', noOfStudent: 168, courses: [{ name: "AE" }, { name: "IT" }] },
// { id: 59, name: 'Panjab University', yearFounded: 1969, city: 'Chandigarh', state: 'Chandigarh', country: 'India', noOfStudent: 51, courses: [{ name: "ME" }, { name: "EC" }, { name: "CS" }, { name: "AE" }, { name: "IT" }] },
// { id: 60, name: 'M. S. Ramaiah Institute of Technology', yearFounded: 1950, city: 'Bengaluru', state: 'Karnataka', country: 'India', noOfStudent: 70, courses: [{ name: "EC" }, { name: "AE" }, { name: "IT" }, { name: "ME" }, { name: "CS" }] },
// { id: 61, name: 'Sardar Vallabhbhai National Institute of Technology', yearFounded: 1974, city: 'Surat', state: 'Gujarat', country: 'India', noOfStudent: 143, courses: [{ name: "EC" }, { name: "CS" }, { name: "IT" }] },
// { id: 62, name: 'Coimbatore Institute of Technology', yearFounded: 1976, city: 'Coimbatore', state: 'Tamil Nadu', country: 'India', noOfStudent: 167, courses: [{ name: "CS" }, { name: "EC" }, { name: "IT" }, { name: "ME" }] },
// { id: 63, name: 'Defence Institute of Advanced Technology', yearFounded: 1979, city: 'Pune', state: 'Maharashtra', country: 'India', noOfStudent: 152, courses: [{ name: "AE" }, { name: "CS" }, { name: "ME" }, { name: "EC" }] },
// { id: 64, name: 'National Institute of Technology Hamirpur', yearFounded: 1978, city: 'Hamirpur', state: 'Himachal Pradesh', country: 'India', noOfStudent: 175, courses: [{ name: "IT" }, { name: "EC" }, { name: "AE" }, { name: "ME" }] },
// { id: 65, name: 'AU College of Engineering', yearFounded: 1975, city: 'Visakhapatnam', state: 'Andhra Pradesh', country: 'India', noOfStudent: 116, courses: [{ name: "IT" }] },
// { id: 66, name: 'Indraprastha Institute of Information Technology Delhi', yearFounded: 1953, city: 'New Delhi', state: 'Delhi', country: 'India', noOfStudent: 162, courses: [{ name: "IT" }] },
// { id: 67, name: 'B. M. S. College of Engineering', yearFounded: 1971, city: 'Bengaluru', state: 'Karnataka', country: 'India', noOfStudent: 156, courses: [{ name: "CS" }, { name: "AE" }, { name: "EC" }, { name: "IT" }] },
// { id: 68, name: 'Kongu Engineering College', yearFounded: 1962, city: 'Perundurai', state: 'Tamil Nadu', country: 'India', noOfStudent: 85, courses: [{ name: "AE" }, { name: "CS" }, { name: "EC" }] },
// { id: 69, name: 'Dayalbagh Educational Institute', yearFounded: 1966, city: 'Agra', state: 'Uttar Pradesh', country: 'India', noOfStudent: 96, courses: [{ name: "EC" }, { name: "ME" }] },
// { id: 70, name: 'Jaypee Institute of Information Technology', yearFounded: 1961, city: 'Noida', state: 'Uttar Pradesh', country: 'India', noOfStudent: 87, courses: [{ name: "AE" }, { name: "CS" }, { name: "EC" }] },
// { id: 71, name: 'Sri Venkateswara University', yearFounded: 1969, city: 'Tirupati', state: 'Andhra Pradesh', country: 'India', noOfStudent: 145, courses: [{ name: "CS" }, { name: "EC" }, { name: "AE" }] },
// { id: 72, name: 'Karunya Institute of Technology and Sciences', yearFounded: 1959, city: 'Coimbatore', state: 'Tamil Nadu', country: 'India', noOfStudent: 191, courses: [{ name: "EC" }] },
// { id: 73, name: 'PEC University of Technology', yearFounded: 1956, city: 'Chandigarh', state: 'Chandigarh', country: 'India', noOfStudent: 140, courses: [{ name: "IT" }, { name: "AE" }, { name: "EC" }, { name: "ME" }, { name: "CS" }] },
// { id: 74, name: 'Dr. B. R. Ambedkar National Institute of Technology', yearFounded: 1964, city: 'Jalandhar', state: 'Punjab', country: 'India', noOfStudent: 179, courses: [{ name: "AE" }] },
// { id: 75, name: 'College of Engineering Trivandrum', yearFounded: 1967, city: 'Thiruvananthapuram', state: 'Kerala', country: 'India', noOfStudent: 128, courses: [{ name: "EC" }, { name: "CS" }, { name: "IT" }, { name: "AE" }, { name: "ME" }] },
// { id: 76, name: 'Bannari Amman Institute of Technology', yearFounded: 1963, city: 'Sathyamangalam', state: 'Tamil Nadu', country: 'India', noOfStudent: 189, courses: [{ name: "EC" }] },
// { id: 77, name: 'Vel Tech Rangarajan Dr. Sagunthala R & D Institute of Science and Technology', yearFounded: 1972, city: 'Chennai', state: 'Tamil Nadu', country: 'India', noOfStudent: 126, courses: [{ name: "AE" }, { name: "ME" }, { name: "CS" }, { name: "EC" }, { name: "IT" }] },
// { id: 78, name: 'Siddaganga Institute of Technology', yearFounded: 1966, city: 'Tumkur', state: 'Karnataka', country: 'India', noOfStudent: 107, courses: [{ name: "ME" }, { name: "IT" }, { name: "AE" }, { name: "CS" }] },
// { id: 79, name: 'B. S. Abdur Rahman Institute of Science and Technology', yearFounded: 1973, city: 'Chennai', state: 'Tamil Nadu', country: 'India', noOfStudent: 107, courses: [{ name: "ME" }, { name: "AE" }, { name: "IT" }] },
// { id: 80, name: 'University College of Engineering', yearFounded: 1950, city: 'Hyderabad', state: 'Telangana', country: 'India', noOfStudent: 151, courses: [{ name: "EC" }] },
// { id: 81, name: 'National Institute of Technology Raipur', yearFounded: 1960, city: 'Raipur', state: 'Chhattisgarh', country: 'India', noOfStudent: 94, courses: [{ name: "EC" }, { name: "AE" }] },
// { id: 82, name: 'Kumaraguru College of Technology', yearFounded: 1966, city: 'Coimbatore', state: 'Tamil Nadu', country: 'India', noOfStudent: 164, courses: [{ name: "AE" }] },
// { id: 83, name: 'Bharati Vidyapeeth Deemed University College of Engineering', yearFounded: 1964, city: 'Pune', state: 'Maharashtra', country: 'India', noOfStudent: 56, courses: [{ name: "IT" }, { name: "ME" }, { name: "CS" }, { name: "AE" }, { name: "EC" }] },
// { id: 84, name: 'Jaypee University of Information Technology', yearFounded: 1955, city: 'Solan', state: 'Himachal Pradesh', country: 'India', noOfStudent: 108, courses: [{ name: "IT" }, { name: "ME" }, { name: "AE" }, { name: "EC" }] },
// { id: 85, name: 'Sagi Ramakrishnam Raju Engineering College', yearFounded: 1960, city: 'Bhimavaram', state: 'Andhra Pradesh', country: 'India', noOfStudent: 70, courses: [{ name: "AE" }, { name: "IT" }, { name: "CS" }, { name: "EC" }] },
// { id: 86, name: 'Guru Gobind Singh Indraprastha University', yearFounded: 1971, city: 'New Delhi', state: 'Delhi', country: 'India', noOfStudent: 77, courses: [{ name: "IT" }, { name: "EC" }] },
// { id: 87, name: 'PES University', yearFounded: 1961, city: 'Bengaluru', state: 'Karnataka', country: 'India', noOfStudent: 56, courses: [{ name: "EC" }, { name: "IT" }, { name: "AE" }] },
// { id: 88, name: 'Army Institute of Technology', yearFounded: 1953, city: 'Pune', state: 'Maharashtra', country: 'India', noOfStudent: 54, courses: [{ name: "EC" }, { name: "ME" }, { name: "CS" }, { name: "AE" }] },
// { id: 89, name: 'C. V. Raman College of Engineering', yearFounded: 1968, city: 'Bhubaneswar', state: 'Odisha', country: 'India', noOfStudent: 174, courses: [{ name: "CS" }, { name: "IT" }, { name: "ME" }, { name: "AE" }, { name: "EC" }] },
// { id: 90, name: 'Indian Institute of Information Technology Allahabad', yearFounded: 1963, city: 'Allahabad', state: 'Uttar Pradesh', country: 'India', noOfStudent: 198, courses: [{ name: "EC" }, { name: "IT" }, { name: "ME" }, { name: "AE" }, { name: "CS" }] },
// { id: 91, name: 'Pandit Dwarka Prasad Mishra Indian Institute of Information Technology, Design and Manufacturing (IIITDM) Jabalpur', yearFounded: 1973, city: 'Jabalpur', state: 'Madhya Pradesh', country: 'India', noOfStudent: 53, courses: [{ name: "CS" }, { name: "EC" }, { name: "AE" }, { name: "IT" }] },
// { id: 92, name: 'National Institute of Technology Agartala', yearFounded: 1963, city: 'Agratala', state: 'Tripura', country: 'India', noOfStudent: 122, courses: [{ name: "CS" }] },
// { id: 93, name: 'Government College of Technology', yearFounded: 1970, city: 'Coimbatore', state: 'Tamil Nadu', country: 'India', noOfStudent: 148, courses: [{ name: "EC" }, { name: "AE" }, { name: "ME" }, { name: "CS" }] },
// { id: 94, name: 'Shri Mata Vaishno Devi University', yearFounded: 1969, city: 'Katra', state: 'Jammu and Kashmir', country: 'India', noOfStudent: 156, courses: [{ name: "ME" }, { name: "EC" }] },
// { id: 95, name: 'Veermata Jijabai Technological Institute', yearFounded: 1966, city: 'Mumbai', state: 'Maharashtra', country: 'India', noOfStudent: 197, courses: [{ name: "CS" }, { name: "EC" }] },
// { id: 96, name: 'Kalasalingam Academy of Research and Higher Education', yearFounded: 1978, city: 'Srivilliputtur', state: 'Tamil Nadu', country: 'India', noOfStudent: 94, courses: [{ name: "EC" }, { name: "ME" }, { name: "AE" }, { name: "IT" }, { name: "CS" }] },
// { id: 97, name: 'University College of Engingeering', yearFounded: 1957, city: 'Kakinada', state: 'Andhra Pradesh', country: 'India', noOfStudent: 120, courses: [{ name: "IT" }, { name: "CS" }, { name: "ME" }] },
// { id: 98, name: 'National Institute of Technology Meghalaya', yearFounded: 1969, city: 'Shillong', state: 'Meghalaya', country: 'India', noOfStudent: 162, courses: [{ name: "IT" }, { name: "EC" }, { name: "ME" }] },
// { id: 99, name: 'New Horizon College of Engineering', yearFounded: 1961, city: 'Bengaluru', state: 'Karnataka', country: 'India', noOfStudent: 90, courses: [{ name: "IT" }, { name: "EC" }, { name: "CS" }] },
// { id: 100, name: 'NITTE Meenakshi Institute of Technology', yearFounded: 1962, city: 'Bengaluru', state: 'Karnataka', country: 'India', noOfStudent: 53, courses: [{ name: "IT" }, { name: "CS" }, { name: "AE" }, { name: "EC" }, { name: "ME" }] }]


class CollegesList extends Component {
    onButtonClick(row) {
        window.location.href = '/collegedata/' + row.id;
    }
    constructor(props) {
        super(props);
        let state = this.props.match.params.state;
        
        let data = [{ id: 1, name: 'Indian Institute of Technology Madras', yearFounded: 1978, city: 'Chennai', state: 'Tamil Nadu', country: 'India', noOfStudents: 9,courses:['B.Tech',' M.Tech', 'BCA', 'MCA'] },
            { id: 2, name: 'Indian Institute of Technology Bombay', yearFounded: 1979, city: 'Mumbai', state: 'Maharashtra', country: 'India', noOfStudents: 8, courses: ['B.Tech', 'M.Tech'] },
            { id: 3, name: 'Indian Institute of Technology Delhi', yearFounded: 1959, city: 'New Delhi', state: 'Delhi', country: 'India', noOfStudents: 5, courses: ['BCA', 'MCA'] },
            { id: 4, name: 'Indian Institute of Technology Kharagpur', yearFounded: 1966, city: 'Kharagpur', state: 'West Bengal', country: 'India', noOfStudents: 16, courses: ['B.Tech', 'M.Tech', 'BCA', 'MCA', 'MSC'] },
            { id: 5, name: 'Indian Institute of Technology Kanpur', yearFounded: 1967, city: 'Kanpur', state: 'Uttar Pradesh', country: 'India', noOfStudents: 14, courses: ['B.Tech', 'MSC'] },
            { id: 6, name: 'Indian Institute of Technology Roorkee', yearFounded: 1954, city: 'Roorkee', state: 'Uttarakhand', country: 'India', noOfStudents: 12, courses: ['BSC','MSC'] },
            { id: 7, name: 'D Y Patil College', yearFounded: 1979, city: 'Mumbai', state: 'Maharashtra', country: 'India', noOfStudents: 20, courses: ['B.Tech', 'M.Tech', 'BCA', 'MCA'] },
            { id: 8, name: 'XYZ College', yearFounded: 1954, city: 'Nashik', state: 'Maharashtra', country: 'India', noOfStudents: 8, courses: ['BCA','BSC'] },
            { id: 9, name: 'University of Lucknow', yearFounded: 1987, city: 'Lucknow', state: 'Uttar Pradesh', country: 'India', noOfStudents: 8, courses: ['ITI', 'Diploma'] },
            { id: 10, name: 'Birla Institute of Technology & Science', yearFounded: 1969, city: 'Pilani', state: 'Rajasthan', country: 'India', noOfStudents: 6, courses: ['B.Tech', 'M.Tech', 'BCA', 'MCA'] },
            { id: 11, name: 'Ajmer University', yearFounded: 1999, city: 'Ajmer', state: 'Rajasthan', country: 'India', noOfStudents: 10, courses: ['Ph.D','M.Phill'] }

        ];  // I declare the variable here
       this.columns = [{
            dataField: 'id',
            text: 'College Id'
        }, {
            dataField: 'name',
            text: 'Name'
        }, {
            dataField: 'yearFounded',
            text: 'Year Founded'
        }, {
            dataField: 'city',
            text: 'City'
        },
          
        {
            dataField: "options",
            text: "Options",
            formatter: this.linkFollow,
            sort: true
        }

        ];
        this.collegeData=[];
        for (let index = 0; index < data.length; index++) {
           
            if (data[index].state==state) {
                this.collegeData.push(data[index]);
            }
        }
    }
    linkFollow = (cell, row, rowIndex, formatExtraData) => {
        return (
            <Button
                onClick={() => {
                    this.onButtonClick(row);
                }}
            >
                View Details
            </Button>
        );
    };
    render() {
        return (
        
            <div className="container-fluid">
                
                <BootstrapTable bootstrap4 keyField='id' data={this.collegeData} columns={this.columns} pagination={paginationFactory()} />
            </div>
        )
        
    }
}
export default CollegesList;