import React, { Component } from 'react';

export default class extends Component {

  componentDidMount () {
    this.props.requestHomeBannerListData();
    this.props.requestHomeProListData();
  }

  render () {
    return (
      <div className = "box">
          <header className="header">首页头部111</header>
          <div className = "content">
            首页内容111
            { this.props.homebannerlistdata.map((item, index) => {
              return (
                <img key={ index } alt="" src={'https://www.daxunxun.com' + item} />
              )
            }) }
            { this.props.homeprolistdata.map((item, index) => {
              return (
                <div key={ index }>{ item.title }</div>
              )
            }) }
          </div>
        </div>
    )
  }
}