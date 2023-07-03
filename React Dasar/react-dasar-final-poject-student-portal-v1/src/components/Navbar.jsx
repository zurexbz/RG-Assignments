import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
        {/* TODO: answer here */}
        <nav>
            <Link to="/" data-testid="home-page">Student Portal</Link>
            <Link to="/student" data-testid="student-page">All Student</Link>
            <Link to="/add" data-testid="add-page">Add Student</Link>
        </nav>
        </>
    );
};

export default NavBar;
