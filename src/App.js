import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {

  state = {
      persons:[
        {id:'1',name:"VIjay1",age:20},
        {id:'2',name:"VIjay2",age:22},
        {id:'3',name:"VIjay3",age:23}
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

  nameChangeHandle = (event,id)=>{

    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });

    const person = {

      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({

      persons:persons

    });

  }


  toggleHandlerSwitch = ()=>{
    const doesShow = this.state.personShow;
    this.setState({
      personShow: !doesShow
    });
  }

  deletePersonHandler = (personindex)=>{
    //const persons = this.state.persons;
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personindex,1);
    this.setState({persons:persons});

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
            this.state.persons.map((person,index) => {
                  return <Person name={person.name} age={person.age} click={()=>this.deletePersonHandler(index)} key={person.id}
                  changed= {(event)=>this.nameChangeHandle(event, person.id)}
                  />
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
