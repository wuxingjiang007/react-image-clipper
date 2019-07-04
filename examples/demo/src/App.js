import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageClipper from 'imageclipper';
import AutoSuggest from 'react-tiny-autosuggest';
import { readdir, read } from 'fs';

class App extends Component {
  state = {
    visible: false,
    src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537532475023&di=1f2df6e184b0f6ade6c1fd552603c321&imgtype=0&src=http%3A%2F%2Fbbsfiles.vivo.com.cn%2Fvivobbs%2Fattachment%2Fforum%2F201601%2F06%2F113323knym6qp2prtrfr0l.jpg',
    localImg: '',
    clipData: null
  }

  fileHandlerOnchange = (e) => {
    console.log(e.target.value)
    const target = e.target;
    const val = target.value;
    if(!val) {
      return false;
    }
    const file = target.files[0];
    console.log(file);

    const reader = new FileReader();

    reader.onloadstart = (e) => {
      console.log('start read ...')
    }

    reader.onprogress = (e) => {
      console.log('reading ...')
    }

    reader.onabort = (e) => {
      console.log('stop read.')
    }

    reader.onerror = (e) => {
      console.log('read error')
    }

    reader.onload = (e) => {
      console.log('read success...')
      this.setState({
        localImg:e.target.result,
        src: e.target.result,
        visible: true,
      })
    }
    reader.readAsDataURL(file)
  }

  render() {

    const imgProps = {
      visible: this.state.visible,
      src: this.state.src,
      containerClass: 'xxx',
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
      onChange: (clipData) => {
        console.log(clipData)
        this.setState({clipData,})
      }
    }

    const {clipData} = this.state

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
        }}>裁剪网络图片</button>
        <button onClick={() => {
          this.setState({
            visible: true,
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537532475023&di=1f2df6e184b0f6ade6c1fd552603c321&imgtype=0&src=http%3A%2F%2Fbbsfiles.vivo.com.cn%2Fvivobbs%2Fattachment%2Fforum%2F201601%2F06%2F113323knym6qp2prtrfr0l.jpg',
          })
        }}>resetsrc</button>
        
        <div className="demo1">
          <ImageClipper {...imgProps}/>
          <div>
            {clipData?<div
              style={{
                width: clipData.width / 10,
                height: clipData.height / 10,
                overflow: 'hidden',
              }}>
              <img
                style={{
                  transform: `translate(${ -clipData.x/10}px, ${ -clipData.y/10}px)`,
                  width: 1920 / 10 + 'px',
                  height: 1080 / 10 + 'px',
                }}
                src={this.state.src}/>
            </div>: null}
            {clipData?<div
              style={{
                width: clipData.width / 5,
                height: clipData.height / 5,
                overflow: 'hidden',
              }}>
              <img
                style={{
                  transform: `translate(${ -clipData.x/5}px, ${ -clipData.y/5}px)`,
                  width: 1920 / 5 + 'px',
                  height: 1080 / 5 + 'px',
                }}
                src={this.state.src}/>
            </div>: null}
            {clipData?<div
              style={{
                width: clipData.width / 2,
                height: clipData.height / 2,
                overflow: 'hidden',
              }}>
              <img
                style={{
                  transform: `translate(${ -clipData.x/2}px, ${ -clipData.y/2}px)`,
                  width: 1920 / 2 + 'px',
                  height: 1080 / 2 + 'px',
                }}
                src={this.state.src}/>
            </div>: null}
          </div>
        </div>
        
        <h1>裁剪本地图片</h1>
        <input
          onChange={this.fileHandlerOnchange}
          type="file" />
        <img src={this.state.localImg}/>
      </div>
    );
  }
}

export default App;
