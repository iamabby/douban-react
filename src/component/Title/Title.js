import React, { Component } from 'react'
import "./Title.scss";
class Title extends Component {
 constructor(props){
     super(props)
     document.title=this.props.title
 }
 goBack(){
  //  window.history.go(-1)
  // this.props.history.goBack()
  console.log(this.props.history)
 }
  render() {
    return (
      <div className="title">
        <div className="go-back" onClick={()=>{this.goBack()}}></div>
        {this.props.title}
      </div>
    )
  }
}
export default Title;