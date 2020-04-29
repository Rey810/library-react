import React, { Component } from "react";
import Book from "./Book";

class Library extends Component {
  render() {
    const { library } = this.props;

    return (
      <section className="library-container">
        {library.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            haveRead={book.haveRead}
          />
        ))}
      </section>
    );
  }
}

export default Library;
