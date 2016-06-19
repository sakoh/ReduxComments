import React, { Component } from "react";

export default class Comment extends Component {

  constructor(props){
    super(props);

    this.state = {
      "comment": this.props.comment
    }
  }

  render(){
    return (
        <li className="comment">{this.state.comment}</li>
    );
  }
}