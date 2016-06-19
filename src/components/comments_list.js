import React, { Component } from "react";
import Comment from "./comment";
import { connect } from "react-redux";

class CommentsList extends Component {

  constructor(props){
    super(props);
  }

  render(){
    const list = this.props.comments.map((comment) => (
      <Comment comment={comment} />
    ));

    return (
      <ul className="comments-list">{list}</ul>
    );
  }

}

function mapStateToProps(state){
  return { "comments" : state.comments };
}

export default connect(mapStateToProps)(CommentsList);
