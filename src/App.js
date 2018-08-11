import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const arr = [
      [
        {
          name: 'Afzal',
          age: 21,
          list: [1, 2, 3]
        },
        {
          name: 'Manal',
          age: 14,
          list: [4, 5, 6]
        },
        {
          name: 'Sarim',
          age: 16,
          list: [7, 8, 9]
        }
      ],
      [
        {
          name: 'masood',
          age: 43,
          list: [11, 22, 33]
        },
        {
          name: 'usama',
          age: 63,
          list: [44, 55, 66]
        },
        {
          name: 'faraz',
          age: 99,
          list: [77, 88, 99]          
        }
      ]
    ];




    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {arr.map((v, i) => {
            return v.map((val, ind) => {
              // console.log(val.list[ind])
              return <li> {val.name} {val.age} {val.list} </li>
            })
          })}
        </ul>
      </div>
    )
  }
}

export default App;

/* creating a class */

// class School_1 {
//   constructor(){
//     this.name = 'manal';
//     this.age = 21
//   }
// }

// new School_1();