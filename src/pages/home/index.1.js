import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

export default class extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176
    }
  }
  goDetail () {
    this.props.history.push('/detailapp/detail')
  }

  compontentDidMount () {
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }

  render () {
    return (
      <div className = "box">
          <header className="header">首页头部</header>
          <div className = "content">
            首页内容
            <button onClick = { this.goDetail.bind(this) }>去详情</button>
            <WingBlank>
              <Carousel className="space-carousel"
                frameOverflow="visible"
                cellSpacing={10}
                slideWidth={0.8}
                autoplay
                infinite
              >
                {this.state.data.map((val, index) => (
                  <a
                    key={val}
                    href="http://www.alipay.com"
                    style={{
                      display: 'block',
                      position: 'relative',
                      top: this.state.slideIndex === index ? -10 : 0,
                      height: this.state.imgHeight,
                      boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <img
                      src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                      alt=""
                    />
                  </a>
                ))}
              </Carousel>
            </WingBlank>
          </div>
        </div>
    )
  }
}