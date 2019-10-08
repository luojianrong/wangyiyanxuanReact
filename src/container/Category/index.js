import React, { Component} from 'react';
import './index.css'
import axios from 'axios'

export default class Catergory extends Component {
  OK = 200
  state = {
    currentCategory:[],  //当前展示的分类列表
    categoryL1List:[],//左侧分类列表
    index:16  //当前展示的分类列表下标
  }

  //组件挂载后获取mock数据
  async componentDidMount(){
    const response = await axios.get('/category');
    const data = response.data.data;
    if (response.status === this.OK){
      this.setState({
        categoryL1List: data.categoryL1List,
        currentCategory: data.currentCategory.subCateList
      })
    }
  }

  //点击左侧列表改变样式以及显示对应右侧的数据
  handleLeft(index){
    return () =>{
      const {categoryL1List} = this.state;
      const category = categoryL1List.filter((item)=>{
        return item.showIndex === index
      });
      console.log(category)
      this.setState({
        index,
        currentCategory:category[0].subCateList
      })
    }
  }

  render() {
    const {categoryL1List,currentCategory,index} = this.state;
    return (
      <div className="wrapper">
        <div className="wrapper-main">
          <div className="hdWraper">
            <div className="head-main">
              <div className="head-search">
                <i className="iconfont iconsousuo"/>
                <span className="placeholder">搜索商品, 共23054款好物</span>
              </div>
            </div>
          </div>
          <div className="cateContainer">
            <div className="left-list">
              <ul className="list">
                {
                  categoryL1List.map((item)=>{
                    return (
                      <li className={`item ${item.showIndex===index?"active":null}`} key={item.showIndex} onClick={this.handleLeft(item.showIndex)}>{item.name}</li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="right-list">
              <div className="subCateList">
                <div className="subCateContainer">
                  <div className="banner">
                    <img
                      src="https://yanxuan.nosdn.127.net/01467535cd09249bd5cf0ae110845892.jpg?imageView&quality=75&thumbnail=0x196"
                      alt=""/>
                  </div>
                  <div className="cateList">
                    <ul className="list">
                      {
                        currentCategory.map((item)=>{
                          return (
                            <li className="item" key={item.showIndex}>
                              <div className="cateImgWrapper">
                                <img
                                  src={item.bannerUrl}
                                  alt=""/>
                              </div>
                              <span className="name">{item.name}</span>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
