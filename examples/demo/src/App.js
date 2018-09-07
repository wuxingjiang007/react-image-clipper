import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageClipper from 'imageclipper';
import AutoSuggest from 'react-tiny-autosuggest';

console.log(ImageClipper)
console.log(AutoSuggest)

class App extends Component {
  state = {
    visible: false
  }
  render() {

    const imgProps = {
      visible: this.state.visible,
      src: 'https://zyp-farm-2.oss-ap-southeast-1.aliyuncs.com/data/user/head/1536290604812.jpg',
      onOk: (value) => {
        console.log(value)
        this.setState({
          visible: false
        })
      },
      onCancel: () => {
        console.log('tuichu')
        this.setState({
          visible: false
        })
      },
      onError: () => {
        alert('tu')
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => {
          this.setState({
            visible: true
          })
        }}>onClick</button>
        <ImageClipper {...imgProps}/>
      </div>
    );
  }
}

export default App;
