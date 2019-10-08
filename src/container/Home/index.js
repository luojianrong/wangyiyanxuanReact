import React, { Component } from 'react';
import { Carousel } from 'antd';
import './index.css'
import 'swiper'

export default class Home extends Component {

  render() {
    return (
      <div className="wrapper">
        <div className="head-main">
          <header className="header">
            <div className="header-top">
              <a href="/">网易严选</a>
              <div className="head-search">
                <i className="iconfont iconsousuo"/>
                <span className="placeholder">搜索商品, 共23054款好物</span>
              </div>
              <div className="loginBtn">登录</div>
            </div>
            <div className="guild">
              <div className="nav" ref="navBar">
                <div className="nav-tabs">
                  <a className="item active" href="">推荐</a>
                  <a className="item" href="">居家生活</a>
                  <a className="item" href="">服饰鞋包</a>
                  <a className="item" href="">美食酒水</a>
                  <a className="item" href="">个护清洁</a>
                  <a className="item" href="">母婴亲子</a>
                  <a className="item" href="">运动旅行</a>
                </div>
              </div>
              <div className="toggle">
                <i className="icon iconfont iconjiantou_down"/>
              </div>
            </div>
          </header>
        </div>
        <div className="contain">
          <Carousel className="swipers" autoplay>
            <div className="swiper">
              <img
                src="https://yanxuan.nosdn.127.net/66ea9b0ded3ab38c16e81763839edf90.jpg?imageView&quality=75&thumbnail=750x0"
                alt=""/>
            </div>
            <div className="swiper">
              <img
                src="https://yanxuan.nosdn.127.net/a412dcf435135e294edbcad885786060.jpg?imageView&quality=75&thumbnail=750x0"
                alt=""/>
            </div>
            <div className="swiper">
              <img
                src="https://yanxuan.nosdn.127.net/61469ce903085d2c5141ab0daf955011.jpg?imageView&quality=75&thumbnail=750x0"
                alt=""/>
            </div>
            <div className="swiper">
              <img
                src="https://yanxuan.nosdn.127.net/570e4ceffc3c1c9e02d060e91a5f229f.jpg?imageView&quality=75&thumbnail=750x0"
                alt=""/>
            </div>
          </Carousel>
          <div className="service-policy">
            <ul className="serve-ul">
              <li>
                <a>
                  <i className="iconfont iconairudiantubiaohuizhi-zhuanqu_yiwutong"/>
                  <span>网易自营品牌</span>
                </a>
              </li>
              <li>
                <a>
                  <i className="iconfont iconmn_dunpai"/>
                  <span>30天无忧退货</span>
                </a>
              </li>
              <li>
                <a>
                  <i className="iconfont iconqian"/>
                  <span>48小时快速退款</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="data-reactid">
            <div className="categories">
              <div className="categorie">
                <a href="/" className="categorie-item">
                  <div className="icon">
                    <img className="img" src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png"
                         alt=""/>
                  </div>
                  <div className="text">新品首发</div>
                </a>
                <a href="/" className="categorie-item">
                  <div className="icon">
                    <img className="img" src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png"
                         alt=""/>
                  </div>
                  <div className="text">居家生活</div>
                </a>
                <a href="/" className="categorie-item">
                  <div className="icon">
                    <img className="img" src="https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png"
                         alt=""/>
                  </div>
                  <div className="text">服饰鞋包</div>
                </a>
                <a href="/" className="categorie-item">
                  <div className="icon">
                    <img className="img" src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
                         alt=""/>
                  </div>
                  <div className="text">美食酒水</div>
                </a>
                <a href="/" className="categorie-item">
                  <div className="icon">
                    <img className="img" src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png"
                         alt=""/>
                  </div>
                  <div className="text">个护清洁</div>
                </a>
              </div>
              <div className="categorie">
                <a href="/" className="categorie-item">
                  <div className="icon">
                    <img className="img" src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png"
                         alt=""/>
                  </div>
                  <div className="text">母婴亲子</div>
                </a>
                <a href="/" className="categorie-item">
                  <div className="icon">
                    <img className="img" src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png"
                         alt=""/>
                  </div>
                  <div className="text">运动旅行</div>
                </a>
                <a href="/" className="categorie-item">
                  <div className="icon">
                    <img className="img" src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png"
                         alt=""/>
                  </div>
                  <div className="text">数码家电</div>
                </a>
                <a href="/" className="categorie-item">
                  <div className="icon">
                    <img className="img" src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png"
                         alt=""/>
                  </div>
                  <div className="text">全球特色</div>
                </a>
                <a href="/" className="categorie-item">
                  <div className="icon">
                    <img className="img" src="https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif"
                         alt=""/>
                  </div>
                  <div className="text">好货抄底</div>
                </a>
              </div>
            </div>
            <div className="freshmanModule ">
              <div className="module">
                <div className="moduleTitle">
                  <span className="text">新人专享礼</span>
                </div>
                <div className="content">
                  <a href="/" className="left">
                    <div className="name">新人专享礼包</div>
                    <div className="imgWrap">
                      <div className="img ">
                        <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt=""/>
                      </div>
                    </div>
                  </a>
                  <div className="right">
                    <div className="module1">
                      <a className="m-activityItem" href="javascript:void(0)">
                        <div className="picWrap">
                          <div className="pic">
                            <img
                              src="https://yanxuan-item.nosdn.127.net/8ae69b9fb225765c8ce72a3f41852746.png?imageView&thumbnail=200x200&quality=75"
                              alt=""/>
                          </div>
                          <div className="discount">
                            <div className="line1">¥39.9</div>
                            <div className="line2">¥49</div>
                          </div>
                        </div>
                        <div className="cnt">
                          <div className="title">福利社</div>
                          <div className="subTitle">今日特价</div>
                        </div>
                      </a>
                    </div>
                    <div className="module1">
                      <a className="m-activityItem" href="javascript:void(0)">
                        <div className="picWrap">
                          <div className="pic">
                            <img
                              src="https://yanxuan-item.nosdn.127.net/8ae69b9fb225765c8ce72a3f41852746.png?imageView&thumbnail=200x200&quality=75"
                              alt=""/>
                          </div>
                          <div className="discount">
                            <div className="line1">¥39.9</div>
                            <div className="line2">¥49</div>
                          </div>
                        </div>
                        <div className="cnt">
                          <div className="title">福利社</div>
                          <div className="subTitle">今日特价</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="indexManufacturersSupplying ">
              <div className="module">
                <div className="moduleTitle">
                  <span className="text">品牌制造商直供</span>
                  <span className="more">更多</span>
                </div>
                <ul className="list">
                  <a className="item item1">
                    <div className="cnt">
                      <h4 className="title">海外制造商</h4>
                      <div>
                      <span>
                        <span className="price">9.9</span>
                        <span className="newIcon">元起</span>
                      </span>
                        <span className="new">上新</span>
                      </div>
                    </div>
                  </a>
                  <a className="item item2">
                    <div className="cnt">
                      <h4 className="title">海外制造商</h4>
                      <div>
                        <span>
                          <span className="price">9.9</span>
                          <span className="newIcon">元起</span>
                        </span>
                      </div>
                    </div>
                  </a>
                  <a className="item item3">
                    <div className="cnt">
                      <h4 className="title">海外制造商</h4>
                      <div>
                        <span>
                          <span className="price">9.9</span>
                          <span className="newIcon">元起</span>
                        </span>
                      </div>
                    </div>
                  </a>
                  <a className="item item4">
                    <div className="cnt">
                      <h4 className="title">海外制造商</h4>
                      <div>
                        <span>
                          <span className="price">9.9</span>
                          <span className="newIcon">元起</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </ul>
              </div>
            </div>
            <div className="categoryHotSellModule ">
              <div className="module">
                <div className="moduleTitle">
                  <span className="text">类目热销榜</span>
                  <span className="more">更多</span>
                </div>
                <div className="content">
                  <div className="line1">
                    <a href="" className="item-big item1">
                      <div>
                        <div className="name">
                          <span className="txt">热销榜</span>
                        </div>
                      </div>
                      <div className="imgWrap">
                        <div className="m-lazyload">
                          <img className="img"
                               src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200"
                               alt=""/>
                        </div>
                      </div>
                    </a>
                    <a href="" className="item-big item1">
                      <div>
                        <div className="name">
                          <span className="txt">热销榜</span>
                        </div>
                      </div>
                      <div className="imgWrap">
                        <div className="m-lazyload">
                          <img className="img"
                               src="https://yanxuan-item.nosdn.127.net/e272316176963bd54052126a7657bbb9.png?imageView&quality=65&thumbnail=200x200"
                               alt=""/>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="line2">
                    <a className="item" href="">
                      <div className="name">居家生活榜</div>
                      <div className="imgWrap">
                        <img className="img"
                             src="https://yanxuan-item.nosdn.127.net/b74d5c3b31398f145b30bf761d72affc.png?imageView&quality=65&thumbnail=200x200"
                             alt=""/>
                      </div>
                    </a>
                    <a className="item" href="">
                      <div className="name">居家生活榜</div>
                      <div className="imgWrap">
                        <img className="img"
                             src="https://yanxuan-item.nosdn.127.net/63967eb40b0af505f1fd066442952bab.png?imageView&quality=65&thumbnail=200x200"
                             alt=""/>
                      </div>
                    </a>
                    <a className="item" href="">
                      <div className="name">居家生活榜</div>
                      <div className="imgWrap">
                        <img className="img"
                             src="https://yanxuan-item.nosdn.127.net/a5b6447bf85a8ff946c9438fe2ee740a.png?imageView&quality=65&thumbnail=200x200"
                             alt=""/>
                      </div>
                    </a>
                    <a className="item" href="">
                      <div className="name">居家生活榜</div>
                      <div className="imgWrap">
                        <img className="img"
                             src="https://yanxuan-item.nosdn.127.net/431a09a43914483f4d70aeda8ecb8a59.png?imageView&quality=65&thumbnail=200x200"
                             alt=""/>
                      </div>
                    </a>
                    <a className="item" href="">
                      <div className="name">居家生活榜</div>
                      <div className="imgWrap">
                        <img className="img"
                             src="https://yanxuan-item.nosdn.127.net/a29e50a8f4286ca54d696e7d6bc10afd.png?imageView&quality=65&thumbnail=200x200"
                             alt=""/>
                      </div>
                    </a>
                    <a className="item" href="">
                      <div className="name">居家生活榜</div>
                      <div className="imgWrap">
                        <img className="img"
                             src="https://yanxuan-item.nosdn.127.net/c27abf14fa51f922122d9c81d7e68bd8.png?imageView&quality=65&thumbnail=200x200"
                             alt=""/>
                      </div>
                    </a>
                    <a className="item" href="">
                      <div className="name">居家生活榜</div>
                      <div className="imgWrap">
                        <img className="img"
                             src="https://yanxuan-item.nosdn.127.net/f444ac11115a8249a92dc95dccad6e07.png?imageView&quality=65&thumbnail=200x200"
                             alt=""/>
                      </div>
                    </a>
                    <a className="item" href="">
                      <div className="name">居家生活榜</div>
                      <div className="imgWrap">
                        <img className="img"
                             src="https://yanxuan-item.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png?imageView&quality=65&thumbnail=200x200"
                             alt=""/>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="popularItemModule">
              <div className="module">
                <div className="moduleTitle">
                  <span className="text">人气推荐</span>
                  <span className="more">更多</span>
                </div>
                <a className="spItem" href="">
                  <div className="wraper">
                    <img
                      src="https://yanxuan-item.nosdn.127.net/7ee6fafe787e7b26498a5f49cf2b937b.png?imageView&quality=65&thumbnail=280x280"
                      alt=""/>
                  </div>
                  <div className="right">
                    <div className="tagWraper new">
                      <span className="text">上新专享</span>
                    </div>
                    <div className="name">95%白鹅绒保暖羽绒被 升级款</div>
                    <div className="desc">热销5万+条，洁净舒柔好睡眠</div>
                    <div className="price">
                      <span>￥</span>
                      <span>999</span>
                    </div>
                  </div>
                </a>
                <div className="line2">
                  <ul className="list">
                    <li className="item">
                      <a className="good" href="">
                        <div className="hd">
                          <img
                            src="https://yanxuan-item.nosdn.127.net/63967eb40b0af505f1fd066442952bab.png?imageView&quality=65&thumbnail=330x330"
                            alt=""/>
                        </div>
                        <div className="name">
                          <span className="text">24寸 纯PC“铝框”（非全铝）拉杆箱</span>
                        </div>
                        <div className="tagWraper">
                          <p className="status">特价</p>
                        </div>
                      </a>
                    </li>
                    <li className="item">
                      <a className="good" href="">
                        <div className="hd">
                          <img
                            src="https://yanxuan-item.nosdn.127.net/8ae69b9fb225765c8ce72a3f41852746.png?imageView&quality=65&thumbnail=330x330"
                            alt=""/>
                        </div>
                        <div className="name">
                          <span className="text">24寸 纯PC“铝框”（非全铝）拉杆箱</span>
                        </div>
                        <div className="tagWraper">
                          <p className="status">特价</p>
                        </div>
                      </a>
                    </li>
                    <li className="item">
                      <a className="good" href="">
                        <div className="hd">
                          <img
                            src="https://yanxuan-item.nosdn.127.net/1547946fa7c422e88dcc6950ffa7586a.png?imageView&quality=65&thumbnail=330x330"
                            alt=""/>
                        </div>
                        <div className="name">
                          <span className="text">24寸 纯PC“铝框”（非全铝）拉杆箱</span>
                        </div>
                        <div className="tagWraper">
                          <p className="status">特价</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flashSaleModule">
              <div className="module">
                <div className="moduleTitle">
                  <span className="text">限时购</span>
                  <span className="more">更多</span>
                </div>
                <div className="cnt">
                  <a className="item" href="">
                    <div className="imgWrap">
                      <img
                        src="https://yanxuan-item.nosdn.127.net/1f1c9359c2274c630014eef04cc511cc.png?imageView&thumbnail=216x216&quality=75"
                        alt=""/>
                    </div>
                    <div className="price">
                      <span className="current-price">￥399</span>
                      <span className="retail-price">￥400</span>
                    </div>
                  </a>
                  <a className="item" href="">
                    <div className="imgWrap">
                      <img
                        src="https://yanxuan-item.nosdn.127.net/0523aeb248d7c02a21b6bd345e00a3e3.png?imageView&thumbnail=216x216&quality=75"
                        alt=""/>
                    </div>
                    <div className="price">
                      <span className="current-price">￥399</span>
                      <span className="retail-price">￥400</span>
                    </div>
                  </a>
                  <a className="item" href="">
                    <div className="imgWrap">
                      <img
                        src="https://yanxuan-item.nosdn.127.net/3dfcd7f9489ccd21a8291d9aa19f2a7b.png?imageView&thumbnail=216x216&quality=75"
                        alt=""/>
                    </div>
                    <div className="price">
                      <span className="current-price">￥399</span>
                      <span className="retail-price">￥400</span>
                    </div>
                  </a>
                  <a className="item" href="">
                    <div className="imgWrap">
                      <img
                        src="https://yanxuan-item.nosdn.127.net/eb2b6522431a0f13ae96c7dcfe17108d.png?imageView&thumbnail=216x216&quality=75"
                        alt=""/>
                    </div>
                    <div className="price">
                      <span className="current-price">￥399</span>
                      <span className="retail-price">￥400</span>
                    </div>
                  </a>
                  <a className="item" href="">
                    <div className="imgWrap">
                      <img
                        src="https://yanxuan-item.nosdn.127.net/197d2f224082d4d3c95e57c2861ca663.png?imageView&thumbnail=216x216&quality=75"
                        alt=""/>
                    </div>
                    <div className="price">
                      <span className="current-price">￥399</span>
                      <span className="retail-price">￥400</span>
                    </div>
                  </a>
                  <a className="item" href="">
                    <div className="imgWrap">
                      <img
                        src="https://yanxuan-item.nosdn.127.net/51a771ab0a72a8442129af2ef1d914f0.png?imageView&thumbnail=216x216&quality=75"
                        alt=""/>
                    </div>
                    <div className="price">
                      <span className="current-price">￥399</span>
                      <span className="retail-price">￥400</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="newItemModule">
              <div className="module">
                <div className="moduleTitle">
                  <span className="text">新品首发</span>
                  <span className="more">更多</span>
                </div>
                <div className="line2">
                  <ul className="list">
                    <li className="item">
                      <a className="good" href="">
                        <div className="hd">
                          <img
                            src="https://yanxuan-item.nosdn.127.net/63967eb40b0af505f1fd066442952bab.png?imageView&quality=65&thumbnail=330x330"
                            alt=""/>
                        </div>
                        <div className="name">
                          <span className="text">24寸 纯PC“铝框”（非全铝）拉杆箱</span>
                        </div>
                        <div className="tagWraper">
                          <p className="status">特价</p>
                        </div>
                      </a>
                    </li>
                    <li className="item">
                      <a className="good" href="">
                        <div className="hd">
                          <img
                            src="https://yanxuan-item.nosdn.127.net/8ae69b9fb225765c8ce72a3f41852746.png?imageView&quality=65&thumbnail=330x330"
                            alt=""/>
                        </div>
                        <div className="name">
                          <span className="text">24寸 纯PC“铝框”（非全铝）拉杆箱</span>
                        </div>
                        <div className="tagWraper">
                          <p className="status">特价</p>
                        </div>
                      </a>
                    </li>
                    <li className="item">
                      <a className="good" href="">
                        <div className="hd">
                          <img
                            src="https://yanxuan-item.nosdn.127.net/1547946fa7c422e88dcc6950ffa7586a.png?imageView&quality=65&thumbnail=330x330"
                            alt=""/>
                        </div>
                        <div className="name">
                          <span className="text">24寸 纯PC“铝框”（非全铝）拉杆箱</span>
                        </div>
                        <div className="tagWraper">
                          <p className="status">特价</p>
                        </div>
                      </a>
                    </li>
                    <li className="item">
                      <a className="good" href="">
                        <div className="hd">
                          <img
                            src="https://yanxuan-item.nosdn.127.net/339b74cf85e67ef574c4ec044c888cb6.png?imageView&quality=65&thumbnail=330x330"
                            alt=""/>
                        </div>
                        <div className="name">
                          <span className="text">24寸 纯PC“铝框”（非全铝）拉杆箱</span>
                        </div>
                        <div className="tagWraper">
                          <p className="status">特价</p>
                        </div>
                      </a>
                    </li>
                    <li className="item">
                      <a className="good" href="">
                        <div className="hd">
                          <img
                            src="https://yanxuan-item.nosdn.127.net/ae8c3cda95b2a807d0b8518f7145eda4.png?imageView&quality=65&thumbnail=330x330"
                            alt=""/>
                        </div>
                        <div className="name">
                          <span className="text">24寸 纯PC“铝框”（非全铝）拉杆箱</span>
                        </div>
                        <div className="tagWraper">
                          <p className="status">特价</p>
                        </div>
                      </a>
                    </li>
                    <li className="item">
                      <a className="good" href="">
                        <div className="hd">
                          <img
                            src="https://yanxuan-item.nosdn.127.net/80730ed1003f4b5e6e857a5dacd5a4a5.png?imageView&quality=65&thumbnail=330x330"
                            alt=""/>
                        </div>
                        <div className="name">
                          <span className="text">24寸 纯PC“铝框”（非全铝）拉杆箱</span>
                        </div>
                        <div className="tagWraper">
                          <p className="status">特价</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="LightShoppingGuideModule ">
              <div className="module">
                <div className="list">
                  <a className="item">
                    <div className="cnt">
                      <div className="title">9.9超值专区</div>
                      <div className="price">190款商品定价直降</div>
                      <div className="picList">
                        <img
                          src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75"
                          alt=""/>
                        <img
                          src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75"
                          alt=""/>
                      </div>
                    </div>
                    <div className="cnt">
                      <div className="title">9.9超值专区</div>
                      <div className="price">190款商品定价直降</div>
                      <div className="picList">
                        <img
                          src="https://yanxuan-item.nosdn.127.net/6640e0608af25bc8c9970a9b7f338e78.png?imageView&thumbnail=150x150&quality=75"
                          alt=""/>
                        <img
                          src="https://yanxuan-item.nosdn.127.net/0068f40279c5dc90195a3703c9410547.png?imageView&thumbnail=150x150&quality=75"
                          alt=""/>
                      </div>
                    </div>
                    <div className="cnt">
                      <div className="title">9.9超值专区</div>
                      <div className="price">190款商品定价直降</div>
                      <div className="picList">
                        <img
                          src="https://yanxuan-item.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&thumbnail=150x150&quality=75"
                          alt=""/>
                        <img
                          src="https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?imageView&thumbnail=150x150&quality=75"
                          alt=""/>
                      </div>
                    </div>
                    <div className="cnt">
                      <div className="title">9.9超值专区</div>
                      <div className="price">190款商品定价直降</div>
                      <div className="picList">
                        <img
                          src="https://yanxuan-item.nosdn.127.net/1a24d637b5363e66610fe18de25e3932.png?imageView&thumbnail=150x150&quality=75"
                          alt=""/>
                        <img
                          src="https://yanxuan-item.nosdn.127.net/7c230892d2958d2c6a777acd9d2d4f95.png?imageView&thumbnail=150x150&quality=75"
                          alt=""/>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="footer">
              <footer className="footer-main">
                <div className="bd">
                  <a href="">下载APP</a>
                  <a href="">电脑版</a>
                  <p className="copyright">
                    <span>网易公司版权所有 © 1997-2019</span><br/>
                    <span>食品经营许可证：JY13301080111719</span>
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
