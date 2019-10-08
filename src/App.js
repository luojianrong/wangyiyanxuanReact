import React,{Component,Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink} from 'react-router-dom'

//路由组件
import Home from './container/Home'
import Cart from './container/Cart'
import Category from './container/Category'
import Manage from './container/Manage'
import Personal from './container/Personal'
import Login from './container/Login'


class App extends Component{
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

  state = {
    isShowFooter:true
  }

  render(){
    const {isShowFooter} = this.state;
    return (
      <Fragment>
        <Router>
          <div className="tabBar-wrap" >
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
            <Switch>
              <Route path='/Home' component={Home} />
              <Route path='/Cart' component={Cart} />
              <Route path='/Category' component={Category} />
              <Route path='/Manage' component={Manage} />
              <Route path='/Personal' component={Personal} />
              <Route path='/Login' component={Login} />
              <Redirect to='/Home'/>
            </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
