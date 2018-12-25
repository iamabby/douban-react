import React, { Component } from 'react'
import './Comment.scss';
import Title from '../Title/Title';
export default class Comment extends Component {
constructor(){
 super()
 this.state={
    textValue:'',
    num:0
 }
}
 textareaHandle(e){
this.setState({
    textValue:e.target.value
})
}
starHandle(item){
    this.setState({
      num:item
    })
}
submitHandle(){
    const {id}=this.props;
}
  render() {
    const{
        textValue,
        num
    }=this.state;
    return (
    <>
        <Title title="评论" back="返回" />
        <div className="comment">
        <div className="stars">
         {
             [1,2,3,4,5].map((item,index)=>{
                return(
                    <span key={index} onClick={this.starHandle.bind(this,item)}>
                        {item>=num?<span style={{color:"#FFAC2D",fontSize:"32px"}}>☆</span>:<span style={{color:"#FFAC2D",fontSize:"32px"}}>★</span>}
                     </span>
                )
            })
            
         } 
        </div>
        <textarea className="textarea" onChange={this.textareaHandle.bind(this)} placeholder="请输入评价内容" value={textValue} />

        <input type="button" value="提交" onClick={this.submitHandle.bind(this)} className="submit-btn" />
      </div>
    </>
    )
  }
}
