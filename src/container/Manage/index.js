import React, { Component } from 'react';
import './index.css'

export default class Manage extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="wrapper-main">
          <div className="header">
            <div className="position-fixed">
              <header className="header-main">
                <a className="home" href="/"><i className="iconfont iconshouye"/></a>
                <div className="title">
                  <a className="active">发现</a>
                  <a>甄选家</a>
                </div>
                <div className="right">
                  <a className="search" href=""><i className="iconfont iconsousuo"/></a>
                  <a className="cart" href=""><i className="iconfont icongouwuche2"/></a>
                </div>
              </header>
              <div className="nav">
                <div className="nav-tabs">
                  <a className="item active" href="">推荐</a>
                  <a className="item" href="">好货内部价</a>
                  <a className="item" href="">选购指南</a>
                  <a className="item" href="">回购榜</a>
                  <a className="item" href="">晒单</a>
                  <a className="item" href="">达人</a>
                  <a className="item" href="">HOME</a>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content-main">
              <div className="item">
                <a href="">
                  <div className="pic">
                    <img
                      src="https://yanxuan.nosdn.127.net/2079bbd71b87befd24070a83f1080e58.jpg?imageView&quality=65&thumbnail=690y376"
                      alt=""/>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="">
                  <div className="title">新鲜的，有创意的，可以打开你新世界大门的好物，给你意想不到的生活惊喜！</div>
                  <div className="pic">
                    <img
                      src="https://yanxuan.nosdn.127.net/2c278f4048125b135ab8e3303de65b19.jpg?imageView&quality=65&thumbnail=690y376"
                      alt=""/>
                  </div>
                  <div className="rcount">
                    <i className="icon iconfont iconyanjing"/>
                    <span>7426人看过</span>
                  </div>
                </a>
              </div>
              <div className="piker">
                <a href="">
                  <div className="info">
                    <div className="name">
                      <span className="img"><img
                        src="https://yanxuan.nosdn.127.net/6bbce2ec26816a0068fa1f76c9d4ef77.png?imageView&quality=65&thumbnail=56y56"
                        alt=""/></span>
                      <span className="title">网易员工精选</span>
                    </div>
                    <div className="eat">吃过猫山王，其他榴莲皆路人</div>
                    <div className="desc">开盒即食，全程冷鲜速达</div>
                    <div className="rcount">
                      <i className="icon iconfont iconyanjing"/>
                      <span>7426人看过</span>
                    </div>
                  </div>
                  <div className="pic">
                    <img className="img"
                         src="https://yanxuan.nosdn.127.net/3fb07b212a1c1d3a704f596ed5c31b2e.jpg?imageView&quality=65&thumbnail=272y272"
                         alt=""/>
                  </div>
                </a>
              </div>
              <div className="item">
                <a href="">
                  <div className="title">新鲜的，有创意的，可以打开你新世界大门的好物，给你意想不到的生活惊喜！</div>
                  <div className="pic">
                    <img
                      src="https://yanxuan.nosdn.127.net/d3a2e269f7117e8b183338a61cd276ed.jpg?imageView&quality=65&thumbnail=690y376"
                      alt=""/>
                  </div>
                  <div className="rcount">
                    <i className="icon iconfont iconyanjing"/>
                    <span>7426人看过</span>
                  </div>
                </a>
              </div>
              <div className="piker">
                <a href="">
                  <div className="info">
                    <div className="name">
                      <span className="img"><img
                        src="https://yanxuan.nosdn.127.net/6bbce2ec26816a0068fa1f76c9d4ef77.png?imageView&quality=65&thumbnail=56y56"
                        alt=""/></span>
                      <span className="title">网易味央：小周</span>
                    </div>
                    <div className="eat">秋天最要紧的，就是吃大闸蟹</div>
                    <div className="desc">大闸蟹礼券限时8.8折</div>
                    <div className="rcount">
                      <i className="icon iconfont iconyanjing"/>
                      <span>7426人看过</span>
                    </div>
                  </div>
                  <div className="pic">
                    <img className="img"
                         src="https://yanxuan.nosdn.127.net/debe90c6dbfa8593f4a17b59ddbcf466.jpg?imageView&quality=65&thumbnail=272y272"
                         alt=""/>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
