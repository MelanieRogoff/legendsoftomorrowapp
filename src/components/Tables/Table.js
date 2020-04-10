import React from 'react';

function Table(props) { //We put info that is dynamic in this file. The only dynamic changes will be applied to the table rows BELOW the initial table head - this DEFINES what we'll use
    return (
        <tr> 
            <td className="firstCol"> {props.id}</td>
            <td>{props.name}</td>
            <td> {props.title}</td>
            <td> {props.department}</td>
            <td>{props.salary}</td>
        </tr>
    )}

    export default Table;
