import React, { Component } from 'react';
import {Link} from 'react-router';
import LinkedStateMixin from 'react-addons-linked-state-mixin' ;
var App = React.createClass({
    mixins: [LinkedStateMixin],
  getInitialState(){
    return {message: 'Hello!'};
  },
  render(){
  	var _this = this;
    return (
      <div>
          <h1>这是app.js</h1>
          <span style={{display:'block'}}>
              {this.state.message}
          </span>
          <input type="text" valueLink={_this.linkState('message')} />
          <Link to="/repos/222" activeStyle={{color:"red",textDecoration:"none"}}>跳转到repos111</Link>

          {this.props.children}
      </div>
    );
  }
})

export default App;
