import React, { Component } from 'react';
import { Carousel } from 'antd';
import './index.css'
import 'swiper'
import axios from 'axios';

export default class Home extends Component {
  state = {
    policyDescList:[], //服务策略
    kingKongList:[], //商品导航
    flashSaleModule:[],//限时购
    newItemList:[], //新品首发
    popularItemList:[],//人气推荐
    indexActivityModule:[],//新人专享礼
    hotCategoryList:[],//热销榜
  };

  async componentDidMount(){
    const response = await axios.get('/homeData');
    const data = response.data.data
    this.setState({
      policyDescList: data.policyDescList,
      kingKongList: data.kingKongModule.kingKongList,
      indexActivityModule: data.indexActivityModule,
      flashSaleModule: data.flashSaleModule.itemList,
      newItemList: data.newItemList,
      popularItemList: data.popularItemList,
      hotCategoryList : data.categoryHotSellModule.categoryList
    })
  }

  render() {
    const {policyDescList,kingKongList,indexActivityModule,flashSaleModule,newItemList,popularItemList,hotCategoryList}  = this.state;
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
              {
                policyDescList.map((item,index)=>{
                  return (
                  <li key={index}>
                    <a>
                      <i className="iconfont iconqian"/>
                      <span>{item.desc}</span>
                    </a>
                  </li>
                  );
                })
              }
            </ul>
          </div>
          <div className="data-reactid">
            <div className="categories">
              <div className="categorie">
                {
                  kingKongList.map((item,index)=>{
                    return (
                      <a href="/" key={index} className="categorie-item">
                        <div className="icon">
                          <img className="img" src={item.picUrl}
                               alt=""/>
                        </div>
                        <div className="text">{item.text}</div>
                      </a>
                    )
                  })
                }
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
                    {
                      indexActivityModule.map((item,index)=>{
                        return (
                          <div className="module1" key={index}>
                            <a className="m-activityItem" href="javascript:void(0)">
                              <div className="picWrap">
                                <div className="pic">
                                  <img
                                    src={item.picUrl}
                                    alt="picUrl"/>
                                </div>
                                <div className="discount">
                                  <div className="line1">¥{item.activityPrice}</div>
                                  <div className="line2">¥{item.originPrice}</div>
                                </div>
                              </div>
                              <div className="cnt">
                                <div className="title">{item.title}</div>
                                <div className="subTitle">{item.subTitle}</div>
                              </div>
                            </a>
                          </div>
                        )
                      })
                    }
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
                    {
                      hotCategoryList.map((item,index)=>{
                       return (
                         <a className="item" href="" key={index}>
                           <div className="name">{item.categoryName}</div>
                           <div className="imgWrap">
                             <img className="img"
                                  src={item.picUrl}
                                  alt="picUrl"/>
                           </div>
                         </a>
                       )
                      })
                    }
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
                    {
                      popularItemList.map((item)=>{
                        return (
                          <li className="item" key={item.id}>
                            <a className="good" href="">
                              <div className="hd">
                                <img
                                  src={item.scenePicUrl}
                                  alt="scenePicUrl"/>
                              </div>
                              <div className="name">
                                <span className="text">{item.simpleDesc}</span>
                              </div>
                              <div className="tagWraper">
                                 <p className="status">{item.promTag}</p>
                              </div>
                            </a>
                          </li>
                        )
                      })
                    }
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
                  {
                    flashSaleModule.map((item)=>{
                      return (
                        <a className="item" href="" key={item.itemId}>
                          <div className="imgWrap">
                            <img
                              src={item.picUrl}
                              alt=""/>
                          </div>
                          <div className="price">
                            <span className="current-price">￥{item.activityPrice}</span>
                            <span className="retail-price">￥{item.originPrice}</span>
                          </div>
                        </a>
                      )
                    })
                  }
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
                    {
                      newItemList.map((item)=>{
                        return (
                          <li className="item" key={item.id}>
                            <a className="good" href="">
                              <div className="hd">
                                <img
                                  src={item.listPicUrl}
                                  alt="listPicUrl"/>
                              </div>
                              <div className="name">
                                <span className="text">{item.simpleDesc}</span>
                              </div>
                              <div className="tagWraper">
                                {
                                  item.itemTagList.map((item)=>{
                                    return ( <p key={item.itemId} className="status">{item.name}</p> )
                                  })
                                }
                              </div>
                            </a>
                          </li>
                        )
                      })
                    }
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
