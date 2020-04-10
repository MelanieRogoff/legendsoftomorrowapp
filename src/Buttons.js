import React from 'react';
import './App.js';

function Buttons(props) { //this is the basic setup - functionOne & two are placeholders
    return ( //this is actually constructing an object -- it's an html object. 
        <div>
            <button type="button" onClick={props.functionOne} className="btn btn-warning">Sort by Department (Alphabetical) </button>
            <button type="button" onClick={props.functionTwo} className="btn btn-warning">Filter By $45K+ Salaries </button>
        </div>
    )}

    export default Buttons;
