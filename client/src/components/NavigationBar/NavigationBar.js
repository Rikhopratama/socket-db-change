import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <div className="topnav">
            <Link className="active" to="/">Home</Link>
            <Link to="/add_stock">Add Stock</Link>
            <Link to="/reduce_stock">Reduce Stock</Link>
        </div>
    )
}

export default NavigationBar
