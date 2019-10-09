import React,{Component,Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import FooterGuild from './component/FooterGuild'

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

  render(){
    return (
      <Fragment>
        <Router>
          <FooterGuild/>
          <Switch>
            <Route path='/Home' component={Home} meta={true}/>
            <Route path='/Cart' component={Cart} meta={true}/>
            <Route path='/Category' component={Category} meta={true}/>
            <Route path='/Manage' component={Manage} meta={true}/>
            <Route path='/Personal' component={Personal}/>
            <Route path='/Login' component={Login} />
            <Redirect to='/Home'/>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
