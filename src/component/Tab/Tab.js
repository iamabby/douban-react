import React, { Component,Fragment } from 'react'
import './Tab.scss';
import{NavLink} from "react-router-dom";

 class Tab extends Component {
  render() {
    return (
        <Fragment>
        <div className="tab">
            <div className="tab-item">
            <NavLink exact activeClassName="seleted" to="/">
            <div className="icon hot"></div>
            热映
            </NavLink>
            </div>
            
            <div className="tab-item">
            <NavLink activeClassName="seleted" to="/My">
            <div className="icon my"></div>
            我的</NavLink>
            </div>
            
            
            <div className="tab-item">
            <NavLink activeClassName="seleted" to="/Search">
            <div className="icon search"></div>
            搜索</NavLink>
            </div>
        </div>
     </Fragment>
    )
  }
}
export default Tab;
