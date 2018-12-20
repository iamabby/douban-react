import React, { Component ,Fragment} from 'react'
import "./Search.scss";
import axios from "axios";
import Title from '../Title/Title';
import {Link} from 'react-router-dom';
export default class Search extends Component {
  constructor(){
    super()
    this.state={
      name:'',
      list:[],
      count:'',
      flag:false
    }
  }
  inputHandle(e){
    this.setState({
        name:e.target.value
    })
  }
  searchHandle(){
    const name=this.state.name;
    if(!name){
        console.log("关键字不能为空！");
        return false;
    }
    axios.get("/v2/movie/search?q="+name)
    .then(res=>{
        console.log(res.data);
        const data=res.data;
        this.setState({
            list:data.subjects,
            count:data.count,
            flag:true
        })
    })
    .then(error=>{
        console.log(error)
    })
  }
  render() {
    const {count,flag} =this.state
    return (
     
      <>
      <Title title="搜索列表" />
      <div className="search">
        <input type="search" 
            placeholder="请输入关键字"
            onChange={this.inputHandle.bind(this)} 
            value={this.state.name} 
            className="input" 
        />
        <input type="button" 
            value="搜索" 
            onClick={()=>{this.searchHandle()}} 
            className="search-btn"
        />
      </div>

      <div className="search-result">
         {/* <div className={flag?"tips":"dis-no"}>您输入的关键字<span>"{this.state.name}"</span>共有<span>{count}</span>个结果</div>  */}
        {flag && <div className="tips">您输入的关键字<span>"{this.state.name}"</span>共有<span>{count}</span>个结果</div> }
        <ul className="top-ul">
        {
            this.state.list.map((item,index)=>{
                return(
                    <li key={index} >
                        <Link to={/Detail/+item.id} >
                        <div className="pic"><img src={item.images.small} alt="" /></div>
                        <div className="infos">
                            <div className="item-title"> {item.title}</div>
                            <div className="genres">类型： {item.genres}</div>
                            <div className="direactors">
                                导演：{item.directors.map((item,index)=>{
                                return(
                                    <Fragment key={index}>
                                     {item.name}
                                    </Fragment>
                                )
                            })}</div>
                            <div className="casts">主演：{
                                item.casts.map((item,idx)=>{
                                    return(
                                        <span key={idx} className="">{item.name}</span>
                                    )
                                })
                            }</div>
                        </div>
                        </Link>
                    </li>
                )
            })
        }
        </ul>
      </div>
    </>
    )
  }
}
