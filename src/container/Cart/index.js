import React, { Component } from 'react';
import './index.css'

export default class Cart extends Component {
  render() {
    return (
      <div className="wrapper-cart">
        <div className="wrapper-main">
          <div className="header">
            <header className="header-main">
              <span className="logo">购物车</span>
              <span className="text">领卷</span>
            </header>
            <div className="tab">
              <ul className="service">
                <li className="item">
                  <i className="iconfont iconyuandianxiao"/>
                  <span>30天无忧退货</span>
                </li>
                <li className="item">
                  <i className="iconfont iconyuandianxiao"/>
                  <span>48小时快速退款</span>
                </li>
                <li className="item">
                  <i className="iconfont iconyuandianxiao"/>
                  <span>满88元免邮费</span>
                </li>
              </ul>
            </div>
            <div className="contentImg">
              <div className="img">
                <img
                  src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png"
                  alt=""/>
              </div>
              <div className="text">
                <span>去添加点什么吧</span>
                <p className="loginBtn">登录</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
