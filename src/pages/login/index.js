import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';

export default class extends Component {
  render () {
    return (
      <div className = "box">
          <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >NavBar</NavBar>

          <div className = "content">登录内容</div>
        </div>
    )
  }
}