import React, { Component } from 'react'
import "./Title.scss";
import {withRouter} from 'react-router-dom';
class Title extends Component {
 constructor(props){
     super(props)
     document.title=this.props.title
     this.state = {}
 }
 goBack = () =>{
  this.props.history.goBack()
  //window.history.go(-1) 返回上一页

 }
  render() {
    return (
      <div className="title">
        <div className="go-back" onClick={this.goBack}>{this.props.back}</div>
        {this.props.title}
      </div>
    )
  }
}
export default withRouter(Title);