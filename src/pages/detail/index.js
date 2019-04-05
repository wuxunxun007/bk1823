import React, { Component } from 'react';
import Back from '@/components/common/Back';

export default class extends Component {
  render () {
    return (
      <div className = "container">
        <div className = "box">
          <header className="header">详情头部
            <Back index = "-2" url = "home" type="push" { ...this.props }/>
          </header>
          <div className = "content">详情</div>
        </div>
        <footer className = "footer">
          详情底部
        </footer>
      </div>
    )
  }
}