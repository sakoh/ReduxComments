import React, { Component } from "react";
import { connect } from "react-redux";

class CommentsList extends Component {

  constructor(props){
    super(props);
    this.state = {
      "comments": this.props.comments
    }
  }

  render(){
    const list = this.state.comments.map((comment) => (
      <li key={comment}>{comment}</li>
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
