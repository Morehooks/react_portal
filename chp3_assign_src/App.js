import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'
import './App.css';

class App extends Component {
  state = {
    users : [
      {userName : "Jake"},
      {userName: "Katie"}
    ]
  }

  userNameChangeHandler = (event) => {
    this.setState({
      users : [
        {userName : event.target.value},
        {userName: "Katie"}
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput changed={this.userNameChangeHandler} userName={this.state.users[0].userName}/>
        <UserOutput userName={this.state.users[0].userName}/>
        <UserOutput userName={this.state.users[1].userName}/>
      </div>
    );
  }
}

export default App;
