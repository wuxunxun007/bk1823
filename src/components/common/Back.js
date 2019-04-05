import React, { Component } from 'react';

export default class extends Component {
  back () {
    let { index, url, type } = this.props;
    index = index || -1;
    type = type || 'push';
    if (url) {
      // this.props.history.push(url);
      this.props.history[type]("/" + url);
    } else {
      this.props.history.go(index);
    }
  }
  render () {
    return (
      <button onClick = { this.back.bind(this) }>返回</button>
    )
  }
}

/**
 * import Back from '@/components/common/Back';
 * 
 * <Back { ...this.props }/>
 * 
 * index 默认值为-1 表示返回前几页  可选
 * url  可选 表示直接跳转到那个页面
 * type 默认值为push 可选值为replace（替换）
 */