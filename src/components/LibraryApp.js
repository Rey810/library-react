import React, { Component } from "react";
import FormContainer from "./FormContainer";
import Library from "./Library";
import uniqID from "../util/util";
//top-level component won't have properties, only state. State can be passed down as props to child components
class libraryApp extends Component {
  //state here
  //data can be state
  state = {
    library: [
      {
        title: "The Stand",
        author: "Stephen King",
        haveRead: false,
        id: uniqID(),
      },
    ],
  };

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }

  saveStateToLocalStorage = () => {
    localStorage.setItem("library", JSON.stringify(this.state.library[0]));
  };

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      console.log("key", key);
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);
        console.log("value", value);
        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ key: [value] });
        } catch (e) {
          // handle empty string
          this.setState({ key: [value] });
        }
      }
    }
  }

  // this function is passed down to the formContainer as a prop (addBookAction)
  // newBook is a book object containing all relevant stuff
  addBookToLibrary = (newBook) => {
    this.setState({ library: [...this.state.library, newBook] });
    // save to local storage
    //this.saveStateToLocalStorage();
  };

  deleteBook = (id) => {
    console.log(id);
    this.setState({
      library: [...this.state.library.filter((book) => book.id !== id)],
    });
    // save to local storage
    //this.saveStateToLocalStorage();
  };

  render() {
    return (
      <>
        <FormContainer addBookAction={this.addBookToLibrary} />
        <Library
          library={this.state.library}
          deleteBookAction1={this.deleteBook}
        />
      </>
    );
  }
}

export default libraryApp;
