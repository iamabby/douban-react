import React, { Component } from 'react'
import "./Star.scss";
export default class Star extends Component {
  render() {
      console.log(this.props.num);
        let num=(Math.round(this.props.num)/2)*20+'%'; //四舍五入后折算成百分比
        console.log("num:"+num);
        return (
        <div className="star">
            <div className="star-item">
                <div className="star-rating" style={{width:num}}></div>
               
            </div>
            <div className="star-num">{this.props.num}</div>
        </div>
    )
  }
}
