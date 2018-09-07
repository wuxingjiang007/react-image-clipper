# 安装

  ```
    npm i react-image-clipper --save-dev
  ```

#使用

  ```
    import ImageClipper from 'react-image-clipper';

    class App extends React.Component {
      state: {visible: false}

      showImageClipper = () => {
        this.setState({
          visible: true,
          src:'http://zyp-farm-2.oss-ap-southeast-1.aliyuncs.com/data/farm/head/1533032455399.jpg',
        })
      }

      handleImageClipperOk = (data) => {
        console.log(data);
        this.setState({
          visible: false,
        })
      }

      handleImageClipperCancel = () => {
        this.setState({
          visible: false,
        })
      }

      render() {
        return (
          <div>
            <button onClick={this.showImageClipper}>showImageClipper</button>
            <ImageClipper
            visible={this.state.visible}
            onOk={this.handleImageClipperOk}
            onCancel={this.handleImageClipperCancel}
            src={'xxxxx.jpg'}
            />
          </div>
        )
      }
    }
  ```

#注意

参数|说明|类型|默认值
---|:---:|:---:|---|
src|需要裁剪的图片地址
visible|控制显隐|boolean|true
onOk|点击确定回调|function(data)）|无
onCancel|点击右上角X回调|function|无
