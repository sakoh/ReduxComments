import React, { Component } from "react";
import Comment from "../../src/components/comment";

export default class CommentsList extends Component {

  constructor(props){
    super(props);

    this.state = {
      "comments": this.props.comments
    }
  }

  render(){

    let comments = this.state.comments.map((comment) => (
      <Comment comment={comment} />
    ));

    return(
      <ul className="comments-list">
        {comments}
      </ul>
    );
  }
}
