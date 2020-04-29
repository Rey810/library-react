import React, { Component } from "react";
import FormContainer from "./FormContainer";
import Library from "./Library";
// uuid for unique ids
//top-level component won't have properties, only state. State becomes other components props
class libraryApp extends Component {
  //state here
  //data can be state
  state = {
    library: [
      {
        title: "book1",
        author: "Author 1",
        id: 1,
        haveRead: false,
      },
      {
        title: "book2",
        author: "Author 2",
        id: 2,
        haveRead: true,
      },
    ],
  };

  render() {
    return (
      <>
        <FormContainer />
        <Library library={this.state.library} />
      </>
    );
  }
}

export default libraryApp;
