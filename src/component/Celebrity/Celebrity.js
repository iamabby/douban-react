import React, { Component } from 'react'
import "./Celebrity.scss";
import axios from "axios";
import Star from '../Star/Star';
import Title from '../Title/Title';
import {Link} from "react-router-dom";
export default class Celebrity extends Component {
    constructor() {
        super()
        this.state={
        name:"",
        name_en:'',
        aka:'',
        pic:'',
        gender:'',
        born_place:'',
        works:[],
        }
    }
    componentDidMount() {
        axios.get("/v2/movie/celebrity/" + this.props.match.params.id)
        .then(res=>{
            console.log(res.data)
            var data=res.data;
           this.setState({
            name:data.name,
            name_en:data.name_en,
            aka:data.aka,
            pic:data.avatars,
            gender:data.gender,
            born_place:data.born_place,
            works:data.works,
            
           })
        })
        .then(error=>{
            console.log(error);
        })
    }
  render() {
    const {
        name,
        name_en,
        aka,
        pic,
        gender,
        born_place,
        works,
    }=this.state;
    return (
     <>
     <Title title="演员资料" back="返回" />
      <div className="celebrity">
       
       <div className="name">
       {name}-{name_en}
       </div>
       <div className="infos">
        <div className="infos-text">
        <p>
            性别：{gender}
        </p>
        <p>
            更多中文名：{aka}
        </p>
        <p>
            出生地：{born_place}
        </p>
        </div>
        <div className="pic">
         <img src={pic.medium} alt="" />
        </div>
       
       </div>
       <div className="works">
        <h2>个人作品</h2>
          <ul className="works-ul">
             {
                works.map((item,index)=>{
                    return( 
                        <li key={index} className="works-item">
                        <Link to={/subject/+item.subject.id}>
                        <div className="item-info">
                            <img src={item.subject.images.medium} alt="" className="pic" />
                            <div className="works-title">{item.subject.title}</div>
                            <div className="rating">
                                <Star num={item.subject.rating.average} />
                            </div>
                         </div>
                        {item.roles}
                        </Link>
                        </li>
                    )
                })
             } 
             
          </ul>
       </div>
      </div>
    </>
    )
  }
}
