import React, { Component } from 'react'
import "./Detail.scss";
import axios from "axios";
import {Link} from "react-router-dom";
import Title from "../Title/Title";
import Wantsee from '../Wantsee/Wantsee';
 class Detail extends Component {
 constructor(props){
     super(props);
     this.state={
        title:'',
        summary:'',
        casts:[],
        img:'',
        countries:'',
        genres:'',
        original_title:'',
        year:'',
        tab:['简介','演员列表'],
        //下表为0
        idx:0
     }
 }
 componentDidMount(){
    axios.get("/v2/movie/subject/" + this.props.match.params.id)
    .then(res=>{
        console.log(res.data);
        this.setState({
            title:res.data.title,
            summary:res.data.summary,
            casts:res.data.casts,
            img:res.data.images,
            countries:res.data.countries,
            genres:res.data.genres.join('  /  '),
            original_title:res.data.original_title,
            year:res.data.year,
        })
    })
    .then(error=>{
        console.log(error);
    })
 }
 tabHandle(index){
  this.setState({
      idx:index
  })
 }
  render() {
    const {title,summary,casts,img,countries,genres,original_title,year,tab} =this.state;
    return (
     <>
      <Title title="影片详情" back="返回" />
      <div className="detail">
       <div className="detail-top">
       <div className="img">
         <img src={img.large} alt="" />
       </div>
       <div className="top-info">
            <div className="detail-title">{title}</div>
            <div className="original_title">{original_title}</div>
            <div className="countries">片源：{countries}</div>
            <div className="">{genres}</div>
            <div className="year">年份：{year}</div>
       </div>
       </div>



       <Wantsee  />
 
       <div className="detail-tab">
        <ul>  
           {

             tab.map((item,index)=>{
                 return(
                     <li key={index} onClick={this.tabHandle.bind(this,index)} className={this.state.idx===index?'active':''}>
                         {item}
                     </li>
                 )
             })
           }
        </ul>
     

       </div>

       <div className="detail-content">
         <div  className={this.state.idx===0 ? "" : "dis-no"} >
            <div className="summary">{summary}</div>
         </div>
         <div className={this.state.idx===1 ? "" : "dis-no"}>
            <div className="casts">
                <ul className="casts-ul">
                    {
                        casts.map((item,index)=>{
                        return(
                            <li key={index} className="casts-item">
                              <Link  to={/Celebrity/+item.id}>
                                <img src={item.avatars.medium} alt="" className="pic" />
                                <div className="name">{item.name}</div>
                                </Link>
                            </li>
                        ) 
                        })
                    }
                </ul>
                <div className="casts-num">全部{casts.length}位职员</div>
            </div>
         </div>     
       </div>
     </div>
    </>
    )
  }
}

export default Detail;
