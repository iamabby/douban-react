import React, { Component } from 'react'
import "./Wantsee.scss";
import {Link} from "react-router-dom";
export default class Wantsee extends Component {
  constructor(props){
    super(props);
    this.state={
        flag:false,
    }
  }
  wantHandle(){
    const flag=!this.state.flag;
    this.setState({
     flag:flag
    })
  }
  render() {
    const {
        flag
    }=this.state;
    return (
      <div className="want-see">
        <div className={flag?"red":'want-item'} onClick={()=>this.wantHandle()}>
            {flag?'我想看':'想看'}
        </div>
        <div className="want-item">
          <Link to="/Comment">
          看过
          </Link>
        </div>
      </div>
    )
  }
}
