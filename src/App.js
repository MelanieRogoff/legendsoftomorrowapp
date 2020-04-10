import React from 'react';
import './App.css';
import image from "./employees.jpg"; //use import, just call it image
import Buttons from "./Buttons.js";
import Tablerender from "./components/Tables/Tablerender.js";
import Users from "./Users.json";

export class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Users
        }
    }

    handleSorting = () => { 
        const sortedUsers = Users.sort((dept, dept2) => 
        (dept.department > dept2.department) ? 1: -1);
        //the above sort has 2 arbitrary params - it uses a ternary operator to essentially say: if the dept's department property is higher up (AKA closer to 'A') than dept2's department property, sort in ascending (1) order. Otherwise, sort in descending (-1) order.  
        this.setState({ Users: sortedUsers});

    };

    handleFiltering = () => { 
        const filteredUsers = Users.filter(function(item) {
            return item.salary > 44000; //filter thru the entire object to grab all info, so we filter Users
        })
        this.setState({ Users: filteredUsers}); //set the state of Users to be the result of salFilter
    }

render() {
  return (
    <div className="Employeeapp">
      <header className="App-header">
        <p className="empDir">Legends of Tomorrow Employee Directory</p>
        <img src={image} className="photo" alt="employees" /> 
            <Buttons functionOne={this.handleSorting} //functionOne=property of props in Buttons.js - don't need to do onClick bc we just need to do the property of props & give it its corr value. Same goes for functionTwo & any other property we give to props that gets passed into here.   
            functionTwo={this.handleFiltering} /> 
      </header>
            <Tablerender Users={this.state.Users} /> 
            {/* Changing Users to this.state.Users to be dynamic */}
    </div>
  );
}
}
export default App;
