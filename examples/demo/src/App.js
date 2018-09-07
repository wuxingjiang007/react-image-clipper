import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageClipper from 'imageclipper';
import AutoSuggest from 'react-tiny-autosuggest';

console.log(ImageClipper)
console.log(AutoSuggest)

class App extends Component {
  state = {
    visible: true
  }



  render() {

    const imgProps = {
      visible: this.state.visible,
      src: 'http://zyp-farm-2.oss-ap-southeast-1.aliyuncs.com/data/farm/head/1533032455399.jpg',
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
        <ImageClipper {...imgProps}/>
      </div>
    );
  }
}

export default App;
