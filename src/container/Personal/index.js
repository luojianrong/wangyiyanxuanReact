import React, { Component } from 'react';
import './index.css'

export default class Personal extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="wrapper-main">
          <div className="header">
            <header className="header-main">
              <a className="home" href=""><i className="iconfont iconshouye"/></a>
              <h2 className="title">网易严选</h2>
              <div className="right">
                <a className="search" href=""><i className="iconfont iconsousuo"/></a>
                <a className="cart" href=""><i className="iconfont icongouwuche2"/></a>
              </div>
            </header>
            <div className="contentDiv">
              <div className="img">
                <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
              </div>
              <div className="text">
                <p className="login-phone"><i className="icon iconfont iconshouji"/>手机号快速登录</p>
                <p className="login-email"><i className="icon email iconfont iconyouxiang"/>邮箱账号登录</p>
              </div>
            </div>
            <div className="thirdWrap">
              <div>
                <i className="iconfont iconweixin"/>
                <span>微信</span>
              </div>
              <div>
                <i className="iconfont iconqq-copy"/>
                <span>QQ</span>
              </div>
              <div>
                <i className="iconfont iconweibo"/>
                <span>微博</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
