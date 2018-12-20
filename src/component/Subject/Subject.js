import React, { Component } from 'react'
import axios from "axios";
import Title from '../Title/Title';
import {Link} from "react-router-dom";
export default class Subject extends Component {
 constructor(){
    super();
    this.state={
     title:'',
        summary:'',
        casts:[],
        img:'',
        countries:'',
        genres:'',
        original_title:'',
        year:'',
        tab:['简介',"演员列表"],
        idx:0
    }
 }
 componentDidMount() {
    axios.get("/v2/movie/subject/"+this.props.match.params.id)
    
    .then(res=>{
        console.log(res.data)
        const data=res.data
        this.setState({
        title:data.title,
        summary:data.summary,
        casts:data.casts,
        img:data.images,
        countries:data.countries,
        genres:data.genres.join('  /  '),
        original_title:data.original_title,
        year:data.year,
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
      <Title title="影片详情"/>
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
      <div className={this.state.idx===0?"":"dis-no"}>
        <div className="summary">{summary}</div>
      </div>
      <div className={this.state.idx===1?"":"dis-no"}>
        <div className="casts">
          <ul className="casts-ul">
            {casts.map((item,index)=>{
              return(
                <li key={index} className="casts-item">
                    <Link  to={/Celebrity/+item.id}>
                    <img src={item.avatars.small} alt="" className="pic" />
                    <div className="name">{item.name}</div>
                    </Link>
                </li>
              )
            })}
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
