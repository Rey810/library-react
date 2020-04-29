import React, { Component } from "react";

class Book extends Component {
  showStatus(status) {
    return status === true ? "Yes" : "No";
  }

  render() {
    return (
      <div className="book-container grey-background margin-top-bottom">
        <h1 className="book-title">{this.props.title}</h1>
        <h2 className="book-author">{this.props.author}</h2>
        <h2 className="book-status">{this.showStatus(this.props.haveRead)}</h2>
        <button onClick={() => this.props.deleteBookAction2(this.props.id)}>
          x
        </button>
      </div>
    );
  }
}

export default Book;
