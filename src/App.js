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
      personShow:false
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


  toggleHandlerSwitch = ()=>{
    const doesShow = this.state.personShow;
    this.setState({
      personShow: !doesShow
    });
  }

  render() {

    const stylename = {

        font:'inherit',

    };

    let persons = null;

    if(this.state.personShow){
        persons = (
          <div>
          {
            this.state.persons.map(
              person=>{
                  return <Person name={person.name} age={person.age} />
              }
          )
        }

          </div>

        );
    }
    return (
      <div className="App">
        <h1>Hi, my first app</h1>
        <button style = {stylename} onClick={this.toggleHandlerSwitch}>Switch Name</button>

        {persons}
      </div>


    );

    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I\'m a Developer.'));
  }
}

export default App;
