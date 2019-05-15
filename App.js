import React, {useState} from 'react';
import Person from './Person/Person';

const app = props =>{
  ///useState retuens array with 2 elements 1- initial state, 2-function which will update initial state
const [personState, setPersonState] = useState({
    persons:[
      {name:'John',age:28},
      {name:'Sean',age:24},
      {name:'Jean',age:26}
    ],
    otherState:'Something'
  }
);
const switchNameHandler = () =>{
    setPersonState({
      persons:[
      {name:'Jiya',age:28},
      {name:'Sena',age:24},
      {name:'Jena',age:26}
    ]
    })
}

const nameChangeHandler

  //render(){  no render method in const
    return (
      <div className = "App">
      <h1> Hi Dee!!!</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}/>  
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies:Racing</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}/>   
      </div>
    );
  // }////<Person/> -- custom html element
}

export default app;
//Using State
  // state = {
  //   persons:[
  //     {name:'John',age:28},
  //     {name:'Sean',age:24},
  //     {name:'Jean',age:26}
  //   ],
  //   otherState:'Something'
  // }
  // switchNameHandler = () =>{
  //   //console.log('Clicked');
  //   //this.state.persons[0].name = "Deee"; -----State cannot be changed like this
  //   this.setState({
  //     persons:[
  //     {name:'Jiya',age:28},
  //     {name:'Sena',age:24},
  //     {name:'Jena',age:26}
  //   ]
  //   })
  // }

//*****setState inside class merges  with the old state whers useState inside const replaces the old state

//*****Only change in State or props leads to page re rendering

///Using Props
// class App extends Component {
//   render(){  ////react calls this method to render things to screen
//     return (
//       <div className = "App">
//       <h1> Hi Dee!!!</h1>
//       <Person name='John' age='28'/>  
//       <Person name='Sean' age='24'>My Hobbies:Racing</Person>
//       <Person name='Jean' age='24'/>   
//       </div>
//     );
//   }////<Person/> -- custom html element
// }

////// Basic react Component
// class App extends Component {
//   render(){  ////react calls this method to render things to screen
//     return (
//       <div className = "App">
//       <h1> Hi Dee!!!</h1>
//       </div>
//     );
//   }
// }

////*****Above code is compiled to below code. that's y React is imported even if its not used in above code
// class App extends Component {
//   render(){  ////react calls this method to render things to screen
//     return React.createElement(
//       'div',{className:'App'},
//         React.createElement('h1',null,'Hi.. I\'m Deeee :)')
//         );
//   }
// }