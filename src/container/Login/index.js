import React, { Component,Fragment} from 'react';
import './login.css'
import {Button,Checkbox,Form,Input,message} from 'antd';
import http from '../../api';

const {Item} = Form;

class Login extends Component {

  //获取验证码成功的状态码
  OK = 0;

  //初始化状态
  state = {
    phone:'',
    code:''
  };


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

  //表单校验规则方法
  validator = (rule,value,callback) => {
    if (!/^1[3456789]\d{9}$/.test(value)){
      callback("请输入正确的手机号")
    }
    callback();
    this.setState({
      phone:value
    })
  };

  //获取验证码的方法
  getCode = async () =>{
     const res = await http.login.sendcode({phone:this.state.phone})
    if (res.code === 0) message.success("验证码已发送成功")
  }

  //登录的方法
  toLogin = () =>{
    this.props.form.validateFields(async (err,values)=>{
      const {phone,code} = values;
      if (!err){
        //表单校验成功
        const res = await http.login.loginSns({
          user:{
            phone,
            code
          }
        });
        console.log(res)
        if (res.code === this.OK)  message.success("登录成功")
        this.props.form.resetFields(['code','phone'])
        this.props.history.push('/Home');
      }
    })
  };

  render() {
    const {getFieldDecorator} = this.props.form;
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
                <Form className="login-form" action="">
                  <Item>
                    {
                      getFieldDecorator(
                        'phone',
                        {
                          rules:[
                            {validator:this.validator}
                          ]
                        })(
                        <Input className="nameInput" placeholder="请输入手机号"/>
                      )
                    }
                  </Item>
                  <div className="codeWrap">
                    <Item>
                      {
                        getFieldDecorator(
                          'code',{
                            rules: [
                              {len:6,message:'验证码长度必须为6位'},
                              {required:true,message:'请输入验证码'}
                            ]
                          }
                        )(<Input className="codeInput" placeholder="请输入短信验证码"/>)
                      }
                    </Item>
                    <div className="getCode" onClick={this.getCode}>获取验证码</div>
                  </div>
                  <div className="problem">
                    <span className="left">遇到问题？</span>
                    <span className="right">使用密码验证登录</span>
                  </div>
                  <Button className="btn" type="danger" onClick={this.toLogin}>登录</Button>
                  <div className="mis">
                    <div>
                      <Checkbox checked={true} disabled={true}/>
                      <span>我同意</span>
                      <span className="service">《服务条款》</span>
                      <span>和</span>
                      <span className="service">《网易隐私政策》</span>
                    </div>
                  </div>
                  <div className="other">其他登录方式 <span>&gt;</span></div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default  Form.create()(Login)
