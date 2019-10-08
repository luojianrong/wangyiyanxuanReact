import React, { Component} from 'react';
import {Link} from 'react-router-dom'
import './index.css'

export default class FooterGuild extends Component {
  render() {
    return (
      <div className="tabBar-wrap">
        <nav className="m-tabBar">
          <Link to='/Home' href="" className="item active">
            <i className="icon iconfont iconshouye"/>
            <span className="text active">首页</span>
          </Link>
          <a href="" className="item ">
            <i className="icon iconfont iconfenlei"/>
            <span className="text">分类</span>
          </a>
          <a href="" className="item ">
            <i className="icon iconfont icontupian"/>
            <span className="text">识物</span>
          </a>
          <a href="" className="item ">
            <i className="icon iconfont icongouwuche2"/>
            <span className="text">购物车</span>
          </a>
          <a href="" className="item ">
            <i className="icon iconfont icon04geren"/>
            <span className="text">个人</span>
          </a>
        </nav>
      </div>
    )
  }
}
