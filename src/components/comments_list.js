import React, { Component } from "react";
import { connect } from "react-redux";

const CommentsList = (props) => {

  const list = props.comments.map((comment) => (
    <li key={comment}>{comment}</li>
  ));

  return (
    <ul className="comments-list">{list}</ul>
  );
};

function mapStateToProps(state) {
  return { "comments" : state.comments };
}

export default connect(mapStateToProps)(CommentsList);
