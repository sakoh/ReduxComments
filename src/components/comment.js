import React, { Component } from "react";

export default class Comment extends Component {

  constructor(props){
    super(props);

    this.state = {
      "comment": this.props.comment
    }
  }

  render(){

    let { author, body } = this.state.comment;

    return (
        <li className="comment" key={body}>
          <span className="comment-author" >{author} wrote:</span>
          <br />
          <p className="comment-body">{body}</p>
          <hr/>
        </li>
    );
  }
}
