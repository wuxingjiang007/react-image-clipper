# 组建开发中。。。。

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
            onError={() => {
              console.log('图片加载失败')
            }}
            src={'xxxxx.jpg'}
            />
          </div>
        )
      }
    }
  ```

#注意

src: PropTypes.string.isRequired,

initClipWidth: PropTypes.number,

initClipHeight: PropTypes.number,

onCancel: PropTypes.func.isRequired,

onOk: PropTypes.func.isRequired,

onError: PropTypes.func,


参数|说明|类型|默认值|备注
---|:---:|:---:|:---:|---|
src|需要裁剪的图片地址|string|无|
initClipWidth|初始裁剪宽度|'auto'|相对图片原始大小|
initClipHeight|初始裁剪高度|'auto'|相对图片原始大小|
w_h|裁剪的宽高比|16/9|无|
visible|控制显隐|boolean|无|
onOk|点击确定回调|function(data)）|无
onCancel|点击右上角X回调|function|无
onError|图片加载失败回调|function|无
