import React from 'react';
import Table from "./Table.js";

function Tablerender(props) {
    return (
  
    <table className="table table-dark tableRender"> 
    <thead> 
        <tr>
            <th className="firstCol">ID </th>
            <th>Name </th>
            <th>Title </th>
            <th>Department </th>
            <th>Salary </th>
        </tr>

        {props.Users.map ((user, index) => ( //By putting dynamic code here, our code KNOWS to reference Table.js (because we're calling Table on the following line) and then we put our dynamic code that references Users.json/our function param BELOW so that everyting gets changed properly. 
        <Table  //Triggering Table setup in Table.js -- THIS USES TABLE
            key = {index} //making the key the user.id as it's unique
            id={user.id}
            name={user.name}
            title={user.title}
            department={user.department}
            salary={user.salary}
            />
    ))}
    </thead>
    </table>
    )
    }
    export default Tablerender;