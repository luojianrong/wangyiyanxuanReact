import React, { Component} from 'react';
import { NavLink,withRouter} from 'react-router-dom'
import './index.css'

class FooterGuild extends Component {
  render() {
   const path = this.props.location.pathname;
   if (path === '/Personal' || path === '/Login') return null
    return (
      <div className="tabBar-wrap">
        <nav className="m-tabBar">
          <NavLink to='/Home' className="item">
            <i className="icon iconfont iconshouye"/>
            <span className="text active">首页</span>
          </NavLink>
          <NavLink to='/Category' className="item ">
            <i className="icon iconfont iconfenlei"/>
            <span className="text">分类</span>
          </NavLink>
          <NavLink to='/Manage' className="item ">
            <i className="icon iconfont icontupian"/>
            <span className="text">识物</span>
          </NavLink>
          <NavLink to='/Cart' className="item ">
            <i className="icon iconfont icongouwuche2"/>
            <span className="text">购物车</span>
          </NavLink>
          <NavLink to='/Personal' className="item ">
            <i className="icon iconfont icon04geren"/>
            <span className="text">个人</span>
          </NavLink>
        </nav>
      </div>
    )
  }
}

export default withRouter(FooterGuild)
