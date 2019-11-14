import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {

  state = {
      persons:[
        {name:"VIjay1",age:20},
        {name:"VIjay2",age:22},
        {name:"VIjay3",age:23}
      ],
      othereValues : 'Other Value',

  }

  switchNameHandler = (newname)=>{
      console.log("was clicked.");
      this.setState({

        persons:[
          {name:newname,age:20},
          {name:"VIjay2",age:32},
          {name:"VIjay3",age:23}
        ]

      });
  }

  nameChangeHandle = (event)=>{

    this.setState({

      persons:[
        {name:'vijay1',age:20},
        {name:event.target.value,age:32},
        {name:"VIjay3",age:23}
      ]

    });

  }

  render() {

    const stylename = {

        font:'inherit',

    };

    return (
      <div className="App">
        <h1>Hi, my first app</h1>
        <button style = {stylename} onClick={this.switchNameHandler.bind(this,'vijay6')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person click={this.switchNameHandler.bind(this,'vijay6666')} name={this.state.persons[1].name} age={this.state.persons[1].age}
        change = {this.nameChangeHandle}
        >My Hobbies are: Racing, Singing.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>


    );

    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I\'m a Developer.'));
  }
}

export default App;
