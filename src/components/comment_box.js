import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {

  constructor(props){
    super(props);

    this.state = {
      "author":"",
      "body":"",
      "comment":{}
    }
  }

  handleSubmit(event){
    event.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState({
      "author":"",
      "body":""
    });

  }

  handleChange(event){

    switch(event.target.className){
      case "comment-box--author-input":
        this.setState({"author": event.target.value});
        break;
      case "comment-box--textarea":
        this.setState({"body": event.target.value});
        break;
    }

    this.setState({
      comment: {
        "author": this.state.author,
        "body": this.state.body
      }
    });

  }

  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <h4>Add a Comment</h4>
        <h6>Enter your name:</h6>
        <input
          className="comment-box--author-input"
          value={this.state.author}
          onChange={this.handleChange.bind(this)}
          type="text"/> <hr/>
        <textarea
          className="comment-box--textarea"
          value={this.state.body}
          onChange={this.handleChange.bind(this)} /> <br />
        <button action="submit">Submit Comment</button>
      </form>
    );
  }
}

export default connect(null, actions)(CommentBox);
