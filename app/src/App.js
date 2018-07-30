import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//
import ReactDOM from 'react-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

// 3 React components
class HelloWorld extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

class MyName extends React.Component {
	// name property goes here:
	get name() {
    return 'Jake';
  }
  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

class ScreamButton extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }
  render() {
    return (
      <p>Do not touch my scream button! </p>;
      <button onClick={this.scream}>AAAAAH!</button>;
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
ReactDOM.render(<MyName />, document.getElementById('app'));
ReactDOM.render(<ScreamButton />, document.getElementById('app'));

export default App;
