import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageClipper from 'imageclipper';
import AutoSuggest from 'react-tiny-autosuggest';

console.log(ImageClipper)
console.log(AutoSuggest)

class App extends Component {
  state = {
    visible: false,
    src: 'http://zyp-farm-2.oss-ap-southeast-1.aliyuncs.com/data/user/head/1537522756336.png',
  }

  render() {

    const imgProps = {
      visible: this.state.visible,
      src: this.state.src,
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
      },
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
        <button onClick={() => {
          this.setState({
            visible: true,
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537532475023&di=1f2df6e184b0f6ade6c1fd552603c321&imgtype=0&src=http%3A%2F%2Fbbsfiles.vivo.com.cn%2Fvivobbs%2Fattachment%2Fforum%2F201601%2F06%2F113323knym6qp2prtrfr0l.jpg',
          })
        }}>resetsrc</button>
        <ImageClipper {...imgProps}/>
      </div>
    );
  }
}

export default App;
