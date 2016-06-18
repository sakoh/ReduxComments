import React, { Component } from 'react';

export default class Comment extends Component {
  render(){
    return (
        <li className="comment">{this.props.body}</li>
    );
  }
}
