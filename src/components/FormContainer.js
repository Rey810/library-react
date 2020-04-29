import React, { Component } from "react";
import uniqID from "../util/util";

class FormContainer extends Component {
  state = {
    // state props will be initialized when they're set with setState
    haveRead: false,
  };

  setStateProps = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleReadStatus = () => {
    this.setState({ haveRead: !this.state.haveRead });
  };

  addBook(formState) {
    const { title, author, haveRead } = formState;
    const newBook = {
      title,
      author,
      haveRead,
      id: uniqID(),
    };
    // this adds the book to the library
    this.props.addBookAction(newBook);
  }

  render() {
    return (
      <div>
        <section className="form-container">
          <input
            type="text"
            name="title"
            placeholder="Enter Title..."
            onChange={this.setStateProps}
            value={this.state.title}
          />
          <input
            type="text"
            name="author"
            placeholder="Enter Author..."
            value={this.state.author}
            onChange={this.setStateProps}
          />
          <label htmlFor="yes">Yes</label>
          <input
            type="radio"
            value="yes"
            id="yes"
            name="haveRead"
            onChange={this.toggleReadStatus}
          />
          <label htmlFor="no">No</label>
          <input
            type="radio"
            value="no"
            id="no"
            name="haveRead"
            onChange={this.toggleReadStatus}
            defaultChecked
          />
          <button type="button" onClick={() => this.addBook(this.state)}>
            Add Book
          </button>
        </section>
      </div>
    );
  }
}

export default FormContainer;
