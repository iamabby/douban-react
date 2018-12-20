import React, { Component } from 'react'
import './Home.scss';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Tab from '../Tab/Tab';
import Title from '../Title/Title';
 class Top extends Component {
 constructor(){
     super()
     this.state={
         list:[]
     }
 }
 componentDidMount(){
     axios.get("/v2/movie/in_theaters")
     .then(res=>{
         this.setState({
            list:res.data.subjects
         })
     })
     .then(error=>{
         console.log(error);
     })
 }
  render() {
      const { list}=this.state;
    return (
    <>
    <Title title="热映电影" />
      <ul className="top-ul">
        {
            list.map((item,index)=>{
            return(
                <li key={index}>
                  <Link to={/Detail/+item.id}>
                  <div className="pic"><img src={item.images.small} alt="" /></div>
                  <div className="infos">
                    <div className="item-title"> {item.title}</div>
                    <div className="genres">类型： {item.genres}</div>
                    <div className="direactors">导演：{item.directors[0].name}</div>
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
      <Tab />
      </>
    )
  }
}
export default Top;
