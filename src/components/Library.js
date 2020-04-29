import React, { Component } from "react";
import Book from "./Book";

class Library extends Component {
  render() {
    const { library } = this.props;
    try {
      return (
        <section className="library-container">
          {library.map((book) => (
            <Book
              deleteBookAction2={this.props.deleteBookAction1}
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              haveRead={book.haveRead}
            />
          ))}
        </section>
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default Library;
