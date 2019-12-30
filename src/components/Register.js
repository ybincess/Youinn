import React, { Component } from 'react';
import '../CSS/SignIn.css';
import '../CSS/Home.css';

import Footer from '../components/Footer';

const Register = () => {
    return (
        <div style={{backgroundColor:"lightblue"}}>
            <div >
                <h1 className="IndentSubMenu">Register for the Course</h1>
                <div className="">                                
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe6nU6qIuFox9xA57JDWjB79jFCWAspit7z-gKlXlZljS9Yeg/viewform?embedded=true" width="100%" height="1842" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default Register;