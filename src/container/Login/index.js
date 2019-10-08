import React, { Component,Fragment} from 'react';
import './login.css'
import {Button,Checkbox} from 'antd';

export default class Login extends Component {
  constructor(){
    super();
    //rem适配
    ;(()=>{
      const styleNode = document.createElement('style');
      const Ww = document.documentElement.clientWidth/10;
      styleNode.innerHTML = `html{font-size:${Ww}px!important}`;
      document.head.appendChild(styleNode);
    })();
  }
  render() {
    return (
      <Fragment>
        <div className="wrapper-login">
          <div className="wrapper-main">
            <div className="header">
              <header className="header-main">
                <a className="home"><i className="iconfont iconshouye"/></a>
                <h2 className="title">网易严选</h2>
                <div className="right">
                  <a className="search" href=""><i className="iconfont iconsousuo"/></a>
                  <a className="cart" href=""><i className="iconfont icongouwuche2"/></a>
                </div>
              </header>
            </div>
            <div className="content">
              <div className="logo">
                <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
              </div>
              <div className="login">
                <form className="login-form" action="">
                  <input className="nameInput" placeholder="请输入手机号"/>
                  <div className="codeWrap">
                    <input className="codeInput" placeholder="请输入短信验证码"/>
                    <div className="getCode">获取验证码</div>
                  </div>
                  <div className="problem">
                    <span className="left">遇到问题？</span>
                    <span className="right">使用密码验证登录</span>
                  </div>
                  <Button className="btn" type="danger">登录</Button>
                  <div className="mis">
                    <div>
                      <Checkbox checked='true' disabled="true"></Checkbox>
                      <span>我同意</span>
                      <span className="service">《服务条款》</span>
                      <span>和</span>
                      <span className="service">《网易隐私政策》</span>
                    </div>
                  </div>
                  <div className="other">其他登录方式 <span>&gt;</span></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
