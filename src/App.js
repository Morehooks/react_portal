import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    person : [
      {id : 1, name : "Max", age : 28},
      {id : 2, name : "Manu", age : 25},
      {id : 3, name: "Steph", age: 22}
    ],
    other : "Other",
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({person : [
      {name : newName, age : 31},
      {name : "Manu", age : 25},
      {name: "Steph", age: 22}
    ]});
  }

  nameChangedHandler = (event, id) => {
    //immutable way of changeing state.
    
    //get id of person being edited
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });

    //get person of id
    const person = {
      ...this.state.person[personIndex]
    };

    //get new name from input
    person.name = event.target.value;

    //get copy of persons from state
    const persons = [...this.state.person];

    //set new name to array of persons.
    persons[personIndex] = person;

    //update state with new name
    this.setState({person : persons});

  }

  deletePersonsHandler = (personIndex) => {
    // slice without argument copies the array.
    //const person = this.state.person.slice();
    //coping an array es6 style:
    const person = [...this.state.person]
    //splice deletes objects in a array.
    person.splice(personIndex, 1);
    this.setState({person: person});
  }

  //toggle state for persons objects.
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    
    //show persons if showPerson is true.
    //toggle with button and method.
    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.person.map((human, index) => {
            return <Person
                  click={() => this.deletePersonsHandler(index)}
                  key={human.id}
                  name={human.name} 
                  age={human.age}
                  changed={(event) => this.nameChangedHandler(event, human.id)}/>
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }
        
    const classes = [];
    if(this.state.person.length <= 2){
      classes.push('red'); 
    }

    if(this.state.person.length <= 1){
      classes.push('bold'); 
    }

    return (
      <div className="App">
        <h1>I'm a react app</h1>
        <p className={classes.join(' ')}>Hi</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}
          >Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
